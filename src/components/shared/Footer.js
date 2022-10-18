import { Box } from "@mui/material"
import React from "react"
import zinkworksFooterImg from "../../Images/Zinkworks-Footer.png"
import Typography from "@mui/material/Typography"

const styles = {
  "footer": {
    "color": "white",
    "background-image": "linear-gradient(to right, #ff0041 ,#FD3A2D, #FE612C, #FF872C, #FFA12C ); ",
    "marginTop": "22vw",
    "width": "100%",
    "justifyItems": "center",
    "alignItems": "center",
    "display": "flex",
    "position": "fixed",
    "left": "0",
    "bottom": "0"
  },
  "contact": {
    "paddingLeft": "50px",
    "textAlign": "justify"
  },
  "img": {
    "display": "inline-block",
    "paddingLeft": "50%",
    "height": "45px"
  },
  "trading": {
    "paddingBottom": "10px",
    "paddingTop": "0px",
    "fontSize": "10px"
  },
  "contactUsHeading": {
    "font-weight": "bold",
    "fontSize": "16px"
  },
  "contactUsDetails": {
    "fontSize": "14px"
  }

}

export const Footer = () => {
  return (
    <Box sx={styles.footer}>
      <Box sx={styles.contact}>
        <Typography sx={styles.contactUsHeading}> Contact Us </Typography>
        <Typography sx={styles.contactUsDetails}>
                    Phone: 083123456
          <br/>
                    Email: <a href="https://zinkworks.com/" > PingPongAdmin@Zinkworks.com </a>
        </Typography>
        <Typography sx={styles.trading}> Neueda Technologies Ireland trading as Zinkworks ©
                    2021 Zinkworks </Typography>
      </Box>
      <Box component='img' src={zinkworksFooterImg} sx={styles.img} className="FooterImg"
        alt="Zinkworks Footer Logo"/>
    </Box>
  )
}
