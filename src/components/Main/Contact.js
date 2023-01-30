import React, {useState} from 'react'
function ContactForm() {
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
    <div className="container-fluid contact-container">
      <div className='contact'>
      <div className='contact-image'>
      <a href='https://postimages.org/' target=''><img src='https://i.postimg.cc/0y4JfshL/title.jpg' border='0' width="400" height="400" alt='title'/></a>
      </div>
      <div className='form'>
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
    </div>
    </section>
  )
}
export default ContactForm