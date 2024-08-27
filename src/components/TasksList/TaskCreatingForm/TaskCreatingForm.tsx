import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { useActionCreators, useAppSelector } from "../../../hooks/hooks";

import { selectHabits } from "../../../store/slices/habits.slice";
import { tasksActions } from "../../../store/slices/tasks.slice";
import { Task } from "../../../store/types/tasks.types";

import './TaskCreatingForm.scss'

const TaskCreatingForm = () => {

    const habits = useAppSelector(selectHabits)

    const taskActions = useActionCreators(tasksActions)
    const [taskTitle, setTaskTitle] = useState('')
    const [habitId, setHabitId] = useState<string | undefined>(undefined);

    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        const newTask: Task = {
          id: uuidv4(),
          title: taskTitle,
          createDate: new Date(),
          dueDate: new Date(),
          isCompleted: false,
          habitId,
        };
    
        taskActions.addTask(newTask)
      };

      const handleHabitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        
        if (selectedValue === "") {
          setHabitId(undefined);
        } else {
          const selectedHabit = habits.find(habit => habit.name === selectedValue);
          if (selectedHabit) {
            setHabitId(selectedHabit.id);
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
                        value={habits.find(habit => habit.id === habitId)?.name || ''}
                        onChange={(e) => handleHabitChange(e)}
                        >
                        <option value=''>Choose Your Habit</option>
                        {habits.map((habit) => (
                            <option key={habit.name} value={habit.name} style={{backgroundColor: habit.color}}>
                            {habit.name}
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