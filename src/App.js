import './App.css';
import {BrowserRouter as Router,Route, Switch} from"react-router-dom";
import Home from './Home';
import LandingPage from './views/LandingPage';
import UserAccount from './UserAccount';
import BookingPage from "./views/BookingPage";
import PredictionPage from "./views/PredictionPage";
import ScoreBoard from "./views/ScoreBoard";
import {routes} from './components/util/util';
import {TestView} from './views/TestView';



function App() {
  return (
    <Router>
      <Switch>
        {/*use exact only for "/" */}
        {/*IMO this is not landing page, but login page*/}
        {/*think about login page and register page separately*/}
        {/*it is better to use small letters in url*/}
        <Route exact path ={routes.landingPage} component={LandingPage}/>
        <Route path = {routes.home} component={Home}/>
        <Route path = {routes.userAccount} component={UserAccount}/>
        <Route path = {routes.bookingPage} component={BookingPage}/>
        <Route path = {routes.predictionPage} component={PredictionPage}/>
        <Route path = {routes.scoreBoard} component={ScoreBoard}/>
        <Route path = {routes.test} component={TestView}/>
      </Switch>
    </Router>
  );
}

export default App;
