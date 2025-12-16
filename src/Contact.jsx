import React from "react";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section block" id="contact">
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out for collaborations, opportunities, or just to say
        hi!
      </p>

      <div className="contact-icons">
        <a
          href="https://github.com/Yuvarajyuvi3"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="icon github-icon block" />
        </a>
        <a
          href="https://www.linkedin.com/in/yuvaraj-j-34254532b"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="icon linkedin-icon block" />
        </a>
        <a href="mailto:yuvarajjayakumar04@gmail.com" aria-label="Email">
          <MdEmail className="icon email-icon" />
        </a>
        <a
          href="https://wa.me/917708393484"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="icon whatsapp-icon block" />
        </a>
      </div>

      <div className="contact-number">
        📞 <strong>+91 7708393484</strong>
      </div>

      <span className="thank-you">
        Thank you for visiting my portfolio! If you have any questions or just want to connect, don't hesitate to reach out. Your feedback and inquiries are always welcome!
      </span>
    </section>
  );
};

export default Contact;