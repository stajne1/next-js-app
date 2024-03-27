import Head from "next/head";
import ContactForm from "../components/contact/contact-form";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Sandy's Blog | Contact Us</title>
        <meta
          name="description"
          content="Have Questions?, Contact us from over here."
        />
      </Head>
      <ContactForm />
    </>
  );
}
