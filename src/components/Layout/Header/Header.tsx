import { useLocation } from 'react-router-dom'

import { routesMeta } from '../../../routes/routes.helper';
import UserPhoto from '../../../assets/images/user.png'

import './Header.scss'

const Header = () => {

    const location = useLocation();
    const currentPage = routesMeta[location.pathname  as keyof typeof routesMeta]?.title
    
    return(
        <header className='header-wrapper'>
            <div className='user-wrapper'>
                <img className='user-image' src={UserPhoto} alt='User Image'/>
            </div>
            <h3 className='current-page-header-text'>{currentPage}</h3>
        </header>
    )
}

export default Header