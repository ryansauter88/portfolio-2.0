import { useState } from 'react';

function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [confirmMessage, setConfirmMessage] = useState('');

    
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const handleHoverOff = (e) => {
        e.preventDefault();
        if (e.target.value === '') {
            setErrorMessage('This field is required')
            return;
        } else {
            setErrorMessage('');
        }
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (e.target.name == 'email' && !validateEmail(email)) {
            setConfirmMessage('');
          setErrorMessage('Email is invalid.');
          // We want to exit out of this code block if something is wrong so that the user can correct it
          return;
        }
    }
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, username, and password
        // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'
    
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'message') {
            setMessage(inputValue);
        } else {
            setName(inputValue)
        }
    };
    
    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        if (name == '') {
            setConfirmMessage('');
          setErrorMessage(`Please fill out your name.`);
          return;
        }
        if (message == '') {
            setConfirmMessage('');
          setErrorMessage(`Please fill in the message you'd like to send.`);
          return;
        }
        if (!validateEmail(email)) {
            setConfirmMessage('');
          setErrorMessage('Email is invalid.');
          // We want to exit out of this code block if something is wrong so that the user can correct it
          return;
        }


        // If successful, we want to clear out the input after registration.
        setMessage('');
        setEmail('');
        setName('')

        // TODO: send an actual email using the form??
        setErrorMessage('')
        setConfirmMessage('Thanks for reaching out! I will respond back soon.')
    }
    return (
        <>
            <h1>Contact</h1>
            <h3>This page is not currently operating, please send an email to ryansauter88@gmail.com.</h3>
            <form name='contact' className="form" onSubmit={handleFormSubmit} data-netlify="true" method='post'>
                <input type="hidden" name="form-name" value="contact" />
                <input
                    onBlur={handleHoverOff}
                    className='contact-text'
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="name"
                />
                <input
                    onBlur={handleHoverOff}
                    className='contact-text'
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                />
                <textarea
                    onBlur={handleHoverOff}
                    id='contact-message'
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="What would you like to send me?"
                />
                <button type="submit">
                    Submit
                </button>
            </form>
            {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
            )}
            {confirmMessage && (
            <div>
                <p className="confirm-text">{confirmMessage}</p>
            </div>
            )}
        </>
    );
}
export default ContactPage