import { Outlet } from 'react-router-dom';


import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import { useAppSelector } from '../../hooks/hooks';
import { selectIsModalOpen } from '../../store/slices/habits.slice';

import './Layout.scss'

const Layout = () => {
  const isHabitModalOpen = useAppSelector(selectIsModalOpen)

  return (
    <div className="app-layout">
      {isHabitModalOpen && <div className='modal-overlay'/>}
      <Header/>
      <main className='main-wrapper'>
        <Outlet />
      </main>

        <Navbar />
    </div>
  );
}

export default Layout;
