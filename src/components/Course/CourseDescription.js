import React, { useContext, useState } from "react";
import { courseContext } from "../../contexts/courseContext";
import ShowMoreText from "react-show-more-text";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

function CourseDescription() {
  const [expand, setExpand] = useState(false);
  const onClick = () => {
    setExpand(!expand);
  };
  const text = "Some Long Text Sample Ohhhhhhhhhh";
  let data = useContext(courseContext);
  return (
    <div>
      <div className="App">
        <br />
      </div>
      <div>Description</div>

      {[...data.description].map((x, ix) => (
        <div key={ix}>• {x}</div>
      ))}

      <div>Who This course is for:</div>
      <p>{data.whoFor}</p>
    </div>
  );
}

export default CourseDescription;
