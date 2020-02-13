import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.header}>
      <NavLink
        to="/"
        style={{
          textDecoration: "none",
          
        }}
      >
        <h3 className={style.name}>Skillers</h3>{" "}
      </NavLink>
      <div className={style.a}>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </div>
      <div className={style.button}>
        <button type="button" className="btn btn-primary btn-lg mr-2 px-4">
          Sign in
        </button>
        <button type="button" className="btn btn-warning btn-lg mr-3 px-4">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;
