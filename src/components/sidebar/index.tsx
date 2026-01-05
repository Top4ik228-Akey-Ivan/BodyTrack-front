import { Link, useLocation } from 'react-router-dom';
import { sidebarSections } from '../../constants/sidebar';
import styles from './sidebar.module.css';

function Sidebar() {
    const pathname = useLocation().pathname;
    const checkActiveSection = (path: string): boolean => {
        return path === pathname;
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
            </div>
        </div>
    );
}

export default Sidebar;
