import React from 'react';
import styles from './Button.module.css';

const Button = ({ label, type }) => {
    const className = `${styles.button} ${
        type === 'primary'
            ? styles.primary
            : type === 'danger'
            ? styles.danger
            : ''
    }`;

    return (
        <button className={className}>
            {label}
        </button>
    );
};

export default Button