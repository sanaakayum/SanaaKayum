import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";
import uuid from "uuid/v4";
import PurchasedProductGridListSingle from "../../components/product/PurchasedProductGridListSingle";
import Link from "next/link";
import Row from "antd/lib/row";


import ListPurchasedProductGLSingle from "../../components/product/ListPurchasedProductGLSingle";
import { isMobile, isTablet } from "react-device-detect";

const slugify = require("@sindresorhus/slugify");

const PurchasedProductGrid = ({
  userData,
  products,
  currency,
  columnClass,
  sliderClassName,
  spaceBottomClass
}) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const [display, setDisplay] = useState(false);
  useEffect(()=>{
    setDisplay(true);
  })
  return (
    <Fragment>
      {products &&
        products.map(product => {
          return product.data ? (
            display?<OwlCarousel
                items={isMobile ? 2 : isTablet ? 3 : 4}
                {...options}
                className="owl-theme"
                nav
              >
            <Row className="orders-wrapper mb-5" key={uuid()}>
              <div className="text-right font-weight-bold pr-3 pt-2 title-card">
                <div className="text-left pl-3" style={{ fontSize: "10px" }}>
                  {product.cart_id}
                </div>
                {`  `}
                {product.result[0] === "A" ||
                product.result[0] === "Order Placed"
                  ? `Ordered On : `
                  : `Attempted On : `}
                {product.result[1].getDate()}
                {` `}
                {monthNames[product.result[1].getMonth()]}
                {` `}
                {product.result[1].getFullYear()}
              </div>
              <Row className="orders-container">
                <ListPurchasedProductGLSingle product={product} />
              </Row>
            </Row>
            </OwlCarousel>:<Skeleton height={150}/>
          ) : (
            <>
              <Link
            href={{
              pathname: `/product/[pid]/[slug]`,
              query: {
                pid: product.serialNumber,
                slug: slugify(product.description)
              }
            }}
            passHref
          >
            
            <PurchasedProductGridListSingle
              sliderClassName={sliderClassName}
              columnClass={columnClass}
              sliderClassName={sliderClassName}
              spaceBottomClass={spaceBottomClass}
              product={product}
              currency={currency}
              entryID={userData.user.entryID}
              loginUser={loginUser}
            />
            
          </Link> 
            </>
          );
        })}
    </Fragment>
  );
};

PurchasedProductGrid.propTypes = {
  addToCart: PropTypes.func,

  addToWishlist: PropTypes.func,
  cartItems: PropTypes.array,

  currency: PropTypes.object,
  products: PropTypes.array,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  wishlistItems: PropTypes.array
};

const mapStateToProps = state => {
  return {
    currency: state.currencyData,
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,

    userData: state.userData
  };
};

export default connect(mapStateToProps, null)(PurchasedProductGrid);
