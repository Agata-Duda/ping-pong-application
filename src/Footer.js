import React from "react";
import zinkworksFooterImg from "./Images/Zinkworks-Footer.png"

const Footer = () => (
        //this can fix your footer:
//      position: fixed;
//      left: 0;
//      bottom: 0;
        <div className="Footer">
            <div className="adminContact">
                <p  id="contactAdminHeading"> Contact Us </p>
                <p id="contactDetailsFooter">
                    Phone: 083123456
                    <br/>
                    Email: <a href="https://zinkworks.com/" className="emailLink"> PingPongAdmin@Zinkworks.com </a>
                </p>
                <p className="trading"> Neueda Technologies Ireland trading as Zinkworks © 2021 Zinkworks </p>
            </div>
            <div>
                <img src={zinkworksFooterImg} className="FooterImg" alt="Zinkworks Footer Logo" />
            </div>
        </div>
     );

export default Footer;
