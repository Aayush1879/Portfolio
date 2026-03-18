import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import "./contact.scss";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Contact() {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("service_z2ghfqb", "template_mx1neja", formRef.current, "qWzayR6rmaw9aXeUC")
      .then(() => {
        setSuccess(true);
        setLoading(false);
        formRef.current.reset();
      }, () => {
        setError(true);
        setLoading(false);
      });
  };

  return (
    <motion.div
      className="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
    >
      <motion.div className="contact-header" variants={fadeUp}>
        <h1>Get in Touch</h1>
        <p>Let's build something together.</p>
      </motion.div>

      <motion.a
        href="mailto:aayushdangi79@gmail.com"
        className="contact-email-pill"
        variants={fadeUp}
      >
        <EmailIcon fontSize="small" />
        aayushdangi79@gmail.com
      </motion.a>

      <motion.form ref={formRef} onSubmit={sendEmail} className="contact-form" variants={fadeUp}>
        <input type="text" required placeholder="Name" name="from_name" />
        <input type="email" required placeholder="Email" name="email" />
        <textarea rows={6} placeholder="Message" name="message" />
        <button type="submit" disabled={loading}>
          <SendIcon fontSize="small" />
          {loading ? "Sending..." : "Send Message"}
        </button>
        {error && <span className="msg error">Something went wrong. Please try again.</span>}
        {success && <span className="msg success">Message sent! I'll get back to you soon.</span>}
      </motion.form>

      <motion.div className="contact-socials" variants={fadeUp}>
        <a href="https://github.com/Aayush1879" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/aayush-dangi-14608a247/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
        <a href="https://www.instagram.com/aayush_1879/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
      </motion.div>

      <motion.div className="contact-footer" variants={fadeUp}>
        © 2026 Aayush Dangi. Built with precision.
      </motion.div>
    </motion.div>
  );
}