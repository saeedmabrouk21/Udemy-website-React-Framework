import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseNavBar from "../components/Course/CourseNavBar";
import styles from "../CSSmodules/Course/CoursePage.module.css";
import CourseInfo from "../components/Course/CourseInfo";
import CourseContent from "../components/Course/CourseContent";
import { CourseProvider } from "../contexts/courseContext";
import Overview from "../components/Course/Overview";
import CourseRequirements from "../components/Course/CourseRequirements";
import CourseDescription from "../components/Course/CourseDescription";
import CourseInstructors from "../components/Course/CourseInstructors";
import CourseFeedback from "../components/Course/CourseFeedback";
import CourseReviews from "../components/Course/CourseReviews";
import RightCard from "../components/Course/RightCard";
import Footer from "../components/Course/Footer";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function CoursePage() {
  const [json, setJson] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3001/courses/?courseId=${id}`)
      .then((response) => response.json())
      .then((json) => {
        setJson(json);
      });
  }, []);
  if (!json) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <CourseProvider value={json}>
    <div className={styles.nav}>
      <CourseNavBar></CourseNavBar>
    </div>
    <div className={styles.parent}>
      <div className={styles.rightcard}>
        <RightCard></RightCard>
      </div>
      <div className={styles.info}>
        <CourseInfo></CourseInfo>
      </div>
      <div className={styles.pageBody}>
        <Overview></Overview>
        <div>
          <CourseContent></CourseContent>
          <CourseRequirements></CourseRequirements>
          <CourseDescription></CourseDescription>
          <CourseInstructors></CourseInstructors>
          <CourseFeedback></CourseFeedback>
          <CourseReviews></CourseReviews>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </CourseProvider>

  );
}

export default memo(CoursePage);
