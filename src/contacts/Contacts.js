import React from 'react';
import styles from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={styles.contactsContainer}>
                <h2 className={styles.title}>Contacts</h2>
                <form className={styles.form}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea></textarea>
                </form>
                <button>Send</button>
            </div>

        </div>
    );
};

export default Contacts;