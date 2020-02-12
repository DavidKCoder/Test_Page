import React from "react";
import style from "./Block.module.css";
import { NavLink } from "react-router-dom";

const Block = props => {
  return (
    <div className={style.block}>
      <div className={style.card}>
        <NavLink
          to="/article"
          style={{
            textDecoration: "none",
            color: "black"
          }}
        >
          <img
            src="https://uc.uxpin.com/files/1086128/1053332/Reasons_Images_Are_Extremely_Important_Blog-08344037bf77910b35b96a75dddf3b6e-4b0d77.jpg"
            class="card-img-top"
            alt=""
          />
          <div className={style.cardBody}>
            <h5 class="card-title">
              How to design products that make a difference with Cat Noone
            </h5>
            <p class="card-text">{props.post}</p>
            <div className={style.icon}>
              <a href="#i">
                <div className={style.img}>
                  <img
                    src="https://www.web2printdownunder.co.nz/images/230/204/user-img.png?h=cdd010b0"
                    alt=""
                  />
                </div>
              </a>
              <div className={style.data}>Skillers blog Dec 25</div>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Block;
