import React from 'react';

//Icons
import { 
    FaFacebook,
    FaInstagram,
    FaGithub,
    FaLinkedin
 } from "react-icons/fa";

function Footer(){
    return(
        <footer id="footer-main">
            <p><span className="highlight">&copy;2019</span> Carlos Aviles Buitron</p>
            <div id="footer_social_icons">
                Find me on:
                <a href="https://github.com/CarlosAvilesBuitron" rel="noopener noreferrer" target="_blank"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/carlosavilesbuitron/" rel="noopener noreferrer" target="_blank"><FaLinkedin/></a>
                <a href="https://www.facebook.com/carlos.avilesbuitron.3" rel="noopener noreferrer" target="_blank"><FaFacebook/></a>
                <a href="https://www.instagram.com/carlos.socializes/" rel="noopener noreferrer" target="_blank"><FaInstagram/></a>
            </div>
        </footer>
    );
}

export default Footer;