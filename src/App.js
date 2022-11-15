// TODO - you don't need App.css, please delete it
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./views/Home"
import loginpage from "./views/login-page"
import UserAccount from "./views/user-details-page"
import ReservationsPage from "./views/reservation-page"
import PredictionPage from "./views/prediction-page"
import LeaderboardPage from "./views/leaderboard-page"
import Match from "./views/match-page"
import { routes } from "./components/util/util"
import { TestView } from "./views/TestView"
import React from "react"
import { Toaster } from "react-hot-toast"

// TODO General comment: you can use React-Query to fetch data from the backend
// TODO General comment: Usused libraries, list below. Consider removing them
// * @mui/base
// * @mui/styled-engine-sc
// * react-app-provider
// * react-context-hook
// * react-datepicker
// * react-select
// * styled-components
// TODO General comment: Folders like: .idea or vscode should be added to .gitignore. Cannot be in the repo


function App () {
  return (
    <Router>
      <div><Toaster/></div>
      <Switch>
        <Route path ={routes.loginpage} component={loginpage}/>
        <Route exact path = {routes.home} component={Home}/>
        <Route path = {routes.userDetailsPage} component={UserAccount}/>
        <Route path = {routes.reservationsPage} component={ReservationsPage}/>
        <Route path = {routes.predictionPage} component={PredictionPage}/>
        <Route path = {routes.leaderboardPage} component={LeaderboardPage}/>
        <Route path = {routes.matchPage} component={Match}/>
        <Route path = {routes.test} component={TestView}/>
      </Switch>
    </Router>
  )
}

export default App
