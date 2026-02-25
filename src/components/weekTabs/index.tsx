import styles from './weekTabs.module.css';

interface WeekTabsProps {
    weeks: { weekIndex: number }[];
    selectedWeek: number;
    onSelect: (weekIndex: number) => void;
}

const WeekTabs: React.FC<WeekTabsProps> = ({ weeks, selectedWeek, onSelect }) => {
    return (
        <div className={styles.tabs}>
            {weeks.map((week) => (
                <button
                    key={week.weekIndex}
                    className={selectedWeek === week.weekIndex ? styles.activeTab : styles.tab}
                    onClick={() => onSelect(week.weekIndex)}
                >
                    Неделя {week.weekIndex}
                </button>
            ))}
        </div>
    );
};

export default WeekTabs;
