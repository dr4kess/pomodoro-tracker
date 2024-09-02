import { NavLink } from "react-router-dom"

import { getActiveStyle } from "../../../../utils/styles";
import NAVBAR_CONSTANTS from "../../../../constants/navbar.constants";

import './Navbar.scss'

const Navbar = () => {
    return(
        <nav className="navbar">
            {NAVBAR_CONSTANTS.map((item, index) => (
                <NavLink key={index} className="link" to={item.link} 
                style={({ isActive }) => getActiveStyle(isActive)}>
                    <div className='link-content'>
                        <item.icon/>
                        <span>{item.label}</span>
                    </div>
                </NavLink>
            ))}
        </nav>
    )
}

export default Navbar;