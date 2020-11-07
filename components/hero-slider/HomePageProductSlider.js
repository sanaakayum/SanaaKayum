import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Swiper from "react-id-swiper";
import { connect } from "react-redux";
import { getProducts } from "../../helpers/product";
import ProductGridSingle from "../../components/product/ProductGridSingle";
import { addToCart } from "../../redux/actions/cartActions";
import { addToWishlist } from "../../redux/actions/wishlistActions";
import { addToCompare } from "../../redux/actions/compareActions";
import Link from "next/link";
const slugify = require("@sindresorhus/slugify");

const HomePageProductSlider = ({
  swiperParams,
  products,
  currency,
  addToCart,
  userData,
  addToWishlist,
  addToCompare,
  cartItems,
  wishlistItems,
  compareItems,
  sliderClassName,
  spaceBottomClass
}) => {
  return (
    <Fragment>
      <Swiper {...swiperParams}>
        {products &&
          products.map(product => {
            return (
              <Link
                key={product.serialNumber}
                href={{
                  pathname: `/product/[pid]/[slug]`,
                  query: {
                    pid: product.serialNumber,
                    slug: slugify(product.description)
                  }
                }}
                passHref
              >
                <ProductGridSingle
                  sliderClassName={sliderClassName}
                  spaceBottomClass={spaceBottomClass}
                  product={product}
                  currency={currency}
                  addToCart={addToCart}
                  uID={userData.user.entryID}
                  addToWishlist={addToWishlist}
                  addToCompare={addToCompare}
                  cartItem={
                    cartItems
                      ? cartItems.filter(
                          cartItem =>
                            cartItem.serialNumber === product.serialNumber
                        )[0]
                      : ""
                  }
                  wishlistItem={
                    wishlistItems.filter(
                      wishlistItem =>
                        wishlistItem.serialNumber === product.serialNumber
                    )[0]
                  }
                  compareItem={
                    compareItems.filter(
                      compareItem =>
                        compareItem.serialNumber === product.serialNumber
                    )[0]
                  }
                  key={product.serialNumber}
                />
              </Link>
            );
          })}
      </Swiper>
    </Fragment>
  );
};

HomePageProductSlider.propTypes = {
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  cartItems: PropTypes.array,
  compareItems: PropTypes.array,
  currency: PropTypes.object,
  products: PropTypes.array,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  wishlistItems: PropTypes.array
};

const mapStateToProps = (state, ownProps) => {
  return {
    currency: state.currencyData,
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    compareItems: state.compareData,
    userData: state.userData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (
      item,
      addToast,
      uID,
      quantityCount,
      selectedProductColor,
      selectedProductSize
    ) => {
      dispatch(
        addToCart(
          item,
          addToast,
          uID,
          quantityCount,
          selectedProductColor,
          selectedProductSize
        )
      );
    },
    addToWishlist: (item, addToast, uID) => {
      dispatch(addToWishlist(item, addToast, uID));
    },
    addToCompare: (item, addToast) => {
      dispatch(addToCompare(item, addToast));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageProductSlider);
