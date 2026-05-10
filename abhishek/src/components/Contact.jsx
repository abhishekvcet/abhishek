import { FiMail, FiGithub, FiPhone, FiCode } from 'react-icons/fi';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-tag" style={{ textAlign: 'center' }}>{'{ Contact }'}</div>
      <h2 className="section-title">Let&apos;s Connect</h2>
      <p className="section-subtitle">
        I&apos;m always open to new opportunities, collaborations, and interesting conversations.
      </p>
      <div className="contact-links">
        <a href="mailto:abhishek.236427101@vcet.edu.in" className="contact-link">
          <FiMail className="link-icon" />
          abhishek.236427101@vcet.edu.in
        </a>
        <a href="https://github.com/abhishekvcet" target="_blank" rel="noopener noreferrer" className="contact-link">
          <FiGithub className="link-icon" />
          github.com/abhishekvcet
        </a>
        <a href="https://leetcode.com/abhishekvcet" target="_blank" rel="noopener noreferrer" className="contact-link">
          <FiCode className="link-icon" />
          leetcode.com/abhishekvcet
        </a>
        <a href="tel:+918626010324" className="contact-link">
          <FiPhone className="link-icon" />
          +91-8626010324
        </a>
      </div>
    </section>
  );
}
