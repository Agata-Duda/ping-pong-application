import { Box, TextField, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { Stack } from "@mui/system"
import axios from "axios"
import React, { useEffect, useRef, useState } from "react"
import Select from "react-select"
import CreateTournamentForm from "../components/leaderboard/CreateTournamentForm"
import LeaderboardPodium from "../components/leaderboard/LeaderboardPodium"
import LeaderboardTable from "../components/leaderboard/LeaderboardTable"
import { Leaderboard_URL, Tournament_URL } from "../components/util/ApiMethods"
import { PageTemplate } from "../templates/PageTemplate"
import { SORT_ARRAY_BY_WINS, SORT_ARRAY_BY_TOTAL_GAMES, SORT_ARRAY_BY_LOSSES } from "../components/util/functions"

const LeaderboardView = () => {

  const [leaderboardEntries, setLeaderboardEntries] = useState([])
  const [tournaments, setTournaments] = useState([])
  const [selectedTournament, setSelectedTournament] = useState()
  const [numberOfRows, setNumberOfRows] = useState(5)
  const [usernameFilter, setUsernameFilter] = useState("")
  const [valueFilter, setValueFilter] = useState()

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

  },[selectedTournament, valueFilter])

  const handleChange = (value) => {
    setSelectedTournament(value.value)
  }

  const handleFilterChange = (value) => {
    setValueFilter(value.value)
  }

  const filterOptions = [
    {
      label: "Wins",
      value: () => SORT_ARRAY_BY_WINS
    },

    {
      label: "Losses",
      value: () => SORT_ARRAY_BY_LOSSES
    },

    {
      label: "Total Games",
      value: () => SORT_ARRAY_BY_TOTAL_GAMES
    }
  ]

  return(
    <PageTemplate>
      <Grid container margin={2} spacing={2}>
        <Grid item sm={12} md={5} lg={5}>
          <Box paddingTop={1}>
            <Typography align="center" variant="h4">
              Podium: {selectedTournament === undefined ? "All Tournaments" : selectedTournament}
            </Typography>
            {leaderboardEntries.length >= 3 && <LeaderboardPodium enoughEntries={true} leaderboardEntries={leaderboardEntries}/>}
            {leaderboardEntries.length < 3 && <LeaderboardPodium enoughEntries={false}/>}
          </Box>
        </Grid>
        <Grid item sm={12} md={7} lg={7}>
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
                  <Stack direction="row">
                    <Select
                    options = {filterOptions}
                    onChange = {handleFilterChange}
                    defaultValue = {tournaments[0]}
                    placeholder = "Filter"
                    />  
                    <TextField
                      id="outlined-uncontrolled"
                      label="Search by username"
                      size="small"
                      value={usernameFilter}
                      onChange={(event) => setUsernameFilter(event.target.value)}
                    />
                  </Stack>
                  
                </Stack>
              </Stack>
              <LeaderboardTable
                selectedTournament={selectedTournament}
                leaderboardEntries={leaderboardEntries}
                numberOfRows={numberOfRows}
                usernameFilter={usernameFilter}
                valueFilter={valueFilter}
              />
          </Stack>
        </Grid>
      </Grid>
  </PageTemplate>
  )    
  }

export default LeaderboardView
