import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import Slider from "react-slick";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import groceryApp from "../../img/groceryApp.jpg";
import Tasklist from "../../img/Tasklist.png";
import shopApp from "../../img/shopApp.png";
import gameApp from "../../img/gameApp.jpg";
import healthApp from "../../img/healthApp.jpg";
import DigitalCurrencyApp from "../../img/DigitalCurrencyApp.jpg";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
// import SimpleSlider from "./components/SimpleSlider/SimpleSlider";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 0.9,
    slidesToScroll: 1
  };


  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      {/* <span>Portfolio</span> */}

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        grabCursor={true}
        className="portfolio-slider"
      >
    
        {/* <SwiperSlide>
          <img src={shopApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Tasklist} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={groceryApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper> */}

      

      {/* <Slider {...settings}>
        <div className="box">
        <img src={Tasklist} alt="" />
        </div>
        <div  className="box">
        <img src={groceryApp} alt="" />
        </div>
      </Slider> */}
      {/* </Swiper> */}
      
      <Slider {...settings}>
      <div>
      <img src={Tasklist} alt="" />
      </div>
      <div>
      <img src={groceryApp} alt="" />
      </div>
      <div>
      <img src={gameApp} alt="" />
      </div>
      <div>
      <img src={shopApp} alt="" />
      </div>
      <div>
      <img src={healthApp} alt="" />
      </div>
      <div>
      <img src={DigitalCurrencyApp} alt="" />
      </div>
    </Slider>
</Swiper>


    </div>
  );
};

export default Portfolio;
