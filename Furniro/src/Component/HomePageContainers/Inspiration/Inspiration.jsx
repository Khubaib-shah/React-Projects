import { IoIosArrowDropright, IoIosArrowRoundForward } from "react-icons/io";

import React, { useState } from "react";
import "./Inspiration.css";
import Button from "../../Components/button/Button";
import innerPeaceImage from "../../../assets/Rectangle 24.png";

import CarousalImage1 from "../../../assets/Rectangle 25.png";
import CarousalImage2 from "../../../assets/Rectangle 26.png";
const InspirationSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const roomImages = [
    {
      id: 1,
      title: "Inner Peace",
      subtitle: "01 — Bed Room",
      imageUrl: innerPeaceImage,
    },
    {
      id: 2,
      title: "Sunlight Glow",
      subtitle: "03 — Dining Room",
      imageUrl: CarousalImage1,
    },
    {
      id: 3,
      title: "Minimal Vibe",
      subtitle: "02 — Living Room",
      imageUrl: CarousalImage2,
    },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % roomImages.length);
  };
  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <section className="inspiration-section">
      <div className="left-column">
        <h2>50+ Beautiful rooms inspiration</h2>
        <p>
          Our designer already made a lot of beautiful prototypes of rooms that
          inspire you.
        </p>
        <Button Button={"Explore more"} />
      </div>
      <div className="Furniro__Inspiration-Content-Image">
        <img
          src={roomImages[currentImage].imageUrl}
          alt={roomImages[currentImage].title}
        />
        <div className="Furniro__Inspiration-Content-Image-UpperContent">
          <div className="Furniro__Inspiration-Content-Image-UpperContent_left">
            <h3>{roomImages[currentImage].subtitle}</h3>
            <p>{roomImages[currentImage].title}</p>
          </div>
          <div className="Furniro__Inspiration-Content-Image-UpperContent_right">
            <IoIosArrowRoundForward />
          </div>
        </div>
      </div>

      <div className="right-column">
        <div className="image-carousel">
          <div className="image-container">
            <img
              src={roomImages[currentImage].imageUrl}
              alt={roomImages[currentImage].title}
            />
          </div>
          <button className="next-button" onClick={nextImage}>
            <IoIosArrowDropright />
          </button>
        </div>
        <div className="pagination-dots">
          {roomImages.map((image, index) => (
            <span
              key={image.id}
              className={`dot ${index === currentImage ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
