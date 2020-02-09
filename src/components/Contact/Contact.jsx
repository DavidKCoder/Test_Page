import React from "react";
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={style.contact}>
      <div className={style.contactInfo}>
        <div className={style.avatar}>
          <img
            src="https://lh3.googleusercontent.com/proxy/NX-hIac9ebS6mSEJoefNuOVpKmjQR-q6u1VDuJBYct0LYVXHVCLKftgqVR66EHKZp0anyoN96an1YOsYOmJZ3Dx1Te9t3tWpF8ueUXuzETAuCzkAuiC4-4jxUQEd-6CWYCeqir2HXhMVdB7tXVN3G-hMjcWMpCWVd9Nbww3jhw"
            alt=""
          />
        </div>
        <div className={style.info}>
          <h4>
            <i class="fas fa-user-astronaut"></i> David Karapetyan
          </h4>
          <p>Front End Developer</p>
          <i class="fas fa-mobile-alt">
            <a href="tel:+37455753272"> +374 (55) 75 32 72 </a>
          </i>
          <br />
          <i class="fas fa-envelope">
            <a href="#d"> karapetyand91@gmail.com</a>
          </i>
          <br />
          <i class="fab fa-github">
            <a href="#d"> DavidKizinger</a>{" "}
          </i>
        </div>
      </div>
    </div>
  );
};

export default Contact;
