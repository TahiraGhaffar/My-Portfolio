import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
import { motion } from "framer-motion";
import FloatinDiv from "../FloatingDiv/FloatingDiv";

const Experience = () => {
  // Transition
  const transition = { duration: 2, type: "tween" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
    <motion.div   
          initial={{ left: "50rem", top: "15rem" }}
          whileInView={{ left: "3rem" }}
          transition={transition}
          className="floating-div"
        >
      <FloatinDiv  text1="  Creative" text2="Designer" />
    </motion.div>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'#9370DB':''}}>1+</div>
        <span  style={{color: darkMode?'white':''}}>years </span>
        <span>Experience</span>
      </div>
      

      <div className="achievement">
        <div className="circle" style={{color: darkMode?'#9370DB':''}}>10+</div>
        <span  style={{color: darkMode?'white':''}}>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'#9370DB':''}}>5+</div>
        <span  style={{color: darkMode?'white':''}}>companies </span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
