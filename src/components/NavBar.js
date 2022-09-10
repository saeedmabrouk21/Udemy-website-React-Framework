import React from "react";
import { Link }from "react-router-dom";
import styles from "../CSSmodules/NavBar.module.css";

function NavBar({ setSearch }) {

  function handleChange(event) {
    setSearch ({search:event.target.value})
  }
  return (
    <>
      <ul className={styles.navigationBar}>
        <li className={styles.menu}>
          <button className={[styles.noborder].join(" ")}>
            <i className="fa fa-align-justify"></i>
          </button>
        </li>
        <li>
          <Link to={"/"}>
            <img
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
              alt="Udemy logo"
              className={styles.logo}
            />
          </Link>
        </li>
        <li className={styles.menuItem}>
          <button type="button" className={[styles.noborder].join(" ")}>
            Catorgries
          </button>
        </li>
        {/* search */}
        <li
          className={[
            styles.menuItem,
            styles.searchBar,
            styles.smallSpace,
          ].join(" ")}
        >
          <form>
            <button
              type="button"
              className={styles.noborder}
            >
              <i className="glyphicon glyphicon-search"></i>
            </button>
            <input
              id="searchInput"
              placeholder="Search for anything"
              className={styles.noborder}
              name="SearchFilter"
              onChange={handleChange}
              required
            />
          </form>
        </li>
        <li className={styles.menuItemItem}>
          <button type="button" className={[styles.noborder].join(" ")}>
            Udemy Business
          </button>
        </li>

        <li className={styles.menuItem}>
          <button
            type="button"
            className={[styles.noborder, styles.teachonudemy].join(" ")}
          >
            Teach on Udemy
          </button>
        </li>

        <li className={styles.shoppingcart}>
          <button type="button" className={[styles.noborder].join(" ")}>
            <i className="material-icons">shopping_cart</i>
          </button>
        </li>

        <li className={styles.menuItem}>
          <button type="button" style={{ width: "8rem" }}>
            Log in
          </button>
        </li>
        <li className={styles.menuItem}>
          <button
            type="button"
            className={[styles.signup].join(" ")}
            style={{ backgroundColor: "black", width: "8rem" }}
          >
            Sign up
          </button>
        </li>
        <li className={styles.menuItem}>
          <button style={{ marginRight: "2rem" }}>
            <i className="fa fa-globe" style={{ padding: "0rem" }}></i>
          </button>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
