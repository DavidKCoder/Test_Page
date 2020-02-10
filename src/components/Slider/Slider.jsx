import React from "react";
import style from "./Slider.module.css";
import CarouselPage from "../Carousel/Carousel";
import { NavLink } from "react-router-dom";

const Slider = () => {
  return (
    <div className={style.slider}>
      <NavLink to="/blog">
        <div className={style.button}>
          <button type="button" className="btn btn-dark btn-lg">
            Read more
          </button>
        </div>
      </NavLink>
      <CarouselPage className={style.carousel} />
    </div>
  );
};

export default Slider;
