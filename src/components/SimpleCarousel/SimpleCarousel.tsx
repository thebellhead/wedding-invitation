import { useState } from "react";
import men1 from "../../assets/men_wardrobe/1.jpg";
import men2 from "../../assets/men_wardrobe/2.jpg";
import men3 from "../../assets/men_wardrobe/3.jpg";
import men4 from "../../assets/men_wardrobe/4.jpg";
import men5 from "../../assets/men_wardrobe/5.jpg";
import women1 from "../../assets/women_wardrobe/1.jpg";
import women2 from "../../assets/women_wardrobe/2.jpg";
import women3 from "../../assets/women_wardrobe/3.jpg";
import women4 from "../../assets/women_wardrobe/4.jpg";
import women5 from "../../assets/women_wardrobe/5.jpg";
import women6 from "../../assets/women_wardrobe/6.png";
import women7 from "../../assets/women_wardrobe/7.jpg";
import women8 from "../../assets/women_wardrobe/8.jpg";
import women9 from "../../assets/women_wardrobe/9.png";
import { useSwipeable } from "react-swipeable";

interface Slide {
  id: number;
  src: string;
  width: number;
  height: number;
  alt: string;
}

const images: Slide[] = [
  { id: 5, width: 736, height: 981, src: men5, alt: "men5" },
  { id: 6, width: 1200, height: 1599, src: women1, alt: "women1" },
  { id: 7, width: 996, height: 1245, src: women2, alt: "women2" },
  { id: 1, width: 736, height: 1262, src: men1, alt: "men1" },
  { id: 8, width: 600, height: 900, src: women3, alt: "women3" },
  { id: 9, width: 900, height: 1350, src: women4, alt: "women4" },
  { id: 2, width: 736, height: 920, src: men2, alt: "men2" },
  { id: 10, width: 1200, height: 1598, src: women5, alt: "women5" },
  { id: 3, width: 675, height: 1200, src: men3, alt: "men3" },
  { id: 11, width: 632, height: 944, src: women6, alt: "women6" },
  { id: 4, width: 736, height: 981, src: men4, alt: "men4" },
  { id: 12, width: 643, height: 1223, src: women7, alt: "women7" },
  { id: 13, width: 1200, height: 1598, src: women8, alt: "women8" },
  { id: 14, width: 930, height: 1610, src: women9, alt: "women9" },
];

const SimpleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveIndex = (index: number, delta: number): number => {
    var res = index + delta;
    if (res < 0) {
      res += images.length;
    }
    return res % images.length;
  };

  const nextImage = () => {
    const newIndex = moveIndex(currentIndex, 1);
    setCurrentIndex(() => newIndex);
    translateCarousel(newIndex);
  };

  const prevImage = () => {
    const newIndex = moveIndex(currentIndex, -1);
    setCurrentIndex(() => newIndex);
    translateCarousel(newIndex);
  };

  const getTranslationWidth = (currentIndex: number): number => {
    var width: number = 0;

    var newIndex = currentIndex;
    for (let i = 0; i < 3; i++) {
      newIndex = moveIndex(newIndex, -1);
      const image = images[newIndex];
      width -= (400 / image.height) * image.width;
    }

    newIndex = currentIndex;
    for (let i = 0; i < 3; i++) {
      newIndex = moveIndex(newIndex, 1);
      const image = images[newIndex];
      width += (400 / image.height) * image.width;
    }

    return width / 2;
  };

  const translateCarousel = (currentIndex: number): void => {
    const element = document.getElementById("carousel");
    const transformValue =
      "translateX(" + getTranslationWidth(currentIndex) + "px)";
    if (element) {
      element.style.transform = transformValue;
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    trackMouse: true,
  });

  window.addEventListener("load", () => translateCarousel(currentIndex));
  window.addEventListener("resize", () => translateCarousel(currentIndex));

  return (
    <div className="carousel-container padded-6">
      <button onClick={prevImage} className="carousel-button-left">
        {"<"}
      </button>
      <div {...handlers} className="carousel" id="carousel">
        {Array.from({ length: 3 }, (_, i) => (
          <img
            src={images[moveIndex(currentIndex, -3 + i)].src}
            alt={images[moveIndex(currentIndex, -3 + i)].alt}
            className="carousel-image width-counter-left"
          />
        ))}
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="carousel-image-main"
        />
        {Array.from({ length: 3 }, (_, i) => (
          <img
            src={images[moveIndex(currentIndex, 1 + i)].src}
            alt={images[moveIndex(currentIndex, 1 + i)].alt}
            className="carousel-image width-counter-right"
          />
        ))}
      </div>
      <button onClick={nextImage} className="carousel-button-right">
        {">"}
      </button>
    </div>
  );
};

export default SimpleCarousel;
