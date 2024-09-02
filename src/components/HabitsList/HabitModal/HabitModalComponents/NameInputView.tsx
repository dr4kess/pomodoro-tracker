import { useAppSelector } from "../../../../hooks/hooks"
import {  selectIsCreatingHabit, selectIsEditingHabit, selectSelectedHabit } from "../../../../store/slices/habits.slice"

import { NameInputViewProps } from "../../../../store/types/habits.types"

const NameInputView: React.FC<NameInputViewProps> = ({title, setTitle}) => {

  const isCreatingHabit = useAppSelector(selectIsCreatingHabit)
  const isEditingHabit = useAppSelector(selectIsEditingHabit)
  const selectedHabit = useAppSelector(selectSelectedHabit)


    return(
        <div className="habit-modal-input-group">
            <label htmlFor="habit-name">Name</label>
            {isCreatingHabit || isEditingHabit ? 
                <input
                    id="habit-name"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    autoComplete="off"
                />  :
                <span>{selectedHabit?.title}</span>  
            }
        </div>
    )
}

export default NameInputView;