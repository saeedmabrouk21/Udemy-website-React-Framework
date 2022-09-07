import React, { useContext } from "react";
import { courseContext } from "../../contexts/courseContext";
import styles from "../../CSSmodules/Course/RightCard.module.css";

function RightCard() {
  let data = useContext(courseContext);

  return (
    <>
    <img src={data.image} alt={data.title} className={styles.img} />

    <div className={styles.wholeCard}>
      
      <div className={styles.about}>
        <div></div>
        <div className={styles.price}>E£{data.originalPrice}</div>

        <button className={styles.gotocart}>Go to cart</button>

        <button className={styles.buynow}>Buy now</button>

        <div>30-Day Money-Back Guarantee</div>
        <div>This Course includes:</div>
        <div>
          <span></span>
          <span>14 hours on-demand video</span>
        </div>
        <div>
          <span></span>
          <span>1 article</span>
        </div>
        <div>
          <span></span>
          <span>3 downloadable resources</span>
        </div>
        <div>
          <span></span>
          <span>Full lifetime access</span>
        </div>
        <div>
          <span></span>
          <span>Access on mobile and TV</span>
        </div>
        <div>
          <span></span>
          <span>Certificate of completion</span>
        </div>
        <div>
          <button className={styles.sharegiftapply}>Share</button>
          <button className={styles.sharegiftapply}>Gift the course</button>
          <button className={styles.sharegiftapply}>Apply coupon</button>
        </div>
        <hr />
        <div>Training 5 or more people?</div>
        <p>
          Get your team access to 17,000+ top Udemy courses anytime, anywhere.
        </p>
        <button className={styles.buynow}>Try Udemy Business</button>
      </div>
    </div>
    </>
  );
}

export default RightCard;
