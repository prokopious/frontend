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
                {/* <div className={styles.send}><b>or..</b></div> */}
                <div className={styles.email}>
                    <input
                        required
                        id={styles.email}
                        placeholder="your email address.."
                        value={values.email}
                        onChange={handleChange}
                        type='email'
                    />
                </div>
                <div>
                    <input
        
                        id={styles.subject}
                        value={values.subject}
                        placeholder="subject.."
                        onChange={handleChange}
                        type='text'
                    /></div>
                <div>
                    <textarea
                        required
                        value={values.message}
                        placeholder="message.."
                        onChange={handleChange}
                        id={styles.message}
                        rows={8}
                    /></div>
                <button className={styles.bu} type='submit' value='Submit'>Send</button>
            </form>
        </div>
    );
};

export default ContactForm;