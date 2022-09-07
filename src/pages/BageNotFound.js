import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function BageNotFound() {
  return (
    <div style={{color:'blue',textAlign:"center"}}>
      <img src="https://s.udemycdn.com/error_page/error-desktop-v1.jpg" alt="Page Not found 404 error" />
      <h1>We can’t find the page you’re looking for</h1>
      <br></br>
      <Link to="/home">
        <Button variant="contained">Home</Button>
      </Link>
    </div>
  );
}

export default BageNotFound;
