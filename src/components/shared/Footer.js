import {Box} from '@mui/material';
import React from 'react';
import zinkworksFooterImg from '../../Images/Zinkworks-Footer.png';
import Link from '@mui/material/Link';

const styles = {
    footer: {
        color: "black",
        backgroundColor: "#ff0041",
        marginTop: "22vw",
        width: "100%",
        justifyItems: "center",
        alignItems: "center",
        display: "flex",
        left: "0",
        bottom: "0",
        padding: 1
    },
    contact: {
        paddingLeft: '50px',
        textAlign: 'justify',
        color: '#FFFFFF'
    },
    img: {
        display: "inline-block",
        paddingLeft: "500px",
        justifyItems: "right",
        paddingRight: "0cm",
        height: "45px"
    },
    trading: {
        paddingBottom: '10px',
        paddingTop: '0px',
        fontSize: '12px',
    }
}

export const Footer = () => {
    return (
        <Box sx={styles.footer}>
            <Box sx={styles.contact}>
            <Link color={"#FFFFFF"} href="https://zinkworks.atlassian.net/wiki/spaces/GT1/pages/160661507/Ping+Pong+AI+Application">App Documentation</Link>
            </Box>
            <Box component='img' src={zinkworksFooterImg} sx={styles.img} className="FooterImg"
                 alt="Zinkworks Footer Logo"/>
        </Box>
    )
}