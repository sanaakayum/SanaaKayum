import PropTypes from "prop-types";
import React, { Fragment, useState, forwardRef } from "react";

import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../helpers/product";
import Rating from "./sub-components/ProductRating";
import ProductModal from "./ProductModal";
import { isSafari } from "react-device-detect";
import Link from "next/link";
import Image from "next/image";
const slugify = require("@sindresorhus/slugify");

const ProductGridSingle = forwardRef(({ onClick, href, ...props }, ref) => {
  const { uID } = props;
  const { product } = props;
  const { currency } = props;
  const { addToCart } = props;
  const { addToWishlist } = props;
  const { addToCompare } = props;
  const { cartItem } = props;
  const { wishlistItem } = props;
  const { compareItem } = props;
  const { sliderClassName } = props;
  const { spaceBottomClass } = props;
  const [modalShow, setModalShow] = useState(false);
  const { addToast } = useToasts();

  const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
  const finalDiscountedPrice = +(
    discountedPrice * currency.currencyRate
  ).toFixed(2);

  return (
    <Fragment>
      <div
        className={`col-xl-2 col-md-4 col-lg-3 col-sm-6 ${
          sliderClassName ? sliderClassName : ""
        }`}
      >
       
          <div
            className={`product-wrap ${
              spaceBottomClass ? spaceBottomClass : ""
            }`}
          >
            <div className="product-img">
            <Link
              key={product.serialNumber}
              href={{
                pathname: `/product/[pid]/[slug]`,
                query: {
                  pid: product.serialNumber,
                  slug: slugify(product.description)
                }
              }}
              
            >
              <a>
              <img
                className="default-img"
                src={
                  !isSafari
                    ? process.env.NEXT_PUBLIC_PUBLIC_URL +
                      product.images[0].fields.file.url
                    : process.env.NEXT_PUBLIC_PUBLIC_URL +
                      product.images[0].fields.file.url +
                      `?fm=jpg`
                }
                alt={product.collectionName}
                loading="lazy"
                title={
                  product.collectionName +
                  " " +
                  product.article +
                  " by Sana'a Kayum"
                }
              />
              
              {product.images.length > 1 ? (
                <img
                  className="hover-img"
                  src={
                    !isSafari
                      ? process.env.NEXT_PUBLIC_PUBLIC_URL +
                        product.images[1].fields.file.url
                      : process.env.NEXT_PUBLIC_PUBLIC_URL +
                        product.images[1].fields.file.url +
                        `?fm=jpg`
                  }
                  alt={product.collectionName}
                  loading="lazy"
                  title={
                    product.collectionName +
                    " " +
                    product.article +
                    " by Sana'a Kayum"
                  }
                />
               
              ) : (
                ""
              )}
              </a>
            </Link>
              <div className="product-action">
                <div className="pro-same-action pro-wishlist">
                  <button
                    aria-label="wishlist-add"
                    className={wishlistItem !== undefined ? "active" : ""}
                    disabled={wishlistItem !== undefined}
                    title={
                      wishlistItem !== undefined
                        ? "Added to wishlist"
                        : "Add to wishlist"
                    }
                    onClick={() => {
                      addToWishlist(product, addToast, uID);
                    }}
                  >
                    <i className="pe-7s-like" />
                  </button>
                </div>
                <div className="pro-same-action pro-cart">
                  {product.affiliateLink ? (
                    "Buy now "
                  ) : product.variation && product.variation.length >= 1 ? (
                    "Select Option"
                  ) : product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => {
                        addToCart(product, addToast, uID);
                      }}
                      className={
                        cartItem !== undefined && cartItem.quantity > 0
                          ? "active"
                          : ""
                      }
                      disabled={cartItem !== undefined && cartItem.quantity > 0}
                      title={
                        cartItem !== undefined ? "Added to cart" : "Add to cart"
                      }
                    >
                      {" "}
                      <i className="pe-7s-cart"></i>{" "}
                      {cartItem !== undefined && cartItem.quantity > 0
                        ? "Added"
                        : "Add to cart"}
                    </button>
                  ) : (
                    <button disabled className="active">
                      Out of Stock
                    </button>
                  )}
                </div>
                <div className="pro-same-action pro-quickview">
                  <button onClick={() => setModalShow(true)} title="Quick View">
                    <i className="pe-7s-look" />
                  </button>
                </div>
              </div>
            </div>
            {product.discount || product.new ? (
              <div className="product-img-badges">
                {product.discount ? (
                  <span className="pink">-{product.discount}%</span>
                ) : (
                  ""
                )}
                {product.new ? <span className="purple">New</span> : ""}
              </div>
            ) : (
              ""
            )}
            <div className="product-content text-center">
              <h3>
                <strong>{product.article}</strong>
                {" | "}

                {product.collectionName}
              </h3>
              {product.rating && product.rating > 0 ? (
                <div className="product-rating d-none">
                  <Rating ratingValue={product.rating} />
                </div>
              ) : (
                ""
              )}
              <div className="product-price">
                {discountedPrice !== null ? (
                  <Fragment>
                    {/* {/* <span>{currency.currencySymbol + finalDiscountedPrice}</span>{" "} */}
                    <span>{`AED ` + finalDiscountedPrice}</span>{" "}
                    <span className="old">
                      {/* {currency.currencySymbol + finalProductPrice} */}
                      {`AED `}
                      <strong> {finalProductPrice}</strong>
                    </span>
                  </Fragment>
                ) : (
                  // <span>{currency.currencySymbol + finalProductPrice} </span>
                  <span>
                    {`AED `}
                    <strong> {finalProductPrice}</strong>{" "}
                  </span>
                )}
              </div>
            </div>
          </div>
        
      </div>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        currency={currency}
        discountedprice={discountedPrice}
        finalproductprice={finalProductPrice}
        finaldiscountedprice={finalDiscountedPrice}
        cartitem={cartItem}
        wishlistitem={wishlistItem}
        compareitem={compareItem}
        uID={uID}
        addtocart={addToCart}
        addtowishlist={addToWishlist}
        addtocompare={addToCompare}
        addtoast={addToast}
      />
    </Fragment>
  );
})

ProductGridSingle.propTypes = {
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  cartItem: PropTypes.object,
  compareItem: PropTypes.object,
  currency: PropTypes.object,
  product: PropTypes.object,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  wishlistItem: PropTypes.object
};

export default ProductGridSingle;
