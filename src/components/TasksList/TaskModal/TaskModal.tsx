import { useState } from 'react';

import { createTaskThunk, getTasksThunk } from '../../../store/thunks/tasks.thunk';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';


import { selectIsCreatingTask,  } from '../../../store/slices/tasks.slice';
import { ITaskRequest } from '../../../store/types/tasks.types';

import HeaderView from './TaskModalComponents/HeaderView';
import NameInputView from './TaskModalComponents/NameInputView';
import HabitSelectView from './TaskModalComponents/HabitSelectView';
import DatePickerView from './TaskModalComponents/DatePickerView';

import './TaskModal.scss'

const TaskModal = () => {
    const dispatch = useAppDispatch()

    const isCreatingTask = useAppSelector(selectIsCreatingTask)

    const [taskTitle, setTaskTitle] = useState('')
    const [habitId, setHabitId] = useState<string | undefined>(undefined);
    const [dueDate, setDueDate] = useState<Date | null>(null);

  

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
    
      const finalDueDate = dueDate || new Date();

      const newTask: ITaskRequest = {
        title: taskTitle,
        dueDate: finalDueDate,
        habitId,
      };
    
      try {
        if (isCreatingTask) {
          await dispatch(createTaskThunk(newTask));
        // } else if (isEditingTask && selectedHabit?._id) {
        //   const updatedTaskInfo: IHabitUpdateRequest = {
        //     id: selectedHabit._id,
        //     ...newHabit,
        //   }
          // await dispatch(updateHabitThunk(updatedHabitInfo));
        }
    
        dispatch(getTasksThunk());
      } catch (error) {
        console.error('Failed to save task:', error);
      }
    };


  return(
      <div className="task-modal-wrapper">
          <form onSubmit={handleSubmit}>
              <HeaderView/>
              <div className='task-modal-content-wrapper'>
                <NameInputView title={taskTitle} setTitle={setTaskTitle}/>
                <HabitSelectView  habitId={habitId} setHabitId={setHabitId}/>
                <DatePickerView selectedDate={dueDate} setSelectedDate={setDueDate} />
              </div>

          </form>
      </div>
  )
}

export default TaskModal;








    //   const handleHabitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //     const selectedValue = e.target.value;
        
    //     if (selectedValue === "") {
    //       setHabitId(undefined);
    //     } else {
    //       const selectedHabit = habits.find(habit => habit.name === selectedValue);
    //       if (selectedHabit) {
    //         setHabitId(selectedHabit.id);
    //       }
    //     }
    //   };

    // const handleCancelCreatingTask = () =>{
    //     taskActions.cancelCreatingTask()
    // }








                    {/* <input placeholder='Title of Task' onChange={(e) => setTaskTitle(e.target.value)} required/>
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
                </div> */}
            
              {/* <div className="habit-creating-modal-content-wrapper">
                <NameInputView habitName={habitName} setHabitName={setHabitName}/>
                <CountView habitCount={habitCount} setHabitCount={setHabitCount}/>
                <ColorSelectView habitColor={habitColor} setHabitColor={setHabitColor}/>
              </div> */}