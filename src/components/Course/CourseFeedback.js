import React, { useContext } from "react";
import { courseContext } from "../../contexts/courseContext";
import Rating from "@mui/material/Rating";
import styles from "../../CSSmodules/Course/CurseFeedback.module.css";
import LinearProgress from "./LinearProgress";

function CourseFeedback() {
  let data = useContext(courseContext);

  return (
    <>
      <div className={styles.title}>Student feedback</div>
      <div className={styles.content}>
        <div>
          <div className={styles.courseRate}>{data.rate}</div>
          <div>
            <Rating
              name="half-rating-read"
              defaultValue={data.rate}
              precision={0.5}
              readOnly
              size="large"
            />
          </div>
          <div style={{ color: "#b4690e" }}>Course Rating</div>
        </div>

        <div className={styles.Linear}>
          <LinearProgress ></LinearProgress>
        </div>

        
      </div>
    </>
  );
}

export default CourseFeedback;
