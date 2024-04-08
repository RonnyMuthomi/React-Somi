import './Styles/Navbar.css'
import { NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <nav>
    

      <ul className='toplinks'>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="Dashboard">Dashboard</NavLink></li>
        <li><NavLink to="Activities">All Activites</NavLink> </li>
        <li><NavLink to="Browse">Browse Space</NavLink> </li>
        <li><NavLink to="Language">Language</NavLink> </li>
      </ul>
      <ul id='career'>
        <li><NavLink id='careers' to='Careers'>Career</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar;
