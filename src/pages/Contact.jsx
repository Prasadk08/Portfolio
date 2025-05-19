import "../styles/contact.css";
import mycontactimg from "../assets/mycontactimg.jpg";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-middle">
          <div className="myimage">
            <img className="mycontactimg" src={mycontactimg} alt="" />
          </div>
          <div className="connt">
              <h2>Let's Connect</h2>

              {/* Social Icons */}
              <div className="social-icons">
                <a href="https://linkedin.com/in/prasadkshirsagar" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="icon" />
                </a>
                <a href="https://github.com/prasadkshirsagar" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="icon" />
                </a>
                <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="icon" />
                </a>
                <a href="mailto:prasad@example.com">
                  <FaEnvelope className="icon" />
                </a>
                <a href="mailto:prasad@example.com">
                  <FaXTwitter className="icon" />
                </a>
              </div>

              {/* Resume Button */}
              <a
                href="/Prasad_Kshirsagar_Resume.pdf" // Replace with your actual path
                className="resume-button"
                download
              >
                Download Resume
              </a>
            </div>

          <div className="content-cont">
            Feel free to reach out to me for collaboration, job opportunities,
            or just to say hello. I'm always open to discussing new projects or
            creative ideas!
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
