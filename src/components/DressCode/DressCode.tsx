import colorsMaleImage from "../../assets/colors-male.svg";
import colorsFemaleImage from "../../assets/colors-female.svg";
import SimpleCarousel from "../SimpleCarousel/SimpleCarousel";

const DressCode = () => {
  return (
    <section id="dress-code-section" className="center-text">
      <div className="dress-code-container">
        <div className="center-text padded-6">
          <p className="padded-6">
            Мы с трепетом готовимся к нашему дню и вкладываем много сил в
            атмосферу свадьбы. Пожалуйста, поддержите цветовую палитру нашего
            торжества!
          </p>
        </div>
        <div className="colors-container">
          <h1>Женщины</h1>
          <img src={colorsFemaleImage} className="colors-image" />
        </div>
        <div className="colors-container">
          <h1>Мужчины</h1>
          <img src={colorsMaleImage} className="colors-image" />
        </div>
      </div>
      <div className="recommendations-block center-tex padded-6">
        <p className="padded-3">
          Формат нашей свадьбы подразумевает строгий вечерний стиль.
        </p>
        <p className="padded-3">
          Наши прекрасные дамы, пожалуйста, воздержитесь от ярких оттенков
          платьев, а также от использования красного, белого и чёрного цветов.
        </p>
        <p className="padded-3">
          Джентльмены, идеальным решением станет костюм или рубашка + брюки.
        </p>
      </div>
      <p className="carousel-label">
        Мы собрали немного образов, чтобы вдохновить Вас!
      </p>
      <SimpleCarousel />
      <h1 className="something-important">Кое-что важное</h1>
    </section>
  );
};

export default DressCode;
