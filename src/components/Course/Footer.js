import React from "react";
import Button from "@mui/material/Button";
import styles from "../../CSSmodules/Course/Footer.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.firstsection}>
        <div className={styles.sponser}>
          Top companies choose Udemy Business to build in-demand career skills.
        </div>
        <div>
          <img
            alt="Nasdaq"
            height="44"
            width="115"
            src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
          ></img>
          <img
            alt="Volkswagen"
            height="44"
            width="44"
            src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
          ></img>
          <img
            alt="Box"
            height="44"
            width="67"
            src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
          ></img>
          <img
            alt="NetApp"
            height="44"
            width="115"
            src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
          ></img>
          <img
            alt="Eventbrite"
            height="44"
            width="115"
            src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
          ></img>
        </div>
      </div>
      <div className={styles.secondsection}>
        <div>
          <Button variant="outlined">English</Button>
        </div>
        <div className={styles.buttons}>
          <Button variant="text">Udemy Business</Button>
          <Button variant="text">Teach on Udemy</Button>
          <Button variant="text">Get the app</Button>
          <Button variant="text">About Us</Button>
          <Button variant="text">Contact us</Button>
          <Button variant="text">Careers</Button>
          <Button variant="text">Blog</Button>
          <Button variant="text">Help and Support</Button>
          <Button variant="text">Affilieate</Button>
          <Button variant="text">Investors</Button>
          <Button variant="text">Terms</Button>
          <Button variant="text">Privacy policy</Button>
          <Button variant="text">Cookie settings</Button>
          <Button variant="text">sitemap</Button>
          <Button variant="text">Accessibility statement</Button>
        </div>
      </div>
      <div className={styles.thirdsection}>
        <div>
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
            alt="Udemy"
            width="91.07142857142857"
            height="34"
          />
        </div>
        <div>© 2022 Udemy, Inc.</div>
      </div>
    </div>
  );
}

export default Footer;
