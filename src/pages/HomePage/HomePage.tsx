import { useAppSelector } from '../../hooks/hooks';
import { selectIsModalOpen } from '../../store/slices/habits.slice';

import HabitsList from '../../components/HabitsList/HabitsList';
import HabitModal from '../../components/HabitsList/HabitModal/HabitModal'
import TasksList from '../../components/TasksList/TasksList';

import './HomePage.scss'

const HomePage = () => {
    const isHabitModalOpen = useAppSelector(selectIsModalOpen)

    return(
        <div className="home-page-wrapper">
            <HabitsList/>
            {isHabitModalOpen && <HabitModal/>}
            <TasksList/>              
        </div>
    )
}

export default HomePage;