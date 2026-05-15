import Loader from '../loader';
import styles from './modal.module.css';
import ReactMarkdown from 'react-markdown';

interface AnalyzeModalProps {
    chunks?: string;
}

const AnalyzeModal: React.FC<AnalyzeModalProps> = ({ chunks }) => {
    return (
        <div className={chunks ? styles.analyzeModal : `${styles.analyzeModal} ${styles.center}`}>
            {chunks ? (
                <div className={styles.markdown}>
                    <ReactMarkdown>{chunks}</ReactMarkdown>
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default AnalyzeModal;
