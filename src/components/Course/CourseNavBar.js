import React, { useContext } from "react";
import { courseContext } from "../../contexts/courseContext";
import { Link } from "react-router-dom";
import styles from "../../CSSmodules/Course/CourseNavBar.module.css"

function CourseNavBar() {
  let data = useContext(courseContext);
;
  return (
    <div>
      <div className={styles.title}>{data.title}</div>
      <span className={styles.rate}>{data.rate}</span>
      <span className={["fa fa-star",styles.star].join(' ')}></span>
      <Link to="/home"><span className={styles.ratestudent}>({data.ratingCount} ratings)</span></Link>
      <span className={styles.ratestudent}> {data.enrollCount} students</span>
    </div>
  );
}

export default CourseNavBar;
