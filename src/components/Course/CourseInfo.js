import React, { useContext } from "react";
import { courseContext } from "../../contexts/courseContext";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import styles from "../../CSSmodules/Course/CourseInfo.module.css";
function CourseInfo() {
  let data = useContext(courseContext);

  return (
    <div className={styles.info}>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.par}>{data.Introduction}</p>
      <br></br>
      <span>{data.rate}</span>
        <Rating
          name="half-rating-read"
          defaultValue={data.rate}
          precision={0.5}
          readOnly
          size="small"
        />
      <Link to="/home">({data.ratingCount} ratings)</Link>
      <span style={{ textAlign: "left" }}> {data.enrollCount} students</span>
      <div>Created By {data.instructor.name}</div>
      <br />
      <div className={styles.lastline}>
        <div>
          <i className="material-icons" style={{ fontSize: "15px",margin:"0" }}>
            info_outline
          </i>
          <span> Last Updated {data.lastUpdate}</span>
        </div>
        <div>
          <span className="glyphicon glyphicon-subtitles"></span>
          <span> English</span>
        </div>
        <div>
          <i className="fa fa-globe" style={{ fontSize: "15px",margin:"0" }}></i>
          <span> English</span>
        </div>
      </div>
    </div>
  );
}

export default CourseInfo;
