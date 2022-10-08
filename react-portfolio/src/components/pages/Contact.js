import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  // Create state variables for the fields in the form
  // Set initial values to an empty string
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState)
    // If everything is valid, clear out the input after a successful registration.
    setErrorMessage('');
    setFormState({ name: '', email: '', message: '' })
    console.log('message submitted!');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      const isValid = validateEmail(value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.')
      } else {
        setErrorMessage('');
      }
    } else {
      if (!value.length) {
        setErrorMessage(`A ${name} is required`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [name]: value })
    }
  }

  return (
    <div className='container'>
      <div className='page-container'>
        <h1 className='page-title'>Contact Page</h1>
        <div>
          <form className='form'>
            <input
              defaultValue={name}
              name='name'
              type='text'
              placeholder='name'
              onBlur={handleChange}
            />
            <input
              defaultValue={email}
              name='email'
              type='email'
              placeholder='email'
              onBlur={handleChange}
            />
            <input
              defaultValue={message}
              name='message'
              type='text'
              placeholder='message'
              onBlur={handleChange}
            />
            <button type='submit' onClick={handleSubmit}>Submit</button>
          </form>
          {errorMessage && (
            <div>
              <p className='error-text'>{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactForm;