
import './App.css';
import {BrowserRouter as Router,Route, Switch} from"react-router-dom";
import Home from './Home';
import LandingPage from './LandingPage';
import Header from './Header';
import UserAccount from './UserAccount';
import BookingPage from "./BookingPage";
import PredictionPage from "./PredictionPage";
import ScoreBoard from "./ScoreBoard";

function App() {
  return (
   
      <Router>
            <Switch>
              <Route exact path = "/">
                <LandingPage/>
              </Route>
              <Route exact path ="/Home">
                <Home/>
              </Route>
              <Route exact path ="/Header">
                <Header/>
              </Route>
              <Route exact path = "/UserAccount">
                <UserAccount/>
              </Route>
              <Route exact path = "/BookingPage">
                <BookingPage/>
              </Route>
              <Route exact path = "/PredictionPage">
                <PredictionPage/>
              </Route>
              <Route exact path = "/ScoreBoard">
                <ScoreBoard/>
              </Route>
            </Switch>
      </Router>
  
  );
}

export default App;
