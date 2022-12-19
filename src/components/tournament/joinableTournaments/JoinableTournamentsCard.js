import { Card, Typography, CardContent } from "@mui/material"
import { Stack } from "@mui/system"
import DateDisplayTemplate from "../../../templates/DateDisplayTemplate"
import { styles } from "../../util/styles"
import JoinTournamentButton from "./JoinTournamentButton"

const JoinableTournamentsCard = ({
    tournamentName,
    start,
    end,
    }) => {

    return (
    <Card sx={styles.LeaderboardEntryCard}>
        <CardContent>
            <Stack alignItems="center" jusifyContent="center" spacing={1}>
                <Typography variant="h6" align="center">{tournamentName}</Typography> 
                <DateDisplayTemplate
                    startDate={start}
                    endDate={end}
                />
                <JoinTournamentButton 
                    tournamentName={tournamentName}
                >
                </JoinTournamentButton>
            </Stack>
        </CardContent>
    </Card>        
    )
}

export default JoinableTournamentsCard
