import React from 'react';
import styles from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={styles.contactsContainer}>
                <h2>Contacts</h2>
                <form className={styles.form}>
                    <div>
                        <input type="text"/>
                    </div>
                    <div>
                        <input type="text"/>
                    </div>
                    <div>
                        <textarea></textarea>
                    </div>
                </form>
                <button>Send</button>
            </div>

        </div>
    );
};

export default Contacts;