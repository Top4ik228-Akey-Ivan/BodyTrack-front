import RecsCard from './recsCard';
import styles from './recs.module.css';

const RecsList: React.FC = () => {
    const fakeArray: number[] = [0, 1, 2, 3];
    return (
        <div className={styles.recsList}>
            {fakeArray.map((el) => (
                <RecsCard key={el} />
            ))}
        </div>
    );
};

export default RecsList;
