import { useState } from "react"

function ContactForm({submittedData,setSubmittedData}) {
  const [firstname,setFirstname] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [message,setMessage] = useState("");
  const [errors,setErrors] = useState([]);
 

  function handleFirstNameChange(event) {
    setFirstname(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePhoneChange(event) {
    setPhone(event.target.value);
  }
  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function handleFormSubmit(e){
    e.preventDefault();
    if(firstname.length){
      const formData ={
      firstname:firstname,
      email:email,
      phone: phone,
      message:message,

    }
    fetch('http://localhost:8001/clients', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
  })
    setSubmittedData([...submittedData, formData])
    setFirstname("");
    setEmail("");
    setPhone("");
    setMessage("");
    setErrors([]);
  }
    else{
      setErrors(["Please enter a first name"]);
    }
  }
  return (

    <section>
    <div className="container-fluid contact-container">
      <div className='contact'>
      <div className='contact-image'>
      <a href='https://postimages.org/' target=''><img src='https://i.postimg.cc/0y4JfshL/title.jpg' border='0' width="600" height="500" alt='title'/></a>
      </div>
      <div className='form'>

              <h1>Contact Form</h1>
                <form id="contact_form" value="contact_form" method="post" onSubmit={handleFormSubmit}>
                    <div className="mb-5 row">
                        <div className="col">
                            {/* <label>First Name</label> */}
                            <input onChange={handleFirstNameChange} id="input" type="text" required maxLength="50" name="firstname"/>
                        </div>

                    </div>
                    <div className="mb-5 row">
                        <div className="col">
                            {/* <label htmlFor="email_addr">Email address</label> */}
                            <input onChange={handleEmailChange} id="input" type="email" required maxLength="50" name="email" placeholder="name@example.com" />
                        </div>
                        
                    </div>
                    <div className="mb-5 p-30 row">
                    <div className="col">
                            {/* <label htmlFor="phone_input">Phone</label> */}
                            <input onChange={handlePhoneChange} id="input" type="tel" required maxLength="50" name="Phone" placeholder="Phone" />
                        </div>

                    </div>
                    <div className="mb-5">
                        {/* <label htmlFor="message">Message</label> */}
                        <textarea onChange={handleMessageChange} id="input" className="form-control" id="message" name="message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary px-4 btn-lg">Post</button>
          </form>
{
      errors.length > 0
      ? errors.map((error, index) =>{
        return <p key={index} style={{ color: "red" }}>{error}</p>
      })
      : null
    }

      </div>
    </div>
    </div>
    </section>
  )
}

export default ContactForm