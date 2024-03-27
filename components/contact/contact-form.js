import { useEffect, useState } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [reqStatus, setReqStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    let timer;
    if (reqStatus === "success" || reqStatus === "error") {
      timer = setTimeout(() => {
        setReqStatus(null);
        setErrorMessage(null);
      }, 3000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [reqStatus]);

  function handleSubmit(e) {
    e.preventDefault();
    setReqStatus("pending");
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => {
            throw new Error(data.message);
          });
        }
        return res.json();
      })
      .then(() => {
        setReqStatus("success");
        setEmail("");
        setName("");
        setMessage("");
      })
      .catch((error) => {
        setReqStatus("error");
        setErrorMessage(error.message);
      });
  }

  let notification;
  switch (reqStatus) {
    case "pending": {
      notification = {
        title: "Sending...",
        message: "Your message is sending...",
        status: "pending",
      };
      break;
    }
    case "success": {
      notification = {
        title: "Message Sent!.",
        message: "Message sent successfully!!!",
        status: "success",
      };
      break;
    }
    case "error": {
      notification = {
        title: "Error!",
        message: errorMessage,
        status: "error",
      };
      break;
    }
  }

  return (
    <section className={classes.contact}>
      <h1>Have a question?</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              value={email}
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              value={name}
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows={5}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button disabled={reqStatus === "pending"}>
            {reqStatus === "pending" ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
      {notification && <Notification {...notification} />}
    </section>
  );
}
