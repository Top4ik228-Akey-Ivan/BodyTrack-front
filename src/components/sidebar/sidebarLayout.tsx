import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './sidebar.module.css';
import Sidebar from '.';

const SideBarLayout: React.FC = () => {
    return (
        <div className={styles.layout}>
            <Sidebar />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default SideBarLayout;
