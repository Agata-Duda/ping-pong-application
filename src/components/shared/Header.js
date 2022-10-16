import {AppBar, Box} from '@mui/material';
import logo from '../../Images/zinkworks-ping-pong-logo.png';
import React from 'react';

const styles = {
    header: {
        backgroundColor: "#00193A",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "left",
        fontSize: "calc(10px + 2vmin)",
        color: "white",
    },
    logo: {
        maxHeight: '128px',
        pointerEvents: 'none',
        padding: '15px',
    }
}

export const Header = () => {
    return (
        <AppBar position="fixed" sx={styles.header}>
            <Box component="img" src={logo} sx={styles.logo} alt="logo" />
        </AppBar>
    )
}
