import React from "react";
import styles from "../../CSSmodules/Home/Card.module.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

function Card({ json }) {
  // console.log(ratingI);
  // console.log(json.id)
  return (
    
    <Link to={`/course/${json.id}`} className={styles.wholeCard}>
      <article>
        <div className={styles.imgBackground}>
          <img src={json.image} className={styles.CourseImg} alt="pyhon" />
        </div>
        <h3 className={styles.title}>{json.title}</h3>
        <h4 className={styles.grey}>
          {json.instructors.map((y) => y["name"]).toString()}
        </h4>
        <div>
          <span className={styles.rating}>{json.rating.toFixed(2)}</span>
          <Rating
            name="half-rating-read"
            defaultValue={json.rating}
            precision={0.5}
            readOnly
            size="small"
          />
          <span className={styles.grey}>({json.people})</span>
        </div>
        <h5>E£{json.price}</h5>
      </article>
    </Link>
  );
}

export default Card;
