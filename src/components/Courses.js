import React from "react";
import Card from "./Card";
import styles from "./Courses.module.css";
const renderCards = (JSON) => {
  let view = JSON.map((jj) => {
    return <Card json={jj} key={jj.id}></Card>;
  });
  return view;
};
function Courses(obj) {
  return (
    <>
      <h2 className={styles.marginrl}>{obj.jsonTrack.header}</h2>
      <p className={styles.marginrl}>{obj.jsonTrack.description}</p>
      <div className={styles.suggestions}>
        {renderCards(obj.jsonTrack.courses)}
      </div>
    </>
  );
}

export default Courses;
