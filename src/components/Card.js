import React from "react";
import styles from "./Card.module.css";

function adjustStars(rating) {
  const FullStar = () => (
    <span className={[styles.checked, "fa fa-star"].join(" ")}></span>
  );
  const HalfStar = (
    <span className={[styles.checked, "fa fa-star-half-full"].join(" ")}></span>
  );
  const NoStar = () => (
    <span className={[styles.checked, "fa fa-star-o"].join(" ")}></span>
  );

  let whole = Math.trunc(rating);
  let emptyStars = 5 - whole - 1;
  let remainder = rating - whole;
  return (
    <>
    {[...Array(whole)].map((_,ix) => <FullStar key={ix} />)}
  {remainder > 0 && remainder < 0.3? <NoStar /> : remainder < 0.8 ? HalfStar : <FullStar />} 
  {[...Array(emptyStars)].map((_,ix) => <NoStar key={ix} />)}
      
    </>
  );

}

function Card({json}) {
    return (
    <article>
      <a className={styles.course} href={"#"}>
        <img src={json.image} alt="pyhon" />
        <h3>{json.title}</h3>
        <h4 className={styles.grey}>
          {json.instructors.map((y) => y["name"]).toString()}
        </h4>
        <div>
          <span className={styles.rating}>{json.rating.toFixed(2)}</span>
          {adjustStars(json.rating.toFixed(2))}
          <span className={styles.grey}>({json.people})</span>
        </div>
        <h5>E£{json.price}</h5>
      </a>
    </article>
  );
}

export default Card;
