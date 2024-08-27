import { useActionCreators, useAppSelector } from '../../hooks/hooks';
import { habitsActions } from '../../store/slices/habits.slice';
import { selectDailyTasks, selectIsCreatingTask, tasksActions } from '../../store/slices/tasks.slice';

import TaskCreatingForm from './TaskCreatingForm/TaskCreatingForm';

import './TasksList.scss'

const TasksList = () => {
    const taskActions = useActionCreators(tasksActions)
    const habitActions = useActionCreators(habitsActions)
    const dailyTasks = useAppSelector(selectDailyTasks)
    const isCreatingTask = useAppSelector(selectIsCreatingTask)


    const handleCreatingTask = () => {
        taskActions.setIsCreatingTask(true)
    }

    const handleTaskComplete = (taskId: string, habitId: string | undefined) => {
        taskActions.completeTask(taskId);
        console.log(habitId)
        habitActions.incrementHabitProgress(habitId)

      };
    
    return(
        <div className="tasks-wrapper">
                <div className='daily-tasks'>
                    <h3 className='tasks-header-text'>Your tasks</h3>
                    <div className='your-tasks'>
                    {dailyTasks?.map(task => (
                        <div className='task-row' key={task.id}>
                                <input placeholder='' type="checkbox" className='task-checkbox' onChange={() => handleTaskComplete(task.id, task.habitId)} disabled={task.isCompleted}/>
                                {/* <label htmlFor="task-checkbox">pidr</label> */}
                                <label className='task-title' style={task.isCompleted ? { textDecoration: 'line-through' } : {}}>{task.title}</label>
                        </div>
                    ))}
                    {isCreatingTask && <TaskCreatingForm/>}
                        <div className='add-task-row'>
                            <button className='add-button' onClick={handleCreatingTask}>+</button>
                            <span className='task-title'>Add Task</span>
                        </div>
                    </div>
                </div>



                <div className='upcoming-events'>
                    <h3 className='upcoming-events-header-text'>Upcoming this week</h3>
                    <div className='your-events'>
                        <div className='task-row'>
                        {/* {dailyTasks?.map(task => (
                            <div className='task-row' key={task.id}>
                                    <input placeholder='' type="checkbox" className='task-checkbox' onChange={() => handleTaskComplete(task.id, task.habitId)} disabled={task.isCompleted}/>
                                    <label className='task-title' style={task.isCompleted ? { textDecoration: 'line-through' } : {}}>{task.title}</label>
                            </div>
                        ))} */}
                    {/* {isCreatingTask && <TaskCreatingForm/>} */}
                        <div className='add-task-row'>
                            <button className='add-button' onClick={handleCreatingTask}>+</button>
                            <span className='task-title'>Add an Event</span>
                        </div>
                        </div>
                    </div>
                </div> 
            </div>
    )
}

export default TasksList;