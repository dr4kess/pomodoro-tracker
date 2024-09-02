import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectIsHabitModalOpen } from '../../store/slices/habits.slice';
import { selectIsTaskModalOpen } from '../../store/slices/tasks.slice';
import { getHabitsThunk } from '../../store/thunks/habits.thunk';
import { useEffect } from 'react';

import HabitModal from '../../components/HabitsList/HabitModal/HabitModal'
import TaskModal from '../../components/TasksList/TaskModal/TaskModal';

import HabitsList from '../../components/HabitsList/HabitsList';
import TasksList from '../../components/TasksList/TasksList';

import { getTasksThunk } from '../../store/thunks/tasks.thunk';

import './HomePage.scss'

const HomePage = () => {
    const dispatch = useAppDispatch()

    const isHabitModalOpen = useAppSelector(selectIsHabitModalOpen)
    const isTaskModalOpen = useAppSelector(selectIsTaskModalOpen)

    useEffect(() => {
        dispatch(getHabitsThunk());
        dispatch(getTasksThunk());

        console.log('doing request in homepage!')
    }, [dispatch]);


    return(
        <div className="home-page-wrapper">
            <HabitsList/>
            {isHabitModalOpen && <HabitModal/>}
            {isTaskModalOpen && <TaskModal/>}
            <TasksList/>              
        </div>
    )
}

export default HomePage;