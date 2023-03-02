import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import final1 from "../../img/final1.png";
import final2 from "../../img/final2.png";
import officeDesk from "../../img/officeDesk.jpeg";
import mainLogo from "../../img/mainLogo.jpg";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import git from "../../img/git.png";
import LinkedIn from "../../img/linkedin.png";
import linkin from "../../img/linkin.png";
import Instagram from "../../img/instagram.png";
import insta from "../../img/insta.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-right">
      {/* 1st child */}
        <img src={final1} alt="" />
        {/* <img src={final2} alt="" /> */}
        {/* 2nd child */}
        <img src={mainLogo} alt="" />
        {/* animation */}
        {/* <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        /> */}

      {/* 3rd child  */}
        <motion.div
          initial={{ top: "-4%", left: "0%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv  text1="  Web" text2="Developer" />
        </motion.div>


        {/* Amazing Designer div is 5th child   */}
        {/* animation */}   
        {/* 4th child */}
        <motion.div   
          initial={{ left: "25rem", top: "15rem" }}
          whileInView={{ left: "3rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv  text1="  Creative" text2="Designer" />
        </motion.div>

         {/* 5th child */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
      {/* right image side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Welcome ! Discover My Portfolio &</span>
          <span>Get Inspired</span>
          <span>
          Building responsive web experiences that amaze and inspire.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        {/* <div className="i-icons">
          <img src={git} alt="" />
          <img src={linkin} alt="" />
          <img src={insta} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Intro;
