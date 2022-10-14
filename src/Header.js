import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import logo from './Images/zinkworks-ping-pong-logo.png';

const Header = () =>(
        <div className="header">
            <Link to="/Home"> 
                <img src={logo} className="header-logo" alt="logo" /> 
            </Link>
            <NavBar/>
        </div>
    )
export default Header;