import WorkoutIcon from '../assets/icons/sidebar/barbell-white.svg';
import WorkoutActiveIcon from '../assets/icons/sidebar/barbell.svg';
import DietIcon from '../assets/icons/sidebar/apple-white.svg';
import DietActiveIcon from '../assets/icons/sidebar/apple.svg';
import FigureIcon from '../assets/icons/sidebar/body-white.svg';
import FigureActiveIcon from '../assets/icons/sidebar/body.svg';

export interface ISideBarSections {
    id: number;
    title: string;
    icon: string;
    activeIcon: string;
    path: string;
}

export const sidebarSections: ISideBarSections[] = [
    {
        id: 1,
        title: 'Тренировки',
        icon: WorkoutIcon,
        activeIcon: WorkoutActiveIcon,
        path: '/workouts',
    },
    {
        id: 2,
        title: 'Питание',
        icon: DietIcon,
        activeIcon: DietActiveIcon,
        path: '/diet',
    },
    {
        id: 3,
        title: 'Фигура',
        icon: FigureIcon,
        activeIcon: FigureActiveIcon,
        path: '/figure',
    },
];
