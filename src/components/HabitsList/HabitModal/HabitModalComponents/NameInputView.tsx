import { useAppSelector } from "../../../../hooks/hooks"
import {  selectIsCreatingHabit, selectIsEditingHabit, selectSelectedHabit } from "../../../../store/slices/habits.slice"

import { NameInputViewProps } from "../../../../store/types/habits.types"

const NameInputView: React.FC<NameInputViewProps> = ({habitName, setHabitName}) => {

  const isCreatingHabit = useAppSelector(selectIsCreatingHabit)
  const isEditingHabit = useAppSelector(selectIsEditingHabit)
  const selectedHabit = useAppSelector(selectSelectedHabit)


    return(
        <div className="habit-creating-modal-input-group">
            <label htmlFor="habit-name">Name</label>
            {isCreatingHabit || isEditingHabit ? 
                <input
                id="habit-name"
                type="text"
                placeholder={selectedHabit?.name || 'Title'}
                value={habitName}
                onChange={(e) => setHabitName(e.target.value)}
                required
                />  :
                <span>{selectedHabit?.name}</span>  
            }
        </div>
    )
}

export default NameInputView;