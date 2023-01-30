import React, {useState} from 'react'
function ContactForm() {

  const [clients, setClients] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [message, setMessage] = useState("");

  function onAdd(e) {
    e.preventDefault();
    setClients([...clients, { name, email, phone, message }]);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");

    fetch("http://localhost:3000/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  return (
 
    <section>
    <div className="container-fluid contact-container">
      <div className='contact'>
      <div className='contact-image'>
      <a href='https://postimages.org/' target=''><img src='https://i.postimg.cc/0y4JfshL/title.jpg' border='0' width="400" height="500" alt='title'/></a>
      </div>
      <div className='form'>
      
    <h1>Contact Form</h1>
      <form id="contact_form" name="contact_form" method="post" onSubmit={onAdd}>
          <div className="mb-5 row">
              <div className="col">
                  <label>First Name</label>
                  <input type="text" required maxlength="50"  value={name}
                onSubmit={(e) => setName(e.target.value)} className="form-control" id="first_name" name="first_name" />
              </div>
            
          </div>
          <div className="mb-5 row">
              <div className="col">
                  <label for="email_addr">Email address</label>
                  <input type="email" required maxlength="50" value={email}
                onSubmit={(e) => setEmail(e.target.value)}  className="form-control" id="email_addr" name="email"
                      placeholder="name@example.com" />
              </div>
              <div className="col">
                  <label for="phone_input">Phone</label>
                  <input type="tel" required maxlength="50" value={phone}
                onSubmit={(e) => setPhone(e.target.value)}  className="form-control" id="phone_input" name="Phone"
                      placeholder="Phone" />
              </div>
          </div>
          <div className="mb-5">
              <label for="message">Message</label>
              <textarea className="form-control" id="message" name="message" value={message}
                onSubmit={(e) => setMessage(e.target.value)} rows="5"></textarea>
          </div>
          <button type="submit" className="btn btn-primary px-4 btn-lg">Post</button>
</form>
      {/* <h2 className="mb-3">Quick Enquiry</h2>
      <form onSubmit={onAdd}>
         <div className="mb-3">
          <label className="form-label" >
            Name
          </label>
          <input className="form-control"  value={name}
                onSubmit={(e) => setName(e.target.value)} type="text"  />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Email
          </label>
          <input className="form-control"  value={email}
                onSubmit={(e) => setEmail(e.target.value)} type="text" required />
        </div>
        <div className="mb-3">
          <label className="form-label" >
            Phone
          </label>
          <input className="form-control"  value={phone}
                onSubmit={(e) => setPhone(e.target.value)} type="text"  required />
        </div>
        <div className="mb-3">
          <label className="form-label"  value={message}
                onSubmit={(e) => setMessage(e.target.value)}>
            Message
          </label>
          <textarea className="form-control"  required />
        </div>
        <input  type="submit" value="submit" />
        
      </form>
      </div> */}
      </div>
    </div>
    </div>
    </section>
  )
}

export default ContactForm