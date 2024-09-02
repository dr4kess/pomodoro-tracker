import { useAppSelector } from "../../../../hooks/hooks"
import { selectIsCreatingHabit, selectIsEditingHabit, selectSelectedHabit } from "../../../../store/slices/habits.slice"
import { CountViewProps } from "../../../../store/types/habits.types"

const CountView: React.FC<CountViewProps> = ({habitCount, setHabitCount}) => {

    const isCreatingHabit = useAppSelector(selectIsCreatingHabit)
    const isEditingHabit = useAppSelector(selectIsEditingHabit)
    const selectedHabit = useAppSelector(selectSelectedHabit)

    const completedCount = selectedHabit?.completedCount ?? 0;

    const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCount = Number(e.target.value);

        if (selectedHabit?.completedCount !== undefined && newCount < selectedHabit.completedCount) {
            alert(`Count cannot be less than the completed progress (${selectedHabit.completedCount}).`);
            return;
        }

        setHabitCount(newCount);
    };

    return(
        <div className="habit-modal-input-group">
            <label htmlFor="habit-count">Count</label>
            {isCreatingHabit || isEditingHabit ? 
                <input
                id="habit-count"
                type="number"
                value={habitCount}
                onChange={handleCountChange}
                required
                min={completedCount + 1 || 1}
                /> : 
                <span>PROGRESS {selectedHabit?.completedCount}/{selectedHabit?.count}</span>
            }
        </div>
    )
}

export default CountView;