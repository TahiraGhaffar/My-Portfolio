import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import footer1 from "../../img/footer1.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
// import SiGmail from "@iconscout/react-unicons/icons/uil-SiGmail";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
  
    <div className="footer">
      <img src={footer1} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>tahiraxyz@gmail.com</span>
        <div className="f-icons">
         <a href="https://www.linkedin.com/" target="_blank"><Linkedin color="white" size={"3rem"} /></a>
          <a href="https://www.facebook.com/" target="_blank"><Facebook color="white" size={"3rem"} /></a> 
          <a href="https://www.github.com/" target="_blank"><Gitub color="white" size={"3rem"} /></a>
          {/* <a href="https://www.gmail.com/" target="_blank"><SiGmail color="white" size={"3rem"} /></a> */}
          
        </div>
      </div>
    </div>
    
  );
};

export default Footer;
