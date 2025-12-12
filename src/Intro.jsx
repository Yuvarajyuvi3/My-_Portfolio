import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Intro = () => {
    return (
        <section className="intro-section " id="intro">
            <div className="profile-pic">
                <img src="yuvaraj.jpeg" />
            </div>
            <div className="desc ">
                <h1>
                    Hi,
                </h1>
                <h1>I'm <span className="name ">Yuvaraj . J</span></h1>
                <h2>
                    Entry-level Frontend Developer
                </h2>


                <p className="intro-description">
                    Highly motivated and detail-oriented Entry-Level Frontend Developer with a
                    solid foundation in HTML, CSS, JavaScript, and modern UI frameworks.
                    Passionate about building responsive, user-friendly web interfaces and 
                    continuously improving coding skills.
                    Quick learner with strong problem-solving skills, eager to contribute to 
                    real-world applications and grow as a professional developer.
                </p>

                <div className="contact-info ">
                    <a
                        href="https://github.com/Yuvarajyuvi3"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub className="icon github-icon" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/yuvaraj-j-34254532b"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="icon linkedin-icon" />
                    </a>
                    <a href="yuvarajjayakumar04@gmail.com" aria-label="Email">
                        <MdEmail className="icon email-icon" />
                    </a>
                    <a
                        href="https://wa.me/917708393484"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp className="icon whatsapp-icon" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Intro;