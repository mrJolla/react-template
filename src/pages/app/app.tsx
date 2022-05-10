import React from 'react';
import './app.css';
import { AppHeader } from '../../components/app-header/app-header';
import { MainLayout } from '../../layouts/main-layout/main-layout';

export function App() {
    return (
        <MainLayout>
            <div className='App'>
                <AppHeader />
            </div>
        </MainLayout>
    );
}
