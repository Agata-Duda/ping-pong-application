// TODO from me - App.css and index.css needs to be within one file and one file to be used throughout whole app

// TODO If you need css files, try to keep it close to components. But - you have MUI in project, try to use mui props.

// TODO next tip: Try to use order for imports: as first external libraries, one line break then your own files. It's easier to read.
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import React, { useState} from "react"
import { Toaster } from "react-hot-toast"

import Home from "./views/Home"
// TODO My recommendation: Names for file should be LoginPage.js, not login-page.js.
import LoginView from "./views/LoginView"
import UserAccountView from "./views/UserAccountView"
import ReservationsView from "./views/ReservationsView"
import PredictionView from "./views/PredictionView"
import LeaderboardView from "./views/LeaderboardView"
import MatchView from "./views/MatchView"
import { routes } from "./components/util/routes"
import { TestView } from "./views/TestView"
import { AppContext } from "./context/appContext"


// TODO General comment: you can use React-Query to fetch data from the backend
// TODO General comment: Usused libraries, list below. Consider removing them
// * @mui/base
// * @mui/styled-engine-sc
// * react-app-provider
// * react-context-hook
// * react-datepicker
// * styled-components

function App () {
  return (
      <Router>
        <div><Toaster/></div>
        <Switch>
          <Route path ={routes.loginView} component={LoginView}/>
          <Route exact path = {routes.home} component={Home}/>
          <Route path = {routes.userAccountView} component={UserAccountView}/>
          <Route path = {routes.reservationsView} component={ReservationsView}/>
          <Route path = {routes.predictionView} component={PredictionView}/>
          <Route path = {routes.leaderboardView} component={LeaderboardView}/>
          <Route path = {routes.matchView} component={MatchView}/>
          <Route path = {routes.test} component={TestView}/>
        </Switch>
      </Router>    
  )
}

export default App
