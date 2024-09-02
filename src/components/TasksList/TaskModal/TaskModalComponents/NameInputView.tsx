import { useAppSelector } from "../../../../hooks/hooks"
import { selectIsCreatingTask, selectIsEditingTask, selectSelectedTask } from "../../../../store/slices/tasks.slice"

import { NameInputViewProps } from "../../../../store/types/habits.types"

const NameInputView: React.FC<NameInputViewProps> = ({title, setTitle}) => {

  const isCreatingTask = useAppSelector(selectIsCreatingTask)
  const isEditingTask = useAppSelector(selectIsEditingTask)
  const selectedTask = useAppSelector(selectSelectedTask)


    return(
        <div className="task-modal-input-group">
            <label htmlFor="task-name">Name</label>
            {isCreatingTask || isEditingTask ? 
                <input
                id="habit-name"
                type="text"
                placeholder={selectedTask?.title || 'Title'}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                autoComplete="off"
                />  :
                <span>{selectedTask?.title}</span>  
            }
        </div>
    )
}

export default NameInputView;