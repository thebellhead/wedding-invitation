import React from "react";
import dancingImage from "../../assets/dance.png";
import cakeImage from "../../assets/cake.png";

const Important = () => {
  return (
    <section id="important-section">
      <img src={dancingImage} alt="Dancing people" className="dancing-image" />
      <div id="important-main-block">
        <div className="center-text padded-3">
          <p className="center-text-block">
            Для нас главный подарок — ваше присутствие, и мы очень ценим Ваши
            заботу и внимание, но если Вы захотите поддержать нас, мы будем рады
            пожеланиям в конверте.
          </p>
        </div>
        <div className="contacts-container center-text padded-6">
          <h1>Контакты</h1>
          <p className="padded-3 end-block">
            Если вы хотите подготовить какой-то сюрприз или творческое
            поздравление, по любым вопросам Вы можете обращаться к нашим
            организаторам.
          </p>
          <p>Катя, тел: +7(921)632-77-43</p>
          <p>Полина, тел: +7(921)979-68-84</p>
        </div>

        <div className="center-text">
          <p className="highlighted padded-6 end-block">
            Будет весело, трогательно, вкусно и пьяно! До встречи 4 сентября
            2026!
          </p>
        </div>
        <p className="regards">Миша и Соня</p>

        <div className="center">
          <img src={cakeImage} alt="Cake" className="cake-image" />
        </div>
      </div>
    </section>
  );
};

export default Important;
