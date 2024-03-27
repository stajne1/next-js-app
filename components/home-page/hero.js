import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/sandip.jpg"
          alt="An image showing Sandip"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Sandip</h1>
      <p>
        I blog about frontend web development - especially about the frontend
        frameworks like React and Angular
      </p>
    </section>
  );
}
