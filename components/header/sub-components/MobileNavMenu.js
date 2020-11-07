import PropTypes from "prop-types";
import React, { useEffect, useState, Fragment } from "react";
import { useToasts } from "react-toast-notifications";
import { connect } from "react-redux";

import { useHistory } from "react-router-dom";
import { logoutUser } from "../../../redux/actions/userActions";
import clientMgr from "../../../constants/contentManager";
import { resetCart } from "../../../redux/actions/cartActions";
import { resetWishlist } from "../../../redux/actions/wishlistActions";
import { resetCompare } from "../../../redux/actions/compareActions";

const MobileNavMenu = ({
  userData,
  cartData,
  wishlistData,
  compareData,
  resetCart,
  resetCompare,
  resetWishlist,
  logoutUser
}) => {
  const initUname = (
    <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/login-register"}>Login</a>
  );
  const initInteraction = (
    <>
      <li className="menu-item-has-children">
        <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/login-register"}>
          Register
        </a>
      </li>
      
    </>
  );
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [uName, setUname] = useState(initUname);
  const [interaction, setInteraction] = useState(initInteraction);
  const { addToast } = useToasts();

  useEffect(() => {
    if (userData.user.firstName !== undefined) {
      setLoggedIn(true);

      setUname(
        <Fragment>
          <div className="row">{"Hello, " + userData.user.firstName}</div>
          <hr></hr>
        </Fragment>
      );

      setInteraction(
        <Fragment>
          <li
            onClick={() => {
              logoutUser(addToast);
              setLoggedIn(false);
              setUname(initUname);
              setInteraction(initInteraction);
              resetCompare();
              resetCart();
              resetWishlist();
            }}
          >
            <a 
              className="text-danger"
              href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/"}
            >
              Logout
            </a>
          </li>
        </Fragment>
      );
    }
  }, [userData.user, isLoggedIn]);

  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      {uName}

      <ul>
        <li className="menu-item-has-children">
          <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/"}>{"Home"}</a>
        </li>

        <li className="menu-item-has-children">
          <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/shop"}>{"Shop"}</a>
        </li>

        <li>
          <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/lookbook"}>
            {"Lookbook"}
          </a>
        </li>
        <li>
          <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/about"}>
            {"About Us"}
          </a>
        </li>

        <li>
          <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/contact"}>
            {"Contact Us"}
          </a>
        </li>
      </ul>
      <div className="account-dropdown">
        <ul>{interaction}</ul>
      </div>
    </nav>
  );
};

MobileNavMenu.propTypes = {
  cartData: PropTypes.array,
  compareData: PropTypes.array,
  logoutUser: PropTypes.func,
  wishlistData: PropTypes.array
};

const mapStateToProps = state => {
  return {
    cartData: state.cartData,
    wishlistData: state.wishlistData,
    compareData: state.compareData,
    userData: state.userData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: addToast => {
      dispatch(logoutUser(addToast));
    },
    resetCart: () => {
      dispatch(resetCart());
    },
    resetCompare: () => {
      dispatch(resetCompare());
    },
    resetWishlist: () => {
      dispatch(resetWishlist());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileNavMenu);
