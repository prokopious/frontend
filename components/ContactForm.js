"use client"
import styles from './ContactForm.module.css'

import useContactForm from '../hooks/useContactForm';

const ContactForm = () => {

    const { values, handleChange } = useContactForm();

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className={styles.contact}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>Email</label>
                </div>
                <div>
                    <input
                        required
                        id='email'
                        value={values.email}
                        onChange={handleChange}
                        type='email'
                    />
                </div>
                <div>
                    <label htmlFor='subject'>Subject</label>
                </div>
                <div>
                    <input
                        required
                        id='subject'
                        value={values.subject}
                        onChange={handleChange}
                        type='text'
                    /></div>
                <div>
                    <label htmlFor='message'>Message</label>
                </div>
                <div>
                    <textarea
                        required
                        value={values.message}
                        onChange={handleChange}
                        id='message'
                        rows={8}
                    /></div>
                <button type='submit' value='Submit'>Send</button>
            </form>
        </div>
    );
};

export default ContactForm;