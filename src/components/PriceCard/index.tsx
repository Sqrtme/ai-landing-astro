import React from 'react';
import * as styles from './styles.module.scss';
const PriceCard = ({ title, description, price, tokenPrice, withTooltip }: any) => {
  return (
    <div className={styles.price} style={{ borderRadius: withTooltip ? '0 0 12px 12px' : 12 }}>
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div>
        <p className={styles.priceCount}>
          {price} ₽
          <span> / в мес</span>
        </p>
        <p className={styles.subText}>Включает {tokenPrice} ₽ на балансе</p>
        <p className={styles.subText}>*удерживаем комиссию 10% при пополнении баланса</p>
        <div className={styles.btn}>Попробовать бесплатно</div>
      </div>
      {withTooltip ? (
        <div className={styles.tooltip}>Популярный</div>
      ) : null}
    </div>
  );
}

export default PriceCard;

