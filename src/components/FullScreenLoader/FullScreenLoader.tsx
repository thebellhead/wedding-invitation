import React from "react";
import "./FullScreenLoader.css";
import milkImage from "../../assets/milk.png";

interface FullScreenLoaderProps {
  isLoaded: boolean;
}

const FullScreenLoader: React.FC<FullScreenLoaderProps> = ({ isLoaded }) => {
  if (isLoaded) return null;

  return (
    <div className="fullscreen-loader">
      <div className="loader-container">
        <img src={milkImage} alt="Milk" className="spinning-image" />
        <p className="loading-text">Загрузка приглашения...</p>
      </div>
    </div>
  );
};

export default FullScreenLoader;
