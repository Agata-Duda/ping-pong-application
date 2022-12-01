import React from "react"

import { PageTemplate } from "../templates/PageTemplate"
import CreateTournamentForm from "../components/leaderboard/CreateTournamentForm"
import  LeaderboardTable  from "../components/leaderboard/LeaderboardTable"

const LeaderboardView = () => (
  <PageTemplate>
      <CreateTournamentForm/>
      <LeaderboardTable/>
  </PageTemplate>
)

export default LeaderboardView
