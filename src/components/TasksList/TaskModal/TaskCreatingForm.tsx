import { useState } from "react";

import { useActionCreators, useAppDispatch, useAppSelector } from "../../../hooks/hooks";

import { selectHabits } from "../../../store/slices/habits.slice";
import { tasksActions } from "../../../store/slices/tasks.slice";
import { ITaskRequest } from "../../../store/types/tasks.types";

import './TaskCreatingForm.scss'
import { createTaskThunk } from "../../../store/thunks/tasks.thunk";

const TaskCreatingForm = () => {
    const dispatch = useAppDispatch()

    const habits = useAppSelector(selectHabits)

    const taskActions = useActionCreators(tasksActions)
    const [taskTitle, setTaskTitle] = useState('')
    const [habitId, setHabitId] = useState<string | undefined>(undefined);

    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        const newTask: ITaskRequest = {
          title: taskTitle,
          dueDate: new Date(),
          habitId,
        };
        
        dispatch(createTaskThunk(newTask))
      };

      const handleHabitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        
        if (selectedValue === "") {
          setHabitId(undefined);
        } else {
          const selectedHabit = habits.find(habit => habit.title === selectedValue);
          if (selectedHabit) {
            setHabitId(selectedHabit._id);
          }
        }
      };

    const handleCancelCreatingTask = () =>{
        taskActions.cancelCreatingTask()
    }
    return(
        <div className='task-creating-wrapper'>
            <form onSubmit={handleSubmit} className="task-creating-form-wrapper">
                <input placeholder='Title of Task' onChange={(e) => setTaskTitle(e.target.value)} required/>
                <div className="habit-select-wrapper">
                    <select
                        id="habit-color"
                        value={habits.find(habit => habit._id === habitId)?.title || ''}
                        onChange={(e) => handleHabitChange(e)}
                        >
                        <option value=''>Choose Your Habit</option>
                        {habits.map((habit) => (
                            <option key={habit.title} value={habit.title} style={{backgroundColor: habit.color}}>
                            {habit.title}
                            </option>
                        ))}
                    </select>
                </div>
                <button onClick={handleCancelCreatingTask}>Cancel</button>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default TaskCreatingForm;