import React from 'react'
import "./email-modal.scss"

const EmailModal = (props) => {
  return (
    <div className="email-modal-container">
        <div className="email-modal">
            <div className="exit-modal" onClick={props.toggleModal}>X</div>
            <h4 className="title">Got It!</h4>
            <p>Thanks for your email! I will be in contact with you shortly.</p>
        </div>
    </div>
  )
}

export default EmailModal