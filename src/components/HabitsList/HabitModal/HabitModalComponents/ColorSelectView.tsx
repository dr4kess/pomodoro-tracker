import { COLOR_OPTIONS } from "../../../../constants/habits.constatns";
import { useAppSelector } from "../../../../hooks/hooks";
import { selectIsCreatingHabit, selectIsEditingHabit, selectSelectedHabit } from "../../../../store/slices/habits.slice";
import { ColorSelectViewProps } from "../../../../store/types/habits.types";

const ColorSelectView: React.FC<ColorSelectViewProps> =  ({habitColor, setHabitColor}) => {

    const isCreatingHabit = useAppSelector(selectIsCreatingHabit)
    const isEditingHabit = useAppSelector(selectIsEditingHabit)
    const selectedHabit = useAppSelector(selectSelectedHabit)

    return(
        <div className="habit-modal-input-group">
            <label htmlFor="habit-color">Color</label>
            {isCreatingHabit || isEditingHabit ? 
                <select
                id="habit-color"
                value={habitColor || ''}
                onChange={(e) => setHabitColor(e.target.value)}
                >
                <option value="" disabled>
                    Choose Color
                </option>
                {COLOR_OPTIONS.map((color) => (
                    <option key={color.value} value={color.value}>
                        {color.label}
                    </option>
                ))}
                </select> : <div className="colored-div" style={{backgroundColor: selectedHabit?.color}}/>
                }
        </div>
    )
}

export default ColorSelectView;