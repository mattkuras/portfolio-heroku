import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>Let's get in touch</h1>

        <form>
          <label>
            name
            <input type="text" name="name" />
          </label>
          <label>
            email
            <input type="text" name="email" />
          </label>
          <label>
            message
            <textarea type="text" name="name" />
          </label>
        </form>
      </div>
    </div>
  );
};

export default Contact;
