import styles from './modal.module.css';

interface InfoModalProps {
    title: string;
    closeOption: string;
    acceptOption: string;
    onClose: () => void;
    onAccept: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({
    title,
    onClose,
    onAccept,
    closeOption,
    acceptOption,
}) => {
    return (
        <>
            <p className={styles.title}>{title}</p>
            <div className={styles.buttonBox}>
                <button className={styles.button} onClick={onClose}>
                    {closeOption}
                </button>

                <button onClick={onAccept} className={`${styles.button} ${styles.primary}`}>
                    {acceptOption}
                </button>
            </div>
        </>
    );
};

export default InfoModal;
