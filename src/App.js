// TODO from me - App.css and index.css needs to be within one file and one file to be used throughout whole app
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect, useContext } from "react";
import { Toaster } from "react-hot-toast";

import Home from "./views/Home";
import LoginView from "./views/LoginView";
import UserAccountView from "./views/UserAccountView";
import ReservationsView from "./views/ReservationsView";
import PredictionView from "./views/TournamentView";
import LeaderboardView from "./views/LeaderboardView";
import MatchView from "./views/MatchView";
import { routes } from "./components/util/routes";
import { TestView } from "./views/TestView";
import { getAllTournaments } from "./components/util/ApiMethods";
import { AppContext } from "./context/appContext";

// TODO General comment: you can use React-Query to fetch data from the backend

function App() {

  const {setTournaments} = useContext(AppContext)

  useEffect(() => {
    getAllTournaments().then(response => setTournaments(response.data.response))
  },[])

  return (
    <Router>
      <div>
        <Toaster />
      </div>
      <Switch>
        <Route exact path={routes.loginView} component={LoginView} />
        <Route path={routes.home} component={Home} />
        <Route path={routes.userAccountView} component={UserAccountView} />
        <Route path={routes.reservationsView} component={ReservationsView} />
        <Route path={routes.tournamentView} component={PredictionView} />
        <Route path={routes.leaderboardView} component={LeaderboardView} />
        <Route path={routes.matchView} component={MatchView} />
        <Route path={routes.test} component={TestView} />
      </Switch>
    </Router>
  );
}

export default App;
