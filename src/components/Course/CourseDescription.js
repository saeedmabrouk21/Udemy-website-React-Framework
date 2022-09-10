import React, { useContext, useState } from "react";
import { courseContext } from "../../contexts/courseContext";
import styles from "../../CSSmodules/Course/CourseDescription.module.css";
import ShowMoreText from "react-show-more-text";
function CourseDescription() {
  const [expand, setExpand] = useState(false);
  const onClick = () => {
    setExpand(!expand);
  };
  const text =
    "Some Long Text Sample O313131313131313131313131313131hhhhhhhhhh";
  let data = useContext(courseContext);
  return (
    <div>
      <div className="App">
        <br />
      </div>
      <div className={styles.title}>Description</div>
      {/* <ShowMoreText
        lines={5}
        more="Show more"
        less="...Show less"
        anchorClass="oooeeer"
        onClick={this.executeOnClick}
        expanded={false}
        width={0}
      >
        {text}
        {[...data.description].map((x, ix) => (
          <div key={ix}>• {x}</div>
        ))}
      </ShowMoreText> */}
      
      <div>Who This course is for:</div>
      <p>{data.whoFor}</p>
    </div>
  );
}

export default CourseDescription;
