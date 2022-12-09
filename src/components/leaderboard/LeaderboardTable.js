import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData( player, tournament, wins, losses, gamesPlayed) {
  return { player, tournament, wins, losses, gamesPlayed };
}

const rows = [
//get data from backend here.
];

export default function LeaderboardTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="tournament table">
        <TableHead>
          <TableRow>
            <TableCell> Rank </TableCell>
            <TableCell align="right"> Player </TableCell>
            <TableCell align="right"> Tournament </TableCell>
            <TableCell align="right"> Wins </TableCell>
            <TableCell align="right">Losses</TableCell>
            <TableCell align="right">Games Played</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.player}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.player}
              </TableCell>
              <TableCell align="right">{row.Player}</TableCell>
              <TableCell align="right">{row.Tournament}</TableCell>
              <TableCell align="right">{row.Wins}</TableCell>
              <TableCell align="right">{row.Losses}</TableCell>
              <TableCell align="right">{row.GamesPlayed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}