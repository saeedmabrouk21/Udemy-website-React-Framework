import React, { useContext,useState } from "react";
import { courseContext } from "../../contexts/courseContext";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

import Typography from "@mui/material/Typography";
import styles from "../../CSSmodules/Course/CourseContent.module.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function CourseContent() {
  let data = useContext(courseContext);
  const [Expanded, setExpanded] = useState(true);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded  ? panel  : false);
  };
  const expandAll = ()=>{
    setExpanded(Expanded==='allPanels'?false:'allPanels')
  }

  return (
    <>
      <div className={styles.title}>Course Content</div>
      <div className={styles.content}>
        <div>
          {data.sectionsCount} sections . {data.lecturesCount} lectures.{" "}
          {data.totalLength} total Length
        </div>
        <button onClick={expandAll} className={styles.expand}>{Expanded==='allPanels'?"collapse":"Expand"} all Sections</button>
      </div>
      <br />
      {[...data.content].map((x, ix) => {
        return (
          <Accordion expanded={Expanded === `panel${ix}` ||Expanded === `allPanels`} onChange={handleChange(`panel${ix}`)} sx={{ width: "100%" }} key={ix}>
            <AccordionSummary
              aria-controls={`panel${ix}d-content`}
              id={`panel${ix}bh-header`}
            >
              <Typography sx={{ width: "80%", flexShrink: 0 }}>
                <span className={styles.lessontitle}>{x[0]}</span>
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {x[1].length} Lectures . {x[1].length * 3}Minutes
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {[...x[1]].map((y, iy) => {
                return <Typography key={iy}>{y}</Typography>;
              })}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
}

export default CourseContent;
