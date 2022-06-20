import React, { useState } from "react";
import "./last-page.scss";
import EmailModal from "../email-modal/email-modal";
import emailjs from "@emailjs/browser";

function LastPage() {
  const [modal, toggleModal] = useState(false);

  const toggleCloseModal = () => {
    toggleModal(!modal);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(document.querySelector('#name').value, document.querySelector('#message').value, document.querySelector('#email').value)
    emailjs.send(
      "service_lu4i6mi",
      "template_f4koqve",
      {
        name: document.querySelector("#name").value,
        message: document.querySelector("#message").value,
        email: document.querySelector("#email").value,
      },
      "WBWkjDLfzSQMfmT-e"
    );

    toggleModal(!modal);
  };
  return (
    <section className="last-page" id="contact">
      <div className="contact">
        <h3>Lets Get In Touch</h3>
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="phone">Phone No.</label>
          <input type="text" id="phone" name="phone" required />
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" name="message"></textarea>
          <button
            className="submit-button"
            type="submit"
            onClick={(e) => onSubmit(e)}
          >
            Send
          </button>
        </form>

        <div className="right">
          <h5><i class="fa-solid fa-phone"></i><a href="tel:607-206-4901"> 607-206-4901</a></h5>
          <h5><i class="fa-brands fa-github"></i><a href="https://github.com/mdc-dev"> GitHub</a></h5>
          <h5><i class="fa-brands fa-linkedin"></i><a href="https://www.linkedin.com/in/matthew-courtney-2854811b5/"> LinkedIn</a></h5>
        </div>
      </div>
      {modal ? <EmailModal toggleModal={toggleCloseModal} /> : null}
    </section>
  );
}

export default LastPage;
