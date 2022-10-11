
import NavBar from './NavBar';
import logo from './zinkworks-ping-pong-logo.png';
const Header = () => {
    return(
        <div className="header">
            <img src={logo} className="header-logo" alt="logo" />
            <NavBar/>
        </div>
    )
}
export default Header;