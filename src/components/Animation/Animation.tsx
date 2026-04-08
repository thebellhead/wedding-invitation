import React from "react";
import animationImage from "../../assets/bkg_animation_heavy.gif";
// import animationImage from "../../assets/bkg_animation.gif";
import cloudImage from "../../assets/cloud.png";

const Animation = () => {
  return (
    <section id="animation-section">
      <div className="center animation-container">
        <img src={animationImage} className="animation-image" />
        <svg viewBox="0 0 500 500" className="path-with-text">
          <path
            id="curve"
            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
          />
          <text width="500">
            <textPath xlinkHref="#curve">О дресс-коде</textPath>
          </text>
        </svg>
        <img src={cloudImage} className="cloud-image" />
      </div>
    </section>
  );
};

export default Animation;
