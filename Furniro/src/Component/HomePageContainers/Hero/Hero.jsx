import React from "react";
import diningImage from "../../../assets/image 106.png";
import livingImage from "../../../assets/image 101.png";
import bedroomImage from "../../../assets/image 82.png";
import "./Hero.css";
import Heading from "../../Components/Heading/Heading";

const obj = [
  {
    id: 1,
    title: "Dining",
    image: diningImage,
  },
  { id: 2, title: "Living", image: livingImage },
  { id: 3, title: "Bedroom", image: bedroomImage },
];

const Hero = () => {
  return (
    <div className="Furniro__Container section_padding">
      <div className="Furniro__Hero__Heading">
        <Heading title={"Browser The Range"} />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
          ullam,
        </p>
      </div>
      <div className="Furniro__Hero__Images__Container section_padding">
        {obj.map((item) => (
          <div key={item.id}>
            <div className="Furniro__Hero__Images__Container-Image">
              <img src={item.image} alt={`${item.title} image`} />
            </div>
            <div className="Furniro__Hero__Images__Container-SubHeading">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
