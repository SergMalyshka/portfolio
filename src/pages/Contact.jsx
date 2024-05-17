import { useState } from "react";
import { validateEmail } from "../utils/helpers";
import style from "./Contact.module.css"

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const hadleImputChange = (e) => {
    const { target } = e;
    const inputName = target.name;
    const inputValue = target.value;

    if (inputName === 'email') {
      setEmail(inputValue)
    } else if (inputName === 'name') {
      setName(inputValue)
    } else {
      setMessage(inputValue)
    }

    if (!validateEmail(email)) {
      setErrorMessage('Email is not valid');
    } else if (!name) {
      setErrorMessage('Please fill out your name')
    } else if (!message) {
      setErrorMessage('Please fill out the message')
    } else {
      setErrorMessage('')
    }

  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name || !message) {
      setErrorMessage('Please complete all fields before submitting the form');
      return;
    }

    setEmail('')
    setName('')
    setMessage('')
  };

  return (
    <div>
      <div className="container pageHeaders text-center">
        <h1>Leave me a message!</h1>
        <form className='form' onSubmit={handleFormSubmit}>

          <input
            value={email}
            name='email'
            onChange={hadleImputChange}
            type="email"
            placeholder="email"
            className={`form-control ${style.formItem}`}
          />

          <input
            value={name}
            name='name'
            onChange={hadleImputChange}
            type="text"
            placeholder="name"
            className={`form-control ${style.formItem}`}
          />
          <textarea
            value={message}
            name='message'
            onChange={hadleImputChange}
            type="text"
            placeholder="message"
            className={`form-control ${style.formItem}`}
          ></textarea>

          {errorMessage && (
            <div>
              <p className={style.error}>{errorMessage}</p>
            </div>
          )}

          <button className="btn btn-warning" type="submit">
            Submit
          </button>
        </form>

      </div>
    </div>
  );
}

export default Contact