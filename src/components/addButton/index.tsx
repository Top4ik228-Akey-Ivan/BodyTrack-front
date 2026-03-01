import styles from './addButton.module.css';
import addIcon from '../../assets/icons/other/plus.svg';

interface addButtonProps {
    text?: string;
    handleClick: () => void;
}

const AddButton: React.FC<addButtonProps> = ({ text, handleClick }) => {
    return (
        <button
            className={`${text && styles.buttonWithText} ${styles.button}`}
            onClick={handleClick}
        >
            <img className={styles.icon} src={addIcon} alt={text} />
            <p className={styles.text}>{text || ''}</p>
        </button>
    );
};

export default AddButton;
