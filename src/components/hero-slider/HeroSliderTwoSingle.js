import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const HeroSliderTwoSingle = ({ data, sliderClassName }) => {
  return (
    <div
      className={`single-slider single-slider-10 slider-height-8 bg-img ${sliderClassName ? sliderClassName : ""
        }`}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/img/slider/fon-hero-slider-1.webp"
          })`
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 d-flex align-items-center">
            <div className="slider-content slider-content-10 slider-animated-2">
              <h3 className="animated">{data.title}</h3>
              <h1 className="animated">{data.subtitle}</h1>
              <div className="slider-btn btn-hover">
                <Link
                  className="animated"
                  to={process.env.PUBLIC_URL + data.url}
                >
                  Посмотреть
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="slider-singleimg-hm10 slider-animated-2 ml-40 mr-40">
              <img
                className="animated img-fluid"
                src={process.env.PUBLIC_URL + data.image}
                alt="картинка"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderTwoSingle.propTypes = {
  data: PropTypes.object,
  sliderClassName: PropTypes.string
};

export default HeroSliderTwoSingle;