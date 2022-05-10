import logo from '../../static/images/logo.svg';
import React, { FC } from 'react';

export const AppHeader: FC = () => {
    return <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
        >
            Learn React
        </a>
    </header>;
};
