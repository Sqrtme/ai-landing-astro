import React, { useState } from 'react';
import * as styles from './styles.module.scss';

const PriceCalculator = ({ onClick }: any) => {
  const MAX_COUNT = 10000;
  const MIN_COUNT = 25;
  const MULTIPLIER = 1800; // cost per user
  const [error, setError] = useState<string>('');
  const [value, setValue] = useState<string>('25');
  const onChange = (e: any)=> {
    setError('');
    const newValue = e.target.value;

    const regex = /^[0-9 ]*$/;
    if (parseInt(newValue, 10) > MAX_COUNT) {
      setError('до 10 000 сотрудников');
    }

    if (parseInt(newValue, 10) < MIN_COUNT || !newValue.length) {
      setError('от 25 сотрудников');
    }
    if (regex.test(newValue)) {
      setValue(newValue);
    }
  }

  const renderPrice = () => {
    if (parseInt(value, 10) > MAX_COUNT) {
      return '18 000 000'; // MAX_COUNT * MULTIPLIER
    }
    const price = parseInt(value, 10) * MULTIPLIER > 50000 ? parseInt(value, 10) * MULTIPLIER : 50000;
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  const renderBalance = () => parseInt(value, 10) > 50 ? '70 000' : '50 000';

  return (
    <>
      <h2 style={{ marginTop: 40, padding: '0 16px' }}>Рассчитайте стоимость, чтобы начать использовать AlpinaGen уже сегодня.</h2>
      <div className="main">
        <div className={styles.main}>
          <h5 className={styles.mainTitle}>Количество сотрудников:</h5>
          <p>*от 25 до 10 000</p>
          <input type="text" className={error ? styles.inputError : undefined} value={value} onChange={onChange}/>
          <div className={styles.error}>{error}</div>
          <h5>Стоимость подписки:</h5>
          <div className={styles.calculatedPrice}>
            {renderPrice()} ₽
            <span> / в год</span>
          </div>
          <h5 className={styles.mainTitle}>Рекомендуемый баланс:</h5>
          <p className={styles.largeTooltip}>*Баланс на счёт в месяц, зависящий от количества сотрудников.</p>
          <p className={styles.largeTooltip}>Компания сама регулирует его, исходя из использования сетей.</p>
          <div className={styles.calculatedPrice} style={{ marginTop: 16 }}>
            {renderBalance()} ₽
            <span> / в мес</span>
          </div>
          <h5 className={styles.largeTooltip} style={{ textAlign: 'center', fontSize: 22, marginBottom: 20 }}>У вас есть вопросы? Хотите узнать подробнее? Напишите нам</h5>
          <div className="btn" onClick={onClick}>Получить консультацию</div>
        </div>
      </div>

    </>
  );
}

export default PriceCalculator;

