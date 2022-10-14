import './App.css';
import {BrowserRouter as Router,Route, Switch} from"react-router-dom";
import Home from './Home';
import LandingPage from './LandingPage';
import UserAccount from './UserAccount';
import BookingPage from "./BookingPage";
import PredictionPage from "./PredictionPage";
import ScoreBoard from "./ScoreBoard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component={LandingPage}/>
        <Route exact path ="/Home" component={Home}/>  
        <Route exact path = "/UserAccount"component={UserAccount}/>
        <Route exact path = "/BookingPage" component={BookingPage}/>
        <Route exact path = "/PredictionPage" component={PredictionPage}/>
        <Route exact path = "/ScoreBoard" component={ScoreBoard}/>
      </Switch>
    </Router>
  );
}

export default App;
