import React from "react";
import { useSearchParams } from "react-router-dom";
import facesImage from "../../assets/faces.gif";

interface nameEntry {
  name: string;
  sex: number;
}

const ids: Record<string, nameEntry> = {
  motya: { name: "Матвей", sex: 0 },
  arsenii: { name: "Арсений", sex: 0 },
  egor: { name: "Георгий", sex: 0 },
  ildar: { name: "Ильдар", sex: 0 },
  den: { name: "Денис", sex: 0 },
  pasha: { name: "Павел", sex: 0 },
  oleg: { name: "Олег", sex: 0 },
  ilya: { name: "Илья", sex: 0 },
  valera: { name: "Валерий", sex: 0 },

  varya: { name: "Варвара", sex: 1 },
  dusya: { name: "Евдокия", sex: 1 },
  galya: { name: "Галина", sex: 1 },
  tonya: { name: "Антонина", sex: 1 },
  masha: { name: "Мария", sex: 1 },
  lisa: { name: "Елизавета", sex: 1 },
  margo: { name: "Марго", sex: 1 },
  angelina: { name: "Ангелина", sex: 1 },
  sasha: { name: "Александра", sex: 1 },
  tamila: { name: "Тамила", sex: 1 },
  yulya: { name: "Юля", sex: 1 },
  sveta: { name: "Светлана", sex: 1 },
  arina: { name: "Арина", sex: 1 },
  lina: { name: "Ангелина", sex: 1 },

  vitaly_irina: { name: "Виталий и Ирина", sex: 2 },
  vladimir_lida: { name: "Владимир и Лидия", sex: 2 },
  lesha_yulya: { name: "Алексей, Юлия и Даниил", sex: 2 },
  hope_and_faith: { name: "Надежда и Вера", sex: 2 },
  tanya_elina: { name: "Татьяна и Элина", sex: 2 },
  vitya_natasha: { name: "Виктор и Наталья", sex: 2 },
  lera_olesya: { name: "Валерия и Олеся", sex: 2 },
  nil_vlada: { name: "Нил и Влада", sex: 2 },
  slava_natasha: { name: "Вячеслав и Наталья", sex: 2 },
  igor_sveta: { name: "Игорь и Светлана", sex: 2 },
  katya_lesha: { name: "Екатерина и Алексей", sex: 2 },
  roma_ira: { name: "Роман и Ирина", sex: 2 },
};

const Intro = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id") || "";
  const guest = ids[id] || { name: "гость", sex: 0 };
  const name = guest.name;
  const sex = guest.sex;

  let start;
  if (sex == 2) {
    start = "Дорогие";
  } else if (sex == 1) {
    start = "Дорогая";
  } else {
    start = "Дорогой";
  }

  return (
    <section id="intro-section">
      <div className="padded-intro">
        <p>{start}</p>
        <p className="highlighted">{name}</p>
        <p className="padded-3">Приглашаем Вас на нашу свадьбу</p>
        <p>04.09.2026</p>
      </div>
      <div className="center">
        <img src={facesImage} alt="Our faces" className="faces-image" />
      </div>
    </section>
  );
};

export default Intro;
