import styles from './modal.module.css';

interface AnalyzeModalProps {
    chunks: string;
}

const AnalyzeModal: React.FC<AnalyzeModalProps> = ({ chunks }) => {
    return <div className={styles.analyzeModal}>{chunks}</div>;
};

export default AnalyzeModal;
