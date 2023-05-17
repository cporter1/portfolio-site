import { useState } from "react"
import { send } from 'emailjs-com'
import WarningPage from "../components/WarningPage";

export default function ContactMe() {

  const [emailContent, setEmailContent] = useState({
    sender_name: '',
    sender_email: '',
    message: '',
  })

  function onSubmit(event) {
    event.preventDefault();

    // // TODO: if any inputs are blank throw error
    // console.log('submitted')

    send(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      emailContent,
      process.env.NEXT_PUBLIC_PUBLIC_KEY,
    )
    .then((response) => {
      clearFields()
    })
    .catch(e => {
      console.error('failed:', e)
    })

  }

  function handleChange(event) {
    setEmailContent({ ...emailContent, [event.target.name]: event.target.value })
  }

  function clearFields() {
    setEmailContent({
      sender_name: '',
      sender_email: '',
      message: '',
    })
  }

  return (
    <section id='contact-section' className="contactme-container">
      <h2>CONTACT ME</h2>
      <div className="contactme-grid-wrapper">
        <div className="info-container"> 
          <div className="email-wrapper">
            <h3>EMAIL</h3>
            <text>colinarthurporter@gmail.com</text>
          </div>
        </div>
        <form className="form-container" onSubmit={onSubmit}>
          <div className="name-email-wrapper">
            <input
              type='text'
              name='sender_name'
              placeholder='your name'
              value={emailContent.sender_name}
              onChange={handleChange}
            />
            <input
              type='text'
              name='sender_email'
              placeholder='your email'
              value={emailContent.sender_email}
              onChange={handleChange}
            />
          </div>
          <textarea
            className="email-textarea"
            type='text'
            name='message'
            placeholder='message'
            value={emailContent.message}
            onChange={handleChange}
            
          />
        </form>
        <div/>
          <div className="button-container">
            <WarningPage handleTask={onSubmit} clearFields={clearFields}/>
            <button className="contactme-cancel-button"
              onClick={clearFields}>Clear</button>
          </div>
      </div>
    </section>
  )
}