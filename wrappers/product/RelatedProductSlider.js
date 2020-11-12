import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import ProductGrid from "./ProductGrid";

const RelatedProductSlider = ({ spaceBottomClass, category }) => {
  
  const settings = {
    loop: false,
    slidesPerView: 4,
    grabCursor: true,
    breakpoints: {
      1024: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 3
      },
      640: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
  };

  return (
    <div
      className={`related-product-area ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <h2>Related Products</h2>
        
        <div className="row">
          <Swiper {...settings}>
            
            <ProductGrid
              article={category}
              limit={6}
              sliderClassName="swiper-slide"
            />
          </Swiper>
        </div>
      </div>
    </div>
  );
};



export default RelatedProductSlider;
