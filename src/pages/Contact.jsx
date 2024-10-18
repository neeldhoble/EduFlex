import React from 'react'
import "./Contact.css"

export const Contact = () => {
  return (
    <div className='text-white flex justify-center  items-center h-screen text-3xl'>
      <div className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p className="contact-intro">
          We'd love to hear from you! Whether you have a question about courses, pricing, or anything else, our team is ready to help.
        </p>

        <div className="contact-wrapper">
          {/* Contact Details */}
          <div className="contact-details">
            <h3>Get in Touch</h3>
            <ul>
              <li><strong>Address:</strong> 1234 Learning St, Knowledge City, 56789</li>
              <li><strong>Email:</strong> contact@lms.com</li>
              <li><strong>Phone:</strong> +1 123-456-7890</li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}


