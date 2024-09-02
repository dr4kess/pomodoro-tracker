import { Outlet } from 'react-router-dom';


import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import { useAppSelector } from '../../../hooks/hooks';
import { selectIsHabitModalOpen } from '../../../store/slices/habits.slice';
import { selectIsTaskModalOpen } from '../../../store/slices/tasks.slice';

import '../Layout.scss'

const Layout = () => {
  const isHabitModalOpen = useAppSelector(selectIsHabitModalOpen)
  const isTaskModalOpen = useAppSelector(selectIsTaskModalOpen)

  return (
    <div className="app-layout">
      {(isHabitModalOpen || isTaskModalOpen) && <div className='modal-overlay'/>}
      <Header/>
      <main className='main-wrapper'>
        <Outlet />
      </main>

        <Navbar />
    </div>
  );
}

export default Layout;
