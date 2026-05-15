import { useEffect, useState } from 'react';

import analyzeIcon from '../../assets/icons/workout/ai-yellow.png';

import styles from './analyzeButton.module.css';

interface AnalyzeButtonProps {
    startAnalyze: (weeks: number) => void;
}

const AnalyzeButton: React.FC<AnalyzeButtonProps> = ({ startAnalyze }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [months, setMonths] = useState<number>(1);

    // закрытие как в модалке
    useEffect(() => {
        const close = () => setOpen(false);

        if (open) {
            document.addEventListener('click', close);
        }

        return () => {
            document.removeEventListener('click', close);
        };
    }, [open]);

    const handleAnalyze = () => {
        setOpen((prev) => !prev);
        startAnalyze(months * 4);
    };

    return (
        <div className={styles.wrapper}>
            <button
                className={styles.analyzeBtn}
                onClick={(e) => {
                    e.stopPropagation();
                    setOpen((prev) => !prev);
                }}
            >
                <img src={analyzeIcon} className={styles.icon} alt="analyze" />
            </button>

            {open && (
                <div className={styles.dropdown} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.options}>
                        {[1, 2, 3].map((m) => (
                            <div key={m} className={styles.option} onClick={() => setMonths(m)}>
                                <div
                                    className={`${styles.radio} ${
                                        months === m ? styles.radioActive : ''
                                    }`}
                                />
                                {m} месяц
                            </div>
                        ))}
                    </div>

                    <button onClick={handleAnalyze} className={styles.runBtn}>
                        Анализировать
                    </button>
                </div>
            )}
        </div>
    );
};

export default AnalyzeButton;
