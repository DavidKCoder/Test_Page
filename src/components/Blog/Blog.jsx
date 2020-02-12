import React from "react";
import style from "./Blog.module.css";
import { NavLink } from "react-router-dom";
import CarouselPage from "../Carousel/Carousel";

const Blog = () => {
  return (
    <div className={style.slider}>
      <NavLink to="/article">
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

export default Blog;
