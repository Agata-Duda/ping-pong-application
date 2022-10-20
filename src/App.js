import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./views/Home"
import loginpage from "./views/login-page"
import UserAccount from "./views/user-details-page"
import BookingPage from "./views/booking-page"
import PredictionPage from "./views/prediction-page"
import ScoreBoard from "./views/scoreboard-page"
import { routes } from "./components/util/util"
import { TestView } from "./views/TestView"
import React from "react"
import { Toaster } from "react-hot-toast"

function App () {
  return (
        <Router>
        <div><Toaster/></div>
          <Switch>
            <Route path ={routes.loginpage} component={loginpage}/>
            <Route exact path = {routes.home} component={Home}/>
            <Route path = {routes.userDetailsPage} component={UserAccount}/>
            <Route path = {routes.bookingPage} component={BookingPage}/>
            <Route path = {routes.predictionPage} component={PredictionPage}/>
            <Route path = {routes.scoreBoardPage} component={ScoreBoard}/>
            <Route path = {routes.test} component={TestView}/>
          </Switch>
        </Router>
  )
}

export default App
