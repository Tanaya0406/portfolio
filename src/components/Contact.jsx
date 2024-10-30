import React, { useRef } from 'react';
import './contacts.css';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_deydr1o', 'template_kmt7a92', form.current, 'lYSMWB-shv79ZQ94A')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        e.target.reset();
      }, (error) => {
        console.error('Error sending email:', error.text);
      });
  };

  return (
    <section id="contact">
      <h3>Connect with Me</h3>
      <h2>Contact</h2>

      <div className="contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__icon" />
            <h4>Email</h4>
            <h5>tanayaapurva04@gmail.com</h5>
            <a href="mailto:tanayaapurva04@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
