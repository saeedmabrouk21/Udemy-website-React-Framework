import React, { useContext } from "react";
import { courseContext } from "../../contexts/courseContext";
import styles from "../../CSSmodules/Course/CourseReviews.module.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Rating from "@mui/material/Rating";
import Like from "./Like";
import Dislike from "./Like";

function CourseReviews() {
  let data = useContext(courseContext);

  return (
    <>
      <div>Reviews</div>
      <div className={styles.reviewsection}>
        <form className={styles.Form}>
          <input placeholder="Search Reviews"></input>
          <button>
            {" "}
            <i className="glyphicon glyphicon-search"></i>
          </button>
        </form>
        <Autocomplete
          id="disabled-options-demo"
          options={[
            "One star",
            "two star",
            "three star",
            "four star",
            "five star",
          ]}
          className={styles.autocomplete}
          sx={{ width: 100 }}
          renderInput={(params) => (
            <TextField {...params} label="All ratings" />
          )}
        />
      </div>
      {[...data.reviews].map((x, ix) => {
        return (
          <div className={styles.comment} key={x.id}>
            <div className={styles.avatar}>{[x.name[0], x.name[1]]}</div>
            <div className={styles.commentcontent}>
              <div>{x.name}</div>
              <div>
                {
                  <Rating
                    name="half-rating-read"
                    defaultValue={x.rate}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                }
                a waeak ago
              </div>
              <div>{x.content}</div>
              <div>was this review helpful?</div>
              <div className={styles.feedback}>
                <Like></Like>
                <span> Report</span>
              </div>
            </div>{" "}
          </div>
        );
      })}
    </>
  );
}

export default CourseReviews;
