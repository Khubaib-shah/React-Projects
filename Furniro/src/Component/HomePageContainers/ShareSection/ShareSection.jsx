import Heading from "../../Components/Heading/Heading.jsx";
import "./ShareSection.css";

import image1 from "../../../assets/Rectangle 36.png";
import image2 from "../../../assets/Rectangle 38.png";
import image3 from "../../../assets/Rectangle 43.png";
import image4 from "../../../assets/Rectangle 45.png";
import image5 from "../../../assets/Rectangle 37.png";
import image6 from "../../../assets/Rectangle 39.png";
import image7 from "../../../assets/Rectangle 41.png";
import image8 from "../../../assets/Rectangle 44.png";
import image9 from "../../../assets/Rectangle 40.png";

import React from "react";

const ShareSection = () => {
  return (
    <div className="Fruniro-container">
      <div className="Furniro-Heading">
        <p>Share your setup</p>
        <Heading title={"#FurniroFurniture"} />
      </div>
      <div className="Furniro-image-container">
        <div className="Furniro-image-container-section1 h-auto">
          <div className="image-topLeft">
            <div>
              {" "}
              <img className="image1" src={image1} alt="" />
              <img className="image2" src={image2} alt="" />
            </div>
            <div>
              <img className="image5" src={image5} alt="" />
              <img className="image6" src={image6} alt="" />
            </div>
          </div>
          {/* <img className="image9" src={image9} alt="" />
          <img className="image3" src={image3} alt="" />
          <img className="image4" src={image4} alt="" />
        </div>
        <div className="Furniro-image-container-section2">
          <img className="image7" src={image7} alt="" />
          <img className="image8" src={image8} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default ShareSection;
