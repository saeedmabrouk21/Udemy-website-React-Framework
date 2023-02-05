import React, { useState } from "react";
import styles from "../../CSSmodules/Course/CourseReviews.module.css";

function Like() {
  const [liked,setliked]=useState(false);
    function activeliked(){
        setliked(!liked);
        if(disliked){
          setdisliked(!disliked);
        }
    }
    const [disliked,setdisliked]=useState(false);
    function activedisliked(){
        setdisliked(!disliked);
        if(liked){
          setliked(!liked);
        }
    }
  return (
    <>
     <button className={liked?styles.active:styles.inactive} onClick={activeliked}>
     <i className="far fa-thumbs-up"></i>
   </button>
    <button className={disliked?styles.active:styles.inactive} onClick={activedisliked}>
      <i className="far fa-thumbs-down"></i>
    </button>
    
   </>
  );
}

export default Like;
