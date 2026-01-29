import ExerciseCard from './exerciseCard';

const ExercisesList: React.FC = () => {
    const fakeArray = [1, 2, 3, 4];
    return (
        <div>
            {fakeArray.map((el) => (
                <ExerciseCard key={el} num={el} />
            ))}
        </div>
    );
};

export default ExercisesList;
