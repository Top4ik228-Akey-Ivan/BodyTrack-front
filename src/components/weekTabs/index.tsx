import styles from './weekTabs.module.css';
import AddButton from '../addButton';
import AnalyzeButton from '../analyzeButton';

interface WeekTabsProps {
    weeks: { weekIndex: number }[];
    selectedWeek: number;
    onSelect: (weekIndex: number) => void;
    handleCreateWeek: () => void;
    startAnalyze: (weeks: number) => void;
}

const WeekTabs: React.FC<WeekTabsProps> = ({
    weeks,
    selectedWeek,
    onSelect,
    handleCreateWeek,
    startAnalyze,
}) => {
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
            <div className={styles.btnBox}>
                <AddButton handleClick={handleCreateWeek} />
                <AnalyzeButton startAnalyze={startAnalyze} />
            </div>
        </div>
    );
};

export default WeekTabs;
