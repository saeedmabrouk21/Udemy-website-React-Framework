import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import styles from "../../CSSmodules/Home/NewFeatures.module.css";
function NewFeatures() {
  // let  title, header, url  ;
  const [feature, setfeature] = useState(null);
  
  useEffect(() => {
    fetch('http://localhost:3001/home/?trackName=features')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setfeature(json);
        //  { title, header, url } = feature[];
      });
  }, []);
  if (feature) {
    return (
      <>
        <header className={styles.headContiner}>
          <img src={feature[Math.floor(Math.random() * feature.length)].url} alt="alarm" className={styles.FeaturePhoto} />
          <div className={styles.headpar}>
            <h1 className={styles.strong}>{feature[Math.floor(Math.random() * feature.length)].title}</h1>
            <h2 className={styles.h6}>{feature[Math.floor(Math.random() * feature.length)].header}</h2>
          </div>
        </header>
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

export default NewFeatures;
