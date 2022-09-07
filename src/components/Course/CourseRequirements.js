import React, { useContext } from "react";
import { courseContext } from "../../contexts/courseContext";

function CourseRequirements() {
  let data = useContext(courseContext);
  return (
    <div>
      <div>Requirements</div>

      {[...data.requirements].map((x, ix) => (
        <div key={ix}>• {x}</div>
      ))}
    </div>
  );
}

export default CourseRequirements;
