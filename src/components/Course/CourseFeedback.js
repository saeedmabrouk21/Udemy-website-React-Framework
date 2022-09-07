import React, { useContext, useState, useEffect } from "react";
import { courseContext } from "../../contexts/courseContext";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import styles from "../../CSSmodules/Course/CurseFeedback.module.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#6a6f73',
      contrastText: '#fff',
    },
  },
});

function LinearProgressWithLabel(props) {
  return (
    <Box>
      <ThemeProvider theme={theme}>
      <Box sx={{ width: "80%", mr: 1 }}>
        <LinearProgress color="neutral" variant="determinate" {...props} />
      </Box>
      </ThemeProvider>
      <Box sx={{ minWidth: 35 ,minHeight:"2rem",color:"#fff" }}>
       <Typography>s</Typography>
      </Box>
    </Box>
  );
}

function CourseFeedback() {
  let data = useContext(courseContext);
  const [progress, setProgress] = React.useState(10);
  React.useEffect(() => {
    setProgress((prevProgress) =>
      prevProgress >= 100 ? 10 : prevProgress + 10
    );
  }, []);
  return (
    <>
      <div>Student feedback</div>
      <div className={styles.content}>
        <div>
          <div>{data.rate}</div>
          <div>
            <Rating
              name="half-rating-read"
              defaultValue={data.rate}
              precision={0.5}
              readOnly
              size="large"
            />
          </div>
          <div>Course Rating</div>
        </div>
        <div className={styles.linear}>
          {[...data.studentFeedback].map((x, ix) => {
            return (
              <>
              {/* <p>a</p> */}
              <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={x} />
    </Box>
                {/* <LinearProgress
                  key={ix}
                  variant="determinate"
                  value={x}
                  style={{ display: "block" }}
                  className={styles.linearprogress}
                /> */}
              </>
            );
          })}
        </div>

        <div>
          {[...data.studentFeedback].map((x, ix) => {
            return (
              <div key={ix}>
                <Rating
                  name="half-rating-read"
                  defaultValue={5 - ix}
                  precision={0.5}
                  readOnly
                  size="large"
                />
                <span>{x}%</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CourseFeedback;
