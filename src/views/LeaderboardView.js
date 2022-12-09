import { Paper, Typography, TextField, Box } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { Stack } from "@mui/system"
import axios from "axios"
import React, { useEffect, useRef, useState } from "react"
import { set } from "react-hook-form"
import Select from "react-select"
import CreateTournamentForm from "../components/leaderboard/CreateTournamentForm"
import LeaderboardPodium from "../components/leaderboard/LeaderboardPodium"
import LeaderboardTable from "../components/leaderboard/LeaderboardTable"
import { Leaderboard_URL, Tournament_URL } from "../components/util/ApiMethods"
import { PageTemplate } from "../templates/PageTemplate"

const LeaderboardView = () => {

  const [leaderboardEntries, setLeaderboardEntries] = useState([])
  const [tournaments, setTournaments] = useState([])
  const [selectedTournament, setSelectedTournament] = useState()
  const [numberOfRows, setNumberOfRows] = useState(5)
  const [usernameFilter, setUsernameFilter] = useState("")

  let initialRender= useRef(true)

  const fetchLeaderboardData = () => {
    axios.get(`${Leaderboard_URL}/filterByTournament/`.concat(selectedTournament)).then((response) => {
      setLeaderboardEntries(response.data.response);
    });
  }

  const fetchTournaments = async () => {
    axios.get(`${Tournament_URL}`).then((response) => {
      const mappedTournaments = response.data.response?.map((d) => {
        return({
          label: d.tournamentName,
          value: d.tournamentName })
        });

        mappedTournaments.push({label: "All Tournaments", value: "All Tournaments"})
        setTournaments(mappedTournaments)
    })
  }

  const fetchAllLeaderboardData = () => {
    axios.get(`${Leaderboard_URL}`).then((response) => {
      setLeaderboardEntries(response.data.response);
    });
  }

  useEffect(() => {

    if(initialRender.current) {
      initialRender.current = false
      fetchTournaments()
      fetchAllLeaderboardData()
    }

    else if (selectedTournament === "All Tournaments")
      fetchAllLeaderboardData()
    else
      fetchLeaderboardData()


  },[selectedTournament])

  const handleChange = (value) => {
    setSelectedTournament(value.value)
  }

  return(
    <PageTemplate>
      <Stack alignSelf="center" spacing={2} margin={5}>
        <Stack direction="row" alignSelf="center" spacing={5}>
          <Box>
            <Typography align="center" variant="h4">
              Tournament Podium
            </Typography>
            {leaderboardEntries.length >= 3 && <LeaderboardPodium leaderboardEntries={leaderboardEntries}/>}
            {leaderboardEntries.length < 3 &&
              <Paper>
                  Must be at least three players in selected tournament to display podium
              </Paper>
            }
          </Box>
          <Stack>
            <Stack 
              justifyContent="space-between" 
              alignItems="flex-end"
              spacing={2} 
              direction="row"
              paddingBottom={1}
            >
              <Box>
                <Select
                  options = {tournaments}
                  onChange = {handleChange}
                  defaultValue = {tournaments[0]}
                  placeholder = "All Tournaments"
                  required
                /> 
              </Box>
            
              <Stack>
                <CreateTournamentForm/>
                <TextField
                  sx={{
                    border: 1,
                    borderColor: "#ff0041",
                    borderRadius: 2
                  }}
                  id="outlined-uncontrolled"
                  label="Search by username"
                  size="small"
                  value={usernameFilter}
                  onChange={(event) => setUsernameFilter(event.target.value)}
                />
              </Stack>
              

            </Stack>
            <LeaderboardTable
              selectedTournament={selectedTournament}
              leaderboardEntries={leaderboardEntries}
              numberOfRows={numberOfRows}
              usernameFilter={usernameFilter}
            />
          </Stack>
        </Stack>
      </Stack>
  </PageTemplate>
  )    
  }

export default LeaderboardView
