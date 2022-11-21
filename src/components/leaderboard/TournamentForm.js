import React from "react"
import Collapsible from "react-collapsible"
import { useForm } from "react-hook-form"
import { v4 } from "uuid"

import { postTournament } from "../util/util"

//reordered imports 
const CreateTournamentForm = () => {
    const { register, handleSubmit, reset} = useForm()
    const current = new Date()
    console.log(current)

    const onSubmitTournament = (tournament) => {
        postTournament(
            {
                tournamentId: v4(),
                tournamentName: tournament.tournament_name,
                tournamentType: tournament.tournamentType,
                createdOn: current,
                updatedOn: current,
                endedOn: tournament.ended_on
            })
        reset()
    }
    return(
        //TODO: mui box here instead of div 
        //TODO: change style later 
        //do we need ids on inputs and divs? 
         <Collapsible trigger={<b>Create Tournament</b>} triggerWhenOpen={<b>Create</b>}>
            <div id="formCreateTournament" className="TournamentForm">
                <form onSubmit={handleSubmit(onSubmitTournament)}>
                <input id="Tournamentname" defaultValue={"Tournament Name"} {...register("tournament_name", { "required": true })} />
                <br/>
                <label> Select Tournament Type </label>
                <select {...register("tournamentType")}>
                    //use react select here 
                    <option value="Knock Out"> Knock Out</option>
                    <option value="Practice"> Practice </option>
                    <option value="League"> League</option>
                    <option value="Group Stage"> Group Stage</option>
                </select><br/>
                <label>Select End Date</label>
                <input type="datetime-local" {...register("ended_on", {"required": true})}/>
                <br/>
                <div id="submitDiv">
                    <input id="submitCreateTournament" type="submit" value="Create a Tournament"/>
                </div>
                </form>
            </div>
         </Collapsible>
    )
}
export default CreateTournamentForm