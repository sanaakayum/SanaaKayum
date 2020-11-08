import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import TnCCtn from "../components/section-title/TnC";

const TermsAndConditions = ({  }) => {
  

  return (
    <Fragment>
      <MetaTags>
        <title>Terms And Conditions - Sana'a Kayum</title>
        <meta
          name="description"
          content="These terms and conditions outline the rules and regulations for the use of SANAA KAYUM CLOTHING ART LLC's Website, located at https://sanaakayum.com"
        />
      </MetaTags>
      
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        

        {/* section title with text */}
        <TnCCtn spaceTopClass="pt-20" spaceBottomClass="pb-95" />
      </LayoutOne>
    </Fragment>
  );
};

TermsAndConditions.propTypes = {
  location: PropTypes.object
};

export default TermsAndConditions;
