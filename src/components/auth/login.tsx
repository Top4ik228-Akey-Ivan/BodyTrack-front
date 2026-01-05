import styles from './auth.module.css';
import { useForm } from 'react-hook-form';

import checkMark from '../../assets/icons/other/check-mark.svg';
import { useState } from 'react';
import { useLogin } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

interface LoginForm {
    email: string;
    password: string;
    rememberMe: boolean;
}

const LoginPage: React.FC = () => {
    const { handleLogin, loginError } = useLogin();
    const [serverError, setServerError] = useState<string>('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
    });

    const onSubmit = async (data: LoginForm) => {
        setServerError('');
        try {
            await handleLogin({
                email: data.email,
                password: data.password,
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            setServerError(err.message || 'Ошибка при входе');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
            <p className={styles.title}>BodyTrack</p>

            <div className={styles.inputBox}>
                {(serverError || loginError) && (
                    <div className={styles.errorMessage}>{serverError || loginError}</div>
                )}
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

                <input
                    placeholder="Пароль"
                    className={`${styles.input} ${errors.password ? styles.error : ''}`}
                    type="password"
                    autoComplete="current-password"
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
                        <img src={checkMark} alt="remember me" className={styles.checkmarkIcon} />
                    </div>
                    <p className={styles.rememberText}>Запомнить меня</p>
                </label>
            </div>

            <button type="submit" className={styles.primaryButton}>
                Войти
            </button>
            <Link to="/auth/register" className={styles.linkButton}>
                Создать аккаунт
            </Link>
        </form>
    );
};

export default LoginPage;
