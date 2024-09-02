import { useActionCreators, useAppSelector } from "../../../../hooks/hooks"
import { selectIsCreatingTask, selectIsEditingTask, selectIsViewingTask, selectSelectedTask, tasksActions } from "../../../../store/slices/tasks.slice"
import { Task } from "../../../../store/types/tasks.types"

const HeaderView = () => {

  const actions = useActionCreators(tasksActions)
  const isCreatingTask = useAppSelector(selectIsCreatingTask)
  const isEditingTask = useAppSelector(selectIsEditingTask)
  const isViewingTask = useAppSelector(selectIsViewingTask)
  const selectedTask = useAppSelector(selectSelectedTask)


    const handleCancel = () => {
        actions.setReset()
    }
    
    const handleEditing = (habit: Task) => {
        actions.setEditingHabit(habit)
    }

    return(
        <div className="task-modal-header">
            {isCreatingTask && 
            <>
                <button className="task-modal-buttons" onClick={handleCancel}>Cancel</button>
                <span className="task-modal-headtext">New Task</span>
                <button type="submit" className="task-modal-buttons">Add</button>
            </>}
            {isEditingTask && 
            <>
                <button className="task-modal-buttons" onClick={handleCancel}>Cancel</button>
                <span className="task-modal-headtext">{selectedTask?.title}</span>
                <button type="submit" className="task-modal-buttons">Save</button>
            </>}
            {isViewingTask && selectedTask && 
            <>
                <button className="task-modal-buttons" onClick={handleCancel}>Close</button>
                <span className="task-modal-headtext">{selectedTask?.title}</span>
                <button type="submit" className="task-modal-buttons" onClick={() => handleEditing(selectedTask)}>Edit</button>
            </>}
            
        </div>
    )
}

export default HeaderView;