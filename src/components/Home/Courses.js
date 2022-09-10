import React, { useState, useEffect } from "react";
import Card from "./Card";
import styles from "../../CSSmodules/Home/Courses.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import AntTab, { AntTabs } from "./AntTab";
import Box from "@mui/material/Box";
const map = {
  0: "Python",
  1: "excel",
  2: "web",
  3: "js",
  4: "data",
  5: "aws",
  6: "draw",
};
function Courses(obj) {
  //tabs and navs
  const [trackName, setTrackName] = useState({
    name: obj.jsonTrack,
    value: 0,
  });
  const [json, setJson] = useState(null);
  const handleChange = (event, newValue) => {
    setTrackName({ name: map[newValue], value: newValue });
  };
  useEffect(() => {
    fetch(`http://localhost:3001/home/?trackName=${trackName.name}`)
      .then((response) => response.json())
      .then((json) => {
        setJson(json);
      });
  }, [trackName]);

  //searching using includes
  const byTitle = (title) => (book) =>
    book.title.toLowerCase().includes((title || "").toLowerCase());

  if (json) {
    return (
      <>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ bgcolor: "#fff" }}>
            <AntTabs
              value={trackName.value}
              onChange={handleChange}
              aria-label="ant example"
            >
              <AntTab label="Python" className={styles.tab} />
              <AntTab label="Excel" className={styles.tab} />
              <AntTab label="Web development" className={styles.tab} />
              <AntTab label="Java script" className={styles.tab} />
              <AntTab label="Data science" className={styles.tab} />
              <AntTab label="Aws certificaiton" className={styles.tab} />
              <AntTab label="Drawing" className={styles.tab} />
            </AntTabs>
          </Box>
        </Box>
        <div className={styles.content}>
          <h2>{json.header}</h2>
          <p>{json.description}</p>
          <div className={styles.suggestions}>
            {json.courses
              .filter(byTitle(obj.search.get("search")))
              .map((jj) => {
                return <Card json={jj} key={jj.id}></Card>;
              })}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }
}

export default Courses;
