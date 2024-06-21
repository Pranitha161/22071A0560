import {NavLink} from 'react-router-dom';
import Login from './Login';
function Nav(){
    return(
      <div className='d-flex justify-content-end'>
        <ul className="nav">
            <li className="nav-item mx-4"><NavLink to='/login'>Login</NavLink></li>
            <li className="nav-item  mx-4"><NavLink to='/register'>Register</NavLink></li>
            <li className='nav-item  mx-4'><NavLink to='/contact'>Contact</NavLink></li>
            <li className='nav-item  mx-4'><NavLink to='/about'>About</NavLink></li>
            <li className='nav-item  mx-4'><NavLink to='/cart'>Cart</NavLink></li>
        </ul>
        <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} 22071A0560 Pranitha</p>
      </footer>
      </div>
    );
}
export default Nav;