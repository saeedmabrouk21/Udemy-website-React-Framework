import React from "react";
import styles from "./Card.module.css";

function adjustStars(rating) {
  const fullStar = (
    <span className={[styles.checked, "fa fa-star"].join(" ")}></span>
  );
  const halfStar = (
    <span className={[styles.checked, "fa fa-star-half-full"].join(" ")}></span>
  );
  const noStar = (
    <span className={[styles.checked, "fa fa-star-o"].join(" ")}></span>
  );

  let whole = Math.trunc(rating);
  let emptyStars = 5 - whole - 1;
  let remainder = rating - whole;
  return (
    <>
      {--whole >= 0 ? fullStar : ""}
      {--whole >= 0 ? fullStar : ""}
      {--whole >= 0 ? fullStar : ""}
      {--whole >= 0 ? fullStar : ""}
      {--whole >= 0 ? fullStar : ""}
      {remainder >= 0.3 && remainder < 0.8
        ? halfStar
        : remainder < 0.3
        ? noStar
        : fullStar}
      {--emptyStars >= 0 ? noStar : ""}
      {--emptyStars >= 0 ? noStar : ""}
      {--emptyStars >= 0 ? noStar : ""}
      {--emptyStars >= 0 ? noStar : ""}
    </>
  );

}

function Card(obj) {
    return (
    <article>
      <a className={styles.course} href={"#"}>
        <img src={obj.json.image} alt="pyhon" />
        <h3>{obj.json.title}</h3>
        <h4 className={styles.grey}>
          {obj.json.instructors.map((y) => y["name"]).toString()}
        </h4>
        <div>
          <span className={styles.rating}>{obj.json.rating.toFixed(2)}</span>
          {adjustStars(obj.json.rating.toFixed(2))}
          <span className={styles.grey}>({obj.json.people})</span>
        </div>
        <h5>E£{obj.json.price}</h5>
      </a>
    </article>
  );
}

export default Card;
