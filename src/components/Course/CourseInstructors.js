import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { courseContext } from "../../contexts/courseContext";
import styles from "../../CSSmodules/Course/CourseInstructors.module.css"
function CourseInstructors() {
    const { instructor } = useContext(courseContext);

  return (
    <div>
      <div className={styles.title}>Instructors</div>
      <Link to="/home"> {instructor.name}</Link>
      <p>{instructor.Intro}</p>
      <div className={styles.imgandnumbers}>
        <span><img className={styles.insImg}src={instructor.Image} alt={instructor.name}/></span>
        <span className={styles.numbers}>
            <div>{instructor.Rating} Instructor Rating</div>
            <div>{instructor.reviewsNumber} Reviews</div>
            <div>{instructor.studentsNumber} Students</div>
            <div>{instructor.coursesNumber} Courses</div>
        </span>
      </div>
      <p>{instructor.description}</p>
    </div>
  );
}

export default CourseInstructors;
