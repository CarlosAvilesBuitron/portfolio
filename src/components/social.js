import React from 'react';

//Dev Icons
import { 
    FaFacebook,
    FaInstagram,
    FaGithub,
    FaLinkedin
 } from "react-icons/fa";


function SocialIcons(){
    return(
        <div id="social_icons">
            <a href="https://github.com/CarlosAvilesBuitron" rel="noopener noreferrer" target="_blank"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/carlosavilesbuitron/" rel="noopener noreferrer" target="_blank"><FaLinkedin/></a>
            <a href="https://www.facebook.com/carlos.avilesbuitron.3" rel="noopener noreferrer" target="_blank"><FaFacebook/></a>
            <a href="https://www.instagram.com/carlos.socializes/" rel="noopener noreferrer" target="_blank"><FaInstagram/></a>
        </div>
    );
}

export default SocialIcons;
