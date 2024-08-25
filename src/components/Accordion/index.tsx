import React, { useState } from 'react';
import styles from './styles.module.scss';


const IconOpened = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles.icon}>
    <path d="M12 5V19M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconClosed = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles.icon}>
    <path d="M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const Accordion = ({ title, content }: any) => {
  const [isOpen, setOpen] = useState< boolean>(false)
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.header} onClick={() => setOpen(!isOpen)}>
          <h4 className="title">{title}</h4>
          {isOpen ? <IconClosed /> : <IconOpened />}
        </div>
        <div className={`${isOpen ? styles._open : ''} ${styles.content}`}>{content}</div>
      </div>
    </div>
  );
}

export default Accordion;
