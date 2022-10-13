import React from "react";
import zinkworksFooterImg from "./Zinkworks-Footer.png"

const Footer = () => (
        <div className="Footer">
            <div className="adminContact"> 
              <h4 id="contactAdminHeading" > Contact Us </h4>
                <p>
                   <a href="https://zinkworks.com/" className="emailLink"> @  PingPongAdmin@Zinkworks.com </a>
                   <br/>
                </p> 
                <p className="trading"> Neueda Technologies Ireland trading as Zinkworks © 2021 Zinkworks </p>  
            </div>
            <div>
                <img src={zinkworksFooterImg} className="FooterImg" alt="Zinkworks Footer Logo" />
            </div>

        </div>
     );
 
export default Footer;