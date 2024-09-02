import { useActionCreators, useAppSelector } from "../../../../hooks/hooks"
import { habitsActions, selectIsCreatingHabit, selectIsEditingHabit, selectIsViewingHabit, selectSelectedHabit } from "../../../../store/slices/habits.slice"
import { Habit } from "../../../../store/types/habits.types"

const HeaderView = () => {

  const actions = useActionCreators(habitsActions)
  const isCreatingHabit = useAppSelector(selectIsCreatingHabit)
  const isEditingHabit = useAppSelector(selectIsEditingHabit)
  const isViewingHabit = useAppSelector(selectIsViewingHabit)
  const selectedHabit = useAppSelector(selectSelectedHabit)


    const handleCancel = () => {
        actions.setReset()
    }
    
    const handleEditing = (habit: Habit) => {
        actions.setEditingHabit(habit)
    }

    return(
        <div className="habit-modal-header">
            {isCreatingHabit && 
            <>
                <button className="habit-modal-buttons" onClick={handleCancel}>Cancel</button>
                <span className="habit-modal-headtext">New Habit</span>
                <button type="submit" className="habit-modal-buttons">Add</button>
            </>}
            {isEditingHabit && 
            <>
                <button className="habit-modal-buttons" onClick={handleCancel}>Cancel</button>
                <span className="habit-modal-headtext">{selectedHabit?.title}</span>
                <button type="submit" className="habit-modal-buttons">Save</button>
            </>}
            {isViewingHabit && selectedHabit && 
            <>
                <button className="habit-modal-buttons" onClick={handleCancel}>Close</button>
                <span className="habit-modal-headtext">{selectedHabit?.title}</span>
                <button type="submit" className="habit-modal-buttons" onClick={() => handleEditing(selectedHabit)}>Edit</button>
            </>}
            
        </div>
    )
}

export default HeaderView;