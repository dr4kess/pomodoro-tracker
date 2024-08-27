import { useAppSelector } from "../../../../hooks/hooks"
import { selectIsCreatingHabit, selectIsEditingHabit, selectSelectedHabit } from "../../../../store/slices/habits.slice"
import { CountViewProps } from "../../../../store/types/habits.types"

const CountView: React.FC<CountViewProps> = ({habitCount, setHabitCount}) => {

    const isCreatingHabit = useAppSelector(selectIsCreatingHabit)
    const isEditingHabit = useAppSelector(selectIsEditingHabit)
    const selectedHabit = useAppSelector(selectSelectedHabit)

    return(
        <div className="habit-creating-modal-input-group">
            <label htmlFor="habit-count">Count</label>
            {isCreatingHabit || isEditingHabit ? 
                <input
                id="habit-count"
                type="number"
                value={habitCount}
                onChange={(e) => setHabitCount(Number(e.target.value))}
                required
                min="1"
                /> : 
                <span>PROGRESS {selectedHabit?.completedCount}/{selectedHabit?.count}</span>
            }
        </div>
    )
}

export default CountView;