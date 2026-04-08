import manorImage from "../../assets/manor.png";
import cupidImage from "../../assets/cupid.png";
import doveImage from "../../assets/dove.png";

const Location = () => {
  return (
    <section id="location-section">
      <div className="location-moved">
        <div className="location-container">
          <img src={manorImage} alt="Mariino manor" className="manor-image" />
          <div className="location-label">
            <div className="center-text">
              <p>Наша свадьба пройдёт в</p>
              <p className="highlighted">Усадьбе Марьино</p>
            </div>
          </div>
        </div>
        <div id="location-bottom-block">
          <a
            href="https://yandex.ru/maps/-/CPfJ6Z21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Посмотреть на карте</button>
          </a>
          <div className="center-text padded-3">
            <p className="center-text-block">
              Всех желающих мы ждем на венчании в Николо-Богоявленском Морском
              соборе, откуда мы отправимся в Усадьбу.
            </p>
          </div>
          <div className="message-container">
            <img src={doveImage} alt="Dove image" className="dove-image" />
            <img src={cupidImage} alt="Cupid image" className="cupid-image" />
            <div id="speech" className="center">
              <div className="speech-bubble">
                Не волнуйтесь о том, как добраться на наш праздник! Всех
                желающих сразу после венчания будет ожидать автобус в 13:00. И
                после окончания праздника вас также доставят в город в целости и
                сохранности.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
