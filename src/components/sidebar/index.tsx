import { Link, useLocation } from 'react-router-dom';
import { sidebarSections } from '../../constants/sidebar';
import styles from './sidebar.module.css';

import settingsIcon from '../../assets/icons/other/dots-vertical-white.svg';
import { useLogoutMutation } from '../../features/auth/api/authApi';

function Sidebar() {
    const pathname = useLocation().pathname;
    const [logout] = useLogoutMutation();

    const checkActiveSection = (path: string): boolean => {
        return path === pathname;
    };

    const handleLogout = async () => {
        try {
            await logout().unwrap();
        } catch (err) {
            console.error(err, 'logout failed');
        }
    };

    return (
        <div>
            <header className={styles.header}>BodyTrack</header>
            <div className={styles.sectionsList}>
                {sidebarSections.map((section) => {
                    const isActive = checkActiveSection(section.path);
                    return (
                        <Link to={section.path} key={section.id} className={styles.sectionBox}>
                            <img
                                className={styles.icon}
                                src={isActive ? section.activeIcon : section.icon}
                                alt={section.title}
                            />
                            <div
                                className={
                                    isActive ? styles.activeSectionTitle : styles.sectionTitle
                                }
                            >
                                {section.title}
                            </div>
                        </Link>
                    );
                })}
                <div onClick={handleLogout} className={styles.sectionBox}>
                    <img className={styles.settingsIcon} src={settingsIcon} alt="Выйти" />
                    <div className={styles.sectionTitle}>Выйти</div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
