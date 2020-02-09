import React from "react";
import style from "./Slider.module.css";

const Slider = () => {
   return (
      <div className={style.slider}>
         <div className={style.button}>
            <button type="button" className="btn btn-dark btn-lg">
               Read more
            </button>
         </div>
      </div>
   );
};

export default Slider;
