import { useActionCreators, useAppSelector } from '../../hooks/hooks';
import { habitsActions } from '../../store/slices/habits.slice';
import { selectIsCreatingTask, selectTodayTasks, selectUpcomingTasks, tasksActions } from '../../store/slices/tasks.slice';
import { TaskCreatingIcon } from '../Icons/Icons';

import './TasksList.scss'

const TasksList = () => {
    const taskActions = useActionCreators(tasksActions)
    const habitActions = useActionCreators(habitsActions)
    const todayTasks = useAppSelector(selectTodayTasks)
    const upcomingTasks = useAppSelector(selectUpcomingTasks)
    const isCreatingTask = useAppSelector(selectIsCreatingTask)

        


    const handleCreatingTask = () => {
        taskActions.setCreatingTask()
    }

    const handleTaskComplete = (taskId: string, habitId: string | undefined) => {
        // taskActions.completeTask(taskId);
        // console.log(habitId)
        // habitActions.incrementHabitProgress(habitId)

      };
    
    return(
        <div className="tasks-wrapper">
                <div className='daily-tasks'>
                    <div className='daily-tasks-header'>
                        <h3 className='tasks-header-text'>Your tasks</h3>
                        <button onClick={handleCreatingTask} className='create-task-button'>{<TaskCreatingIcon/>}</button>
                    </div>
                    <div className='your-tasks'>
                    {todayTasks?.map(task => (
                        <div className='task-row' key={task.id}>
                                <input placeholder='' type="checkbox" className='task-checkbox' onChange={() => handleTaskComplete(task.id, task.habitId)} disabled={task.isCompleted}/>
                                {/* <label htmlFor="task-checkbox">pidr</label> */}
                                <label className='task-title' style={task.isCompleted ? { textDecoration: 'line-through' } : {}}>{task.title}</label>
                        </div>
                    ))}
                        {/* <div className='add-task-row'>
                            <button className='add-button' onClick={handleCreatingTask}>+</button>
                            <span className='task-title'>Add Task</span>
                        </div> */}
                    </div>
                </div>



                <div className='upcoming-events'>
                    <h3 className='upcoming-events-header-text'>Upcoming this week</h3>
                    <div className='your-events'>
                    {upcomingTasks?.map(task => (
                        <div className='task-row' key={task.id}>
                                <input placeholder='' type="checkbox" className='task-checkbox' onChange={() => handleTaskComplete(task.id, task.habitId)} disabled={task.isCompleted}/>
                                {/* <label htmlFor="task-checkbox">pidr</label> */}
                                <label className='task-title' style={task.isCompleted ? { textDecoration: 'line-through' } : {}}>{task.title}</label>
                        </div>
                    ))}
                        {/* <span>There is no upcoming event</span> */}
    
                    </div>
                </div> 
            </div>
    )
}

export default TasksList;