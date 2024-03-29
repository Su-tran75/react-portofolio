import React, { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea name="" placeholder="Message"></textarea>
          <button type="submit">
            {!message ? "Send" : "Done"}
          </button>
          {message && <span>Thanks, I'll reply ASAP</span>}
        </form>
      </div>
    </div>
  );
}
