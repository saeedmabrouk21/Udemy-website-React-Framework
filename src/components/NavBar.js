import React from "react";
import { Link } from "react-router-dom";
import styles from "../CSSmodules/NavBar.module.css";

function NavBar() {
  return (
    <>
      <ul className={styles.navigationBar}>
        <li>
          <button className={[styles.menu, styles.noborder].join(" ")}>
            <i className="fa fa-align-justify"></i>
          </button>
        </li>
        <li>
          <Link to={"/home"}>
            <img
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
              alt="Udemy logo"
              className={styles.logo}
            />
          </Link>
        </li>
        <li>
          <button
            type="button"
            className={[styles.noborder, styles.menuItem].join(" ")}
          >
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
            
            <button type="submit" className={styles.noborder}>
              <i className="glyphicon glyphicon-search"></i>
            </button>
            <input
              id="searchInput"
              // onKeyUp={addCards(this.value)}
              placeholder="Search for anything"
              // onBlur={this.value='';addCards('')}
              className={styles.noborder}
              required
            />
          </form>
        </li>
        <li>
          <button
            type="button"
            className={[styles.noborder, styles.menuItemItem].join(" ")}
          >
            Udemy Business
          </button>
        </li>

        <li>
          <button
            type="button"
            className={[styles.noborder, styles.menuItem].join(" ")}
          >
            Teach on Udemy
          </button>
        </li>

        <li>
          <button className={styles.noborder}>
            <i className="material-icons">shopping_cart</i>
          </button>
        </li>

        <li>
          <button
            type="button"
            className={styles.menuItem}
            style={{  width: "8rem" }}
          >
            Log in
          </button>
        </li>
        <li>
          <button
            type="button"
            className={[styles.signup, styles.menuItem].join(" ")}
            style={{ backgroundColor: "black", width: "8rem" }}
          >
            Sign up
          </button>
        </li>
        <li>
          <button className={styles.menuItem} style={{ marginRight: "2rem" }}>
            <i className="fa fa-globe" style={{ padding: "0rem" }}></i>
          </button>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
