import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Header from './Header';
import Footer from './Footer';

const UserAccount = () => (
    <div>
        <Header/>
        <div className="userAccount">
            <div className="UserDetailsContainer">
                <h4> User Details</h4>
                    <div className="UserDetailsContainer4">
                        <AccountCircleOutlinedIcon id="UserIconUserPage"/>
                        <div className="UserDetailsContainer1">
                            <p> User ID: 12345678 </p>
                            <p> User Name: John-Doe123 </p>
                            <p> First Name: John </p>
                            <p> Last Name: Doe </p>
                        </div>
                        <div className="UserDetailsContainer2">
                            <p> Email</p>
                            <p>Role: Software Developer </p>
                            <p> Account Created On: </p>
                            <p> Account Last Updated On: </p> 
                            <p> Account Type: User - No Privilages </p>   
                        </div>
              
                    </div>
            </div>
            <div className="UserGamesContainer">
                <p> <b>Game Details</b> </p>
                <p> Games Won: </p>
                <p> Games Lost: </p>
                <p> Total Games: </p>
            </div>
            <div className="UserUpdateButtonsContainer">
                <button> Change Password </button>
                <button> Update Details </button>
                <button> Delete Account </button>
            </div>
            
        </div> 
        <Footer/>
    </div>
);
export default UserAccount;