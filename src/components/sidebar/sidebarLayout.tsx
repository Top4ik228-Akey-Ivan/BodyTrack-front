import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './sidebar.module.css';
import Sidebar from '.';
import RecsList from '../recs/recsList';

const SideBarLayout: React.FC = () => {
    return (
        <div className={styles.layout}>
            <Sidebar />
            <main className={styles.main}>
                <Outlet />
            </main>
            <RecsList />
        </div>
    );
};

export default SideBarLayout;
