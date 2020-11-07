import PropTypes from "prop-types";
import React from "react";
import SubscribeEmail from "./sub-components/SubscribeEmail";

const FooterNewsletter = ({ spaceBottomClass, spaceLeftClass, sideMenu }) => {
  return (
    <div
      className={`footer-widget ${spaceBottomClass ? spaceBottomClass : ""} ${
        sideMenu ? "ml-ntv5" : spaceLeftClass ? spaceLeftClass : ""
      }`}
    >
      <div className="footer-title">
        <h3>SUBSCRIBE</h3>
      </div>
      <div className="subscribe-style">
        <p>Get E-mail updates about our latest shop and special offers.</p>
        {/* subscribe email */}
        <SubscribeEmail mailchimpUrl="https://mailchi.mp/4880653/ramadan-kareem" />
      </div>
    </div>
  );
};

FooterNewsletter.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceLeftClass: PropTypes.string
};

export default FooterNewsletter;
