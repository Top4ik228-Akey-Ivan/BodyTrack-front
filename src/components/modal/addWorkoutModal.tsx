import styles from './modal.module.css';
import { useForm, type SubmitHandler } from 'react-hook-form';

interface addWorkoutModalProps {
    onClose: () => void;
    onAccept: (title: string, desc?: string) => void;
}

interface FormValues {
    title: string;
    desc?: string;
}

const AddWorkoutModal: React.FC<addWorkoutModalProps> = ({ onClose, onAccept }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: {
            title: '',
            desc: '',
        },
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        onAccept(data.title, data.desc);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <p className={styles.title}>Создать тренировку</p>

            <input
                className={`${styles.input} ${errors.title ? styles.inputError : ''}`}
                placeholder="Введите название тренировки"
                {...register('title', { required: 'Название обязательно' })}
            />

            <textarea
                className={styles.textarea}
                placeholder="Введите описание тренировки"
                {...register('desc')}
            />

            <div className={styles.buttonBox}>
                <button type="button" className={styles.button} onClick={onClose}>
                    Отмена
                </button>

                <button type="submit" className={`${styles.button} ${styles.primary}`}>
                    Создать
                </button>
            </div>
        </form>
    );
};

export default AddWorkoutModal;
