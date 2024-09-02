import { useLocation } from 'react-router-dom'

import UserPhoto from '../../../../assets/images/user.png'

import './Header.scss'
import { useAppSelector } from '../../../../hooks/hooks';
import { selectUser } from '../../../../store/slices/auth.slice';

const routesMeta = {
    '/pomodoro': { title: 'Pomodoro!' },
    '/': { title: 'Morning' },
    '/statistics': { title: 'Statistics' },
    '/calendar': { title: 'Calendar' },
  };

const Header = () => {

    const location = useLocation();
    const currentPage = routesMeta[location.pathname  as keyof typeof routesMeta]?.title

    const user = useAppSelector(selectUser)

    const headerTitle =
    location.pathname === '/' && user
      ? `${currentPage} ${user.fullName}!`
      : currentPage
    
    return(
        <header className='header-wrapper'>
            <div className='user-wrapper'>
                <img className='user-image' src={UserPhoto} alt='User Image'/>
            </div>
            <h3 className='current-page-header-text'>{headerTitle}</h3>
        </header>
    )
}

export default Header