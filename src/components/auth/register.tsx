import styles from './auth.module.css';
import { useForm } from 'react-hook-form';

import checkMark from '../../assets/icons/other/check-mark.svg';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../features/auth/api/authApi';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';

interface RegisterForm {
    name: string;
    email: string;
    password: string;
    rememberMe: boolean;
}

const RegisterPage: React.FC = () => {
    const [reg] = useRegisterMutation();
    const navigate = useNavigate();
    const [serverError, setServerError] = useState<string>('');
    const { isAuth } = useSelector((state: RootState) => state.auth);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterForm>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            rememberMe: false,
        },
    });

    const onSubmit = async (data: RegisterForm) => {
        setServerError('');
        try {
            await reg({
                name: data.name,
                email: data.email,
                password: data.password,
            }).unwrap();
            navigate('/workouts');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            setServerError(err.data.message || 'Ошибка при регистрации');
        }
    };

    if (isAuth) {
        return <Navigate to="/workouts" replace />;
    }

    return (
        <div className={styles.formBox}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
                <p className={styles.title}>BodyTrack</p>

                <div className={styles.inputBox}>
                    {serverError && <div className={styles.errorMessage}>{serverError}</div>}
                    {/* Поле Имя */}
                    <input
                        placeholder="Имя"
                        className={`${styles.input} ${errors.name ? styles.error : ''}`}
                        type="text"
                        autoComplete="name"
                        {...register('name', {
                            required: 'Имя обязательно',
                            minLength: {
                                value: 2,
                                message: 'Имя должно содержать минимум 2 символа',
                            },
                            pattern: {
                                value: /^[a-zA-Zа-яА-ЯёЁ\s]+$/i,
                                message: 'Имя может содержать только буквы',
                            },
                        })}
                    />
                    {errors.name && (
                        <span className={styles.errorMessage}>{errors.name.message}</span>
                    )}

                    {/* Поле Email */}
                    <input
                        placeholder="Email"
                        className={`${styles.input} ${errors.email ? styles.error : ''}`}
                        type="email"
                        autoComplete="email"
                        {...register('email', {
                            required: 'Email обязателен',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Введите корректный email адрес',
                            },
                        })}
                    />
                    {errors.email && (
                        <span className={styles.errorMessage}>{errors.email.message}</span>
                    )}

                    {/* Поле Пароль */}
                    <input
                        placeholder="Пароль"
                        className={`${styles.input} ${errors.password ? styles.error : ''}`}
                        type="password"
                        autoComplete="new-password"
                        {...register('password', {
                            required: 'Пароль обязателен',
                            minLength: {
                                value: 6,
                                message: 'Пароль должен содержать минимум 6 символов',
                            },
                        })}
                    />
                    {errors.password && (
                        <span className={styles.errorMessage}>{errors.password.message}</span>
                    )}
                </div>

                <div className={styles.rememberMe}>
                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            className={styles.hiddenCheckbox}
                            {...register('rememberMe')}
                        />
                        <div className={styles.checkBox}>
                            <img
                                src={checkMark}
                                alt="remember me"
                                className={styles.checkmarkIcon}
                            />
                        </div>
                        <p className={styles.rememberText}>Запомнить меня</p>
                    </label>
                </div>

                <button type="submit" className={styles.primaryButton}>
                    Создать аккаунт
                </button>
                <Link to="/auth/login" className={styles.linkButton}>
                    Войти
                </Link>
            </form>
        </div>
    );
};

export default RegisterPage;
