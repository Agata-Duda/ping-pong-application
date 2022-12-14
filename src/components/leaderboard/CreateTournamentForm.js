import React from "react"
import Collapsible from "react-collapsible"
import { useForm } from "react-hook-form"
import { v4 } from "uuid"

import { Box } from "@mui/material"

import { postTournament } from "../util/ApiMethods"

const labelStyle = { 
    paddingLeft: 40
}
 
const CreateTournamentForm = () => {
    const { register, handleSubmit, reset} = useForm()
    const current = new Date()

    const onSubmitTournament = (tournament) => {
        postTournament(
            {
                tournamentId: v4(),
                tournamentName: tournament.tournament_name,
                tournamentType: tournament.tournamentType,
                createdOn: current,
                updatedOn: current,
                startDate: tournament.startDate,
                endedOn: tournament.ended_on
            })
        reset()
    }
    return(
         <Collapsible trigger={<b style={labelStyle}>Create Tournament</b>} triggerWhenOpen={<b style={labelStyle}>Create</b>}>
            <Box sx={{paddingLeft:5}}>
                <form onSubmit={handleSubmit(onSubmitTournament)}>
                    <input defaultValue={"Tournament Name"} {...register("tournament_name", { "required": true })} />
                    <br/>
                    <label> Select Tournament Type </label>
                    <select {...register("tournamentType")}>
                        <option value="Knock Out"> Knock Out</option>
                        <option value="Practice"> Practice </option>
                        <option value="League"> League</option>
                        <option value="Group Stage"> Group Stage</option>
                    </select>
                    <br/>
                    <label>Select Start Date</label>
                    <input type="datetime-local" {...register("start_date", {"required": true})}/>
                    <br/>
                    <label>Select End Date</label>
                    <input type="datetime-local" {...register("ended_on", {"required": true})}/>
                    <br/>
                    <input id="submitCreateTournament" type="submit" value="Create a Tournament"/>
                </form>
            </Box>
         </Collapsible>
    )
}
export default CreateTournamentForm