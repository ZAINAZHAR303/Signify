import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
import "./Contact.css";
// import Navbar from "../../components/Navbar/Navbar";

const Contact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_fx6cqwa", // Your EmailJS Service ID
  //       "template_uilhudq", // Your EmailJS Template ID
  //       form.current,
  //       "gAXpbzydyb4oTm53K" // Your Public Key
  //     )
  //     .then(
  //       (result) => {
  //         console.log("Email sent:", result.text);
  //         setSuccessMessage("Message sent successfully!");
  //         form.current.reset();
  //       },
  //       (error) => {
  //         console.error("Email failed to send:", error.text);
  //         setSuccessMessage("Failed to send message. Please try again.");
  //       }
  //     );
  // };

  return (
    <>
    {/* <Navbar /> */}
    
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form ref={form}  className="contact-form">
        <label>Name</label>
        <input type="text" name="from_name" placeholder="Your Name" required />

        <label>Email</label>
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          ></textarea>

        <button type="submit" className="send-button">
          Send Message
        </button>

        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
    
          </>
  );
};

export default Contact;
