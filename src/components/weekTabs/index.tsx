import styles from './weekTabs.module.css';
import AddButton from '../addButton';

interface WeekTabsProps {
    weeks: { weekIndex: number }[];
    selectedWeek: number;
    onSelect: (weekIndex: number) => void;
    handleCreateWeek: () => void;
}

const WeekTabs: React.FC<WeekTabsProps> = ({ weeks, selectedWeek, onSelect, handleCreateWeek }) => {
    return (
        <div className={styles.tabsBox}>
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
            <AddButton handleClick={handleCreateWeek} />
        </div>
    );
};

export default WeekTabs;
