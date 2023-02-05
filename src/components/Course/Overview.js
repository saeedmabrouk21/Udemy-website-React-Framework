import React,{useContext} from 'react'
import { courseContext } from "../../contexts/courseContext";
import styles from "../../CSSmodules/Course/Overview.module.css"
function Overview() {
    let data = useContext(courseContext);

  return (
    <div className={styles.overview}>
    <div className={styles.title}>What you'll learn</div>
    
    {[...data.overview].map((x,ix)=> <div className={styles.notes}key={ix}><i className="fa fa-check" style={{fontSize:'15px'}}></i> {x}</div>)}
    </div>
  )
}

export default Overview