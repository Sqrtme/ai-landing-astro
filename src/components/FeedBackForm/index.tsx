import React from 'react';
import styles from './style.module.scss';

const FeedBackForm = () => (
  <section className={styles.wrapper}>
    <div className={styles.form}>
      <h5>Получить бесплатную консультацию</h5>
      <div className={styles.inputs}>
        <input type="text" placeholder="Имя"/>
        <input type="text" placeholder="Ваша эл. почта"/>
        <input type="text" placeholder="Телефон"/>
      </div>
      <button>Получить консультацию</button>
      <p>Нажимая на кнопку, вы предоставляете согласие на обработку персональных данных и подтверждаете, что
        ознакомились с <a href="/docs/policy.pdf" target="_blank" rel="noreferrer">Политикой конфиденциальности</a></p>
    </div>
  </section>
);

export default FeedBackForm;
