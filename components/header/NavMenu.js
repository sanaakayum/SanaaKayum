import PropTypes from "prop-types";
import React from "react";


const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {
  return (
    <div
      className={` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } `}
    >
      <nav>
        <ul>
          <li>
            <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/"}>{"Home"}</a>
          </li>
          <li>
            <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/shop"}> {"Shop"}</a>
          </li>
          {/* Edit - only must-use comps
          <li>
            <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/shop-grid-standard"}>
              {strings["collection"]}
            </a>
          </li>*/}
          <li>
            <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/lookbook"}>{"Lookbook"}</a>
          </li>
          <li>
            <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/about"}>
              {"About Us"}
              {/* {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )} */}
            </a>
            {/* <ul className="submenu">
              <li>
                <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/cart"}>
                  {strings["cart"]}
                </a>
              </li>
              <li>
                <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/checkout"}>
                  {strings["checkout"]}
                </a>
              </li>
              <li>
                <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/wishlist"}>
                  {strings["wishlist"]}
                </a>
              </li>
              <li>
                <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/compare"}>
                  {strings["compare"]}
                </a>
              </li>
              <li>
                <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/my-account"}>
                  {strings["my_account"]}
                </a>
              </li>
              <li>
                <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/login-register"}>
                  {strings["login_register"]}
                </a>
              </li>
              <li>
                <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/about"}>
                  {strings["about_us"]}
                </a>
              </li>
              <li>
                <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/contact"}>
                  {strings["contact_us"]}
                </a>
              </li>
              <li>
                <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/not-found"}>
                  {strings["404_page"]}
                </a>
              </li>
            </ul> */}
          </li>
          {/* <li>
            <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/blog-standard"}>
              {strings["blog"]}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </a>
            <ul className="submenu">
              <li>
                <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/blog-standard"}>
                  {strings["blog_standard"]}
                </a>
              </li>
              <li>
                <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/sk"}>
                  {strings["blog_no_sidebar"]}
                </a>
              </li>
              <li>
                <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/blog-right-sidebar"}>
                  {strings["blog_right_sidebar"]}
                </a>
              </li>
              <li>
                <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/blog-details-standard"}>
                  {strings["blog_details_standard"]}
                </a>
              </li>
            </ul>
          </li> */}
          <li>
            <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/contact"}>{"Contact Us"}</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object
};

export default NavMenu;
