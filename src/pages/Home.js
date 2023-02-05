import Courses from "../components/Home/Courses";
import NewFeatures from "../components/Home/NewFeatures";
import styles from "../CSSmodules/Home/Home.module.css";

function Home({search}) {
  return (
    <div className={styles.home}>
      <NewFeatures></NewFeatures>
      <h2 className={styles.broad}>A broad selection of courses</h2>
      <h3 className={styles.choose}>
        Choose from 204,000 online video courses with new additions published
        every month
      </h3>
      <Courses jsonTrack={"python"} search={search}></Courses>
    </div>
  );
}

export default Home;
