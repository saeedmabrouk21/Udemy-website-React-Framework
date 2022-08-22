import React from "react";
import Card from "./Card";
import styles from "./Courses.module.css"
function Courses(obj) {
    console.log(obj.jsonTrack);
  return (
    <div className={styles.suggestions}>
     <Card json={obj.jsonTrack.courses[0]}></Card>
     <Card json={obj.jsonTrack.courses[1]}></Card>
     <Card json={obj.jsonTrack.courses[2]}></Card>
     <Card json={obj.jsonTrack.courses[3]}></Card>
     <Card json={obj.jsonTrack.courses[4]}></Card>
     </div>
  )
}

export default Courses;
