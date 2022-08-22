import React from "react";
import styles from "./Card.module.css";



function Card(obj) {
  console.log(obj.json);
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


          
          <span className={[styles.checked, "fa fa-star"].join(" ")} ></span>
          
          <span className={[styles.checked, "fa fa-star"].join(" ")} ></span>
          <span className={[styles.checked, "fa fa-star"].join(" ")} ></span>
          <span className={[styles.checked, "fa fa-star"].join(" ")} ></span>
          <span className={[styles.checked, "fa fa-star-half-full"].join(" ")} ></span>
          <span className={styles.grey}>({obj.json.people})</span>
        </div>
        <h5>E£{obj.json.price}</h5>
      </a>
    </article>
  );
}

export default Card;
