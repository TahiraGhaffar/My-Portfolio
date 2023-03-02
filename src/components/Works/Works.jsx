import React, { useContext } from "react";
import "./Works.css";
import Upwork1 from "../../img/upwork1.png";
import Fiver1 from "../../img/fiver1.png";
import Freelancer from "../../img/freelancer.png";
import Amazon from "../../img/amazon.png";
import Shopify1 from "../../img/shopify1.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-right">
        <motion.div
          initial={{rotate: 90}} 
    //       animate={{ 
    // x: 0,
    // y: 0,
    // scale: 0,
    // rotate: 360,}}
          whileInView={{ rotate: -360 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 1.5, type: "tween" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Fiver1} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify1} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Upwork1} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Freelancer} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        {/* <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div> */}
      </div>

      {/* right side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            My Amazing
          </span>
          <span>Brands & Clients</span>
          <spane>
          Over the years, I've had the privilege of collaborating with various brands and clients, 
            <br />
            gaining a deep understanding of their needs, goals, and objectives. 
            <br />
            Through these partnerships, I have helped to bring their brand stories 
            <br />
            to life through exceptional design and innovative web development solutions.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

      </div>
    </div>
  );
};

export default Works;
