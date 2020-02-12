import React from "react";
import style from "./Article.module.css";
import { NavLink } from "react-router-dom";

const Article = () => {
  return (
    <div className={style.blog}>
      <NavLink
        to="/blog"
        style={{
          textDecoration: "none",
          color: "black"
        }}
      >
        {" "}
        <i class="fas fa-undo"></i>
      </NavLink>
      <div className={style.card}>
        <div className={style.cardBody}>
          <h5 class="card-title">
            How to design products that make a difference with Cat Noone
          </h5>
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
            <i class="fas fa-share-alt"></i>
            <div className={style.blogBtn}>
              <button
                type="button"
                className="btn btn-outline-dark btn-lg mr-2 px-4"
              >
                Save
              </button>
            </div>
          </div>
          <div className={style.blogImg}>
            <img
              src="https://uc.uxpin.com/files/1086128/1053332/Reasons_Images_Are_Extremely_Important_Blog-08344037bf77910b35b96a75dddf3b6e-4b0d77.jpg"
              class="card-img-top"
              alt=""
            />

            <div>
              <span>
                In today’s episode we have collected the very best from the
                interviews we’ve done with founders in 2019.
                <p>
                  Mathilde Collin, CEO of Front, shared lessons on building a
                  strong company culture and talked about the questions she asks
                  when hiring.
                </p>
                <p>
                  {" "}
                  Sahil Lavingia, founder and CEO of Gumroad, told the story of
                  founding the company and explained some of the challenges that
                  come with taking venture capital.
                </p>
                <p>
                  {" "}
                  Sharmadean Reid, founder of Beautystack, talked about the
                  unique way she ran her fundraising process, the power of
                  storytelling, and had some great tips for entrepreneurs
                  raising capital.Delane Parnell, founder and CEO of PlayVS,
                  talked about failure and how facing adversity early in his
                  career helped him build PlayVS.David Heinemeier Hansson,
                  co-founder and CTO of Basecamp, talked about how to build a
                  sustainable company and why “small is not a stepping stone.”
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
