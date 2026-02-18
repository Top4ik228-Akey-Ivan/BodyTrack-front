import styles from './modal.module.css';

import { useForm, type SubmitHandler } from 'react-hook-form';
import type { MuscleGroup } from '../../types/exercises';

interface AddExerciseModalProps {
    onClose: () => void;
    onAccept: (data: { title: string; desc?: string; muscleGroup: MuscleGroup }) => void;
}

interface FormValues {
    title: string;
    desc?: string;
    muscleGroup: MuscleGroup;
}

const MuscleGroups: { value: MuscleGroup; label: string }[] = [
    { value: 'CHEST', label: 'Грудь' },
    { value: 'BACK', label: 'Спина' },
    { value: 'LEGS', label: 'Ноги' },
    { value: 'SHOULDERS', label: 'Плечи' },
    { value: 'ARMS', label: 'Руки' },
    { value: 'CORE', label: 'Кор' },
];

const AddExerciseForm: React.FC<AddExerciseModalProps> = ({ onClose, onAccept }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: {
            title: '',
            desc: '',
            muscleGroup: 'CHEST',
        },
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        onAccept(data);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input
                className={`${styles.input} ${errors.title ? styles.inputError : ''}`}
                placeholder="Введите название упражнения"
                {...register('title', {
                    required: 'Название обязательно',
                })}
            />

            <textarea
                className={styles.textarea}
                placeholder="Описание упражнения"
                {...register('desc')}
            />

            <select
                className={`${styles.select} ${errors.muscleGroup ? styles.inputError : ''}`}
                {...register('muscleGroup', {
                    required: 'Выберите группу мышц',
                })}
            >
                <option value="" disabled hidden>
                    Выберите группу мышц
                </option>
                {MuscleGroups.map((group) => (
                    <option key={group.value} value={group.value}>
                        {group.label}
                    </option>
                ))}
            </select>

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

export default AddExerciseForm;
