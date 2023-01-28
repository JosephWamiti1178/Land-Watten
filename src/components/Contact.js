import React, {useState} from 'react'
const ContactForm = () => {
  const [formStatus, setFormStatus] = useState('Send')

  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <section>
    <div className="container  contact">
      <div className='contact-image'>
      <a href='https://postimages.org/' target='_blank'><img src='https://i.postimg.cc/zXLt7JQr/title.jpg' border='0' alt='title'/></a>
      </div>
      <div className='form '>
      <h2 className="mb-3">Quick Enquiry</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
      
      </div>
    </div>
    </section>
  )
}
export default ContactForm