import React from 'react'
import { useParams } from 'react-router-dom';
import pythonJson from "../data/python_res.json";

function CoursePage() {
   
    let { titlle } = useParams();
    let courses=pythonJson.courses
    let json;
    console.log(courses);
    json=courses.find(x => x['title']===titlle);
  return (
    
    <>
    <div>CoursePage {titlle}</div>
    <div>CoursePage saeed </div>
    <div>CoursePage</div>
    </>
  )
}

export default CoursePage