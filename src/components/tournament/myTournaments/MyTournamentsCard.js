import { Card, Typography, CardContent } from "@mui/material"
import { Stack } from "@mui/system"
import WinLossDisplayTemplate from "../../../templates/WinLossDisplayTemplate"
import { styles } from "../../util/styles"

const MyTournamentsCard = ({
    tournamentName,
    wins,
    totalGames,
    }) => {

    return (
    <Card sx={styles.LeaderboardEntryCard} alignItems="center" justifyContent="center">
        <CardContent>
            <Stack alignItems="center" jusifyContent="center">
                <Typography variant="h6" align="center">{tournamentName}</Typography> 
                <WinLossDisplayTemplate
                    wins={wins}
                    totalGames={totalGames}
                />
            </Stack>
        </CardContent>
    </Card>        
    )
}

export default MyTournamentsCard