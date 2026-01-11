import styles from './workoutCard.module.css';
import authorPhoto from '../../assets/photos/users/rebecca.png';

const WorkoutCard: React.FC = () => {
    return (
        <div className={styles.workoutCard}>
            <p className={styles.workoutTitle}>Грудь - трицепс</p>
            <p className={styles.workoutDesc}>Тренировка по понедельникам, сплит система</p>
            <div className={styles.authorBox}>
                <p className={styles.author}>Автор:</p>
                <div className={styles.avatarBox}>
                    <p className={styles.authorName}>Rebecca</p>
                    <img className={styles.avatar} src={authorPhoto} alt="Автор" />
                </div>
            </div>
        </div>
    );
};

export default WorkoutCard;
