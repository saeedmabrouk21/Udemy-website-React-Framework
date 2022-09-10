import React, { useContext } from "react";
import { courseContext } from "../../contexts/courseContext";
import Rating from "@mui/material/Rating";

import styles from "../../CSSmodules/Course/LinearProgress.module.css";
function LinearProgress() {
  let data = useContext(courseContext);
  return (
    <>
      {[...data.studentFeedback].map((x, ix) => {
        return (
          <div className={styles.tab} key={ix}>
            <div className={styles.progress}>
              <div className={styles.progressactual} style={{width:`${x}%`}}>-</div>
            </div>
            <div>
              <Rating
                name="half-rating-read"
                defaultValue={5 - ix}
                precision={0.5}
                readOnly
                size="medium"
              />
              <span className={styles.rate}>{x}%</span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default LinearProgress;
