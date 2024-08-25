import React from 'react';
import styles from './styles.module.scss';

interface ICentredProps {
  orange?: boolean;
  grey?: boolean;
  borders?: boolean;
  large?: boolean;
  children: string | JSX.Element | JSX.Element[];
  className?: any;
}

const Centered = ({ children, orange, grey, borders, large, className }: ICentredProps) => {
  const getColor = () => {
    if (orange) {
      return 'rgba(255, 152, 0, 0.05)';
    }
    if (grey) {
      return '#F7F7F7';
    }
  }

  return (
    <div className={`${styles.wrap} ${borders ? styles.withBorders : ''} ${className}`} style={{ background: getColor() }}>
      <div className={`${styles.centered} ${large ? styles.large : ''}`}>
        {children}
      </div>
    </div>
  )
}

export default Centered;
