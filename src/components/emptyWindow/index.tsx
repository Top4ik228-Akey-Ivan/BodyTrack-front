import styles from './emptyWindow.module.css';

interface EmptyWindowProps {
    iconPath: string;
    title: string;
    desc: string;
    onAction: () => void;
}

const EmptyWindow: React.FC<EmptyWindowProps> = ({ iconPath, title, desc, onAction }) => {
    return (
        <div className={styles.emptyState}>
            <img className={styles.emptyIcon} alt="Warning" src={iconPath} />
            <h2>{title}</h2>
            <p className={styles.emptyText}>{desc}</p>
            <button className={styles.createButton} onClick={onAction}>
                Создать тренировку
            </button>
        </div>
    );
};

export default EmptyWindow;
