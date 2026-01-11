import styles from './recs.module.css';

import avatar from '../../assets/photos/users/rebecca.png';
import plus from '../../assets/icons/other/plus.svg';

const RecsCard: React.FC = () => {
    return (
        <div className={styles.rec}>
            <div className={styles.avatarBox}>
                <img className={styles.avatar} src={avatar} alt="Аватар" />
                <div className={styles.info}>
                    <p>Rebecca</p>
                    <p className={styles.desc}>Рекомандации для вас</p>
                </div>
            </div>
            <img className={styles.addIcon} src={plus} alt="Добавить" />
        </div>
    );
};

export default RecsCard;
