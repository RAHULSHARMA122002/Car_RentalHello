import React from 'react';
import './Contact.css';

function Contact(props) {
  if (props.num === 1) {
    document.body.style.backgroundColor = 'black';
    console.log("heelo")
  } else {
    document.body.style.backgroundColor = '';
    console.log("nothello")
  }

  return (
    <div className="contactContainer">
      <div className="contactHeader">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Reach out with any questions or feedback!</p>
      </div>

      <div className="contactContent">
        <div className="contactForm">
          <h2>Send a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>

        <div className="contactInfo">
          <h2>Our Info</h2>
          <p><strong>Email:</strong> support@yourcarrental.com</p>
          <p><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p><strong>Address:</strong> 123 Rental Street, City, Country</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
