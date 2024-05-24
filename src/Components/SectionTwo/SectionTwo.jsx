import React, { useState } from "react";
import styles from "../SectionTwo/SectionTwo.module.scss";

const SectionTwo = () => {
    const [message, setMessage] = useState('');
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.topBox}>
          <h1>CONTACT US</h1>
        </div>
        <div className={styles.nameLabelBox}>
          <div className={styles.entryBox}>
            <p>First Name</p>
            <input type="text" />
          </div>
          <div className={styles.entryBox}>
            <p>Last Name</p>
            <input type="text" />
          </div>
          <div className={styles.entryBox}>
            <p>Email Address</p>
            <input type="email" />
          </div>
          <div className={styles.entryBox}>
            <p>Tel. Number</p>
            <input type="tel" />
          </div>
        </div>
        <div className={styles.messageBox}>
            <p>Message</p>
            <textarea id="message" name="message" rows="4" cols="50"   value={message}  onChange={(e) => setMessage(e.target.value)}
          className={styles.textarea}/>
        </div>
        <div className={styles.btnBox}>
            <button>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
{
  /* <div className={styles.container}></div> */
}
