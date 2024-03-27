import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (
      !name ||
      name.trim() === "" ||
      !email ||
      !email.includes("@") ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input." });
      return;
    }

    const newMessage = {
      name,
      email,
      message,
    };

    const client = new MongoClient(
      "mongodb+srv://stajne2:sandiptajne@cluster0.4i6ggww.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    try {
      await client.connect();
    } catch {
      res.status(500).json({ message: "Database connection failed." });
    }

    const db = client.db("blog");
    const result = await db.collection("messages").insertOne(newMessage);
    client.close();
    res.status(201).json({
      message: "Message sent successfully",
      data: { ...newMessage, id_: result._id },
    });
  }
}
