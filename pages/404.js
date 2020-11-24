import PropTypes from "prop-types";
import React, { Fragment } from "react";
import  Link  from "next/link";


import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../layouts/LayoutOne";
import HeaderMeta from "../components/header/HeaderMeta";
import { useRouter } from "next/router";
const NotFound = ({}) => {
  const router=useRouter()
  return (

    <Fragment>
          <HeaderMeta
        article={"404: Thats unstitched"}
        title={"404: Thats unstitched"}
        description={
          "404: Thats unstitched"
        }
        image={"https://sanaakayum.com/assets/pwa/icons/icon-512x512.png"}
        keywords={`Sana\'a Kayum, Dubai, Fashion `}
        url={""}
        color={"#000000"}
        
      />


      <LayoutOne headerTop="visible">
        {/* breadcrumb */}

        <div className="error-area pt-40 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 text-center">
                <div className="error">
                  <h1>404</h1>
                  <h2>OOPS! PAGE NOT FOUND</h2>
                  <p>
                    Sorry but the page you are looking for does not exist, have
                    been removed, name changed or is temporarity unavailable.
                  </p>
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      router.push(
                        "/shop?search=" +
                          document.querySelector("#error_search").value
                      );
                    }}
                    className="searchform mb-50"
                  >
                    <input
                      type="text"
                      name="search"
                      id="error_search"
                      placeholder="Search..."
                      className="searchform__input"
                    />
                    <button type="submit" className="searchform__submit">
                      <i className="fa fa-search" />
                    </button>
                  </form>
                  <Link href={process.env.RAZZLE_PUBLIC_URL + "/"}>
                  <a
                    className="error-btn"
                  >
                    Back to home page
                  </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

NotFound.propTypes = {
  location: PropTypes.object
};

export default NotFound;
