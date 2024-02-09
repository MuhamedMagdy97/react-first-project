import React, { useState } from "react";
import cake from "../images/cake.png";
import house from "../images/house.png";
import something from "../images/something.png";
import "../Portfolio/Portfolio.css";

export default function Portfolio() {
  const houseImages = [house, cake, something];
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    console.log("hi");
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const renderCards = () => {
    const repeatedStructure = Array.from({ length: 6 }, (_, index) => {
      const image = houseImages[index % houseImages.length]; // Get the image using modulo
      return (
        <div className="col-md-4" key={index}>
          <div className="card mt-5 d-flex justify-content-between align-items-center">
            <div className="overlay" onClick={() => openModal(image)}>
              <div className="plus">+</div>
            </div>
            <img
              src={image}
              className="w-100"
              alt="img"
              onClick={() => openModal(image)}
            />
          </div>
        </div>
      );
    });

    return repeatedStructure;
  };

  return (
    <>
      <section className="py-5 ">
        <div className="container vh-100">
          <div className="row">
            <div className="col-md-12">
              <div className="portfolio-header text-center">
                <h2 className="pb-2">PORTFOLIO COMPONENT</h2>
                <div className="shape text-center">
                  <div className="star">&#9733;</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">{renderCards()}</div>
        </div>
        {selectedImage && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <img src={selectedImage} alt="Selected" />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
