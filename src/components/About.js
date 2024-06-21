import {NavLink} from 'react-router-dom';
import Login from './Login';
import './Footer.css';
function About(){
    return(
     <div className='container text-center'>
        <h1 className='display-1 text-center'>About</h1>
        <p>Ths is ecommerce website having all the required components</p>
        <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} 22071A0560 Pranitha</p>
      </footer>
     </div>
    );
}
export default About;