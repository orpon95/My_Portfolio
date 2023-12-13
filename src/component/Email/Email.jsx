import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7ah60iw', 'template_j8a8xch', form.current, 'YA9BlvDOY3UfeyRaH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <form ref={form} className='text-blue-500' onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input className='btn btn-primary' type="submit" value="Send" />
        </form>
    );
};

export default Email;