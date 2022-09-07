import React, { useContext } from "react";
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
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
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

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    console.log(panel);
    setExpanded(isExpanded ? panel : false);
  };
  const ExpandAll = () => {
    [...data.content].forEach((_, ix) => {
      console.log(`panel${ix}`);
      setExpanded(false);
    });
  };
  return (
    <>
      <div className={styles.title}>Course Content</div>
      <div className={styles.content}>
      <div>
        {data.sectionsCount} sections . {data.lecturesCount} lectures.{" "}
        {data.totalLength} total Length
      </div>
      </div>
      <button onClick={ExpandAll} className={styles.expand}>Expand all Sections</button>
      <br />
      {[...data.content].map((x, ix) => {
        return (
          <Accordion
            onChange={handleChange(`panel${ix}`)}
            sx={{ width: "100%" }}
            key={ix}
          >
            <AccordionSummary
              aria-controls={`panel${ix}d-content`}
              id={`panel${ix}bh-header`}
            >
              <Typography sx={{ width: "80%", flexShrink: 0 }}>
                {x[0]}
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
      {/* <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{width :'100%'}}>
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '80%', flexShrink: 0 }}>
            Up and Running With Python
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>2 Lectures . 6min</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    
       
    </div> */}
    </>
  );
}

export default CourseContent;
