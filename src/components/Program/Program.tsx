import React from "react";
import laceImage from "../../assets/lace.svg";

const Program = () => {
  return (
    <section id="program-section">
      <div className="program-container">
        <img src={laceImage} className="lace-image" />
        <div className="program-label">
          <div className="center-text padded-bottom">
            <h1>Программа</h1>
            <p className="highlighted">12:00</p>
            <p>венчание</p>
            <p className="highlighted">13:00</p>
            <p>трансфер от собора до усадьбы</p>
            <p className="highlighted">15:00</p>
            <p>приветственный фуршет</p>
            <p className="highlighted">16:00</p>
            <p>торжественная церемония</p>
            <p className="highlighted">17:00</p>
            <p>праздничный ужин</p>
            <p className="highlighted">23:00</p>
            <p>окончание праздника</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
