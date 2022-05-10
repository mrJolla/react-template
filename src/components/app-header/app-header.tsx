import React, { FC } from 'react';

import logo from '../../static/images/logo.svg';

import styles from './app-header.module.css';

export const AppHeader: FC = () => {
    return (
        <header className={styles.header}>
            <img alt='logo' className={styles.logo} src={logo} />

            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>

            <a className={styles.link} href='https://reactjs.org' rel='noopener noreferrer' target='_blank'>
                Learn React
            </a>
        </header>
    );
};
