import React, { useContext } from "react";
import { courseContext } from "../../contexts/courseContext";
import styles from "../../CSSmodules/Course/CourseRequirements.module.css"
function CourseRequirements() {
  let data = useContext(courseContext);
  return (
    <div>
      <div className={styles.title}>Requirements</div>

      {[...data.requirements].map((x, ix) => (
        <div key={ix}>• {x}</div>
      ))}
    </div>
  );
}

export default CourseRequirements;
