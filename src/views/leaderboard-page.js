import { PageTemplate } from "../templates/PageTemplate"
import React from "react"
import CreateTournamentForm from "../components/leaderboard/TournamentForm"

const LeaderboardPage = () => (
  <PageTemplate>
    <div>
      <CreateTournamentForm/>
    </div>
  </PageTemplate>
)

export default LeaderboardPage
