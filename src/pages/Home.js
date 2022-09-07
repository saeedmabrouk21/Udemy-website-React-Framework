import Courses from "../components/Home/Courses";
import NewFeatures from "../components/Home/NewFeatures";


function Home() {

  return (
    <>
      <NewFeatures></NewFeatures>

      <Courses jsonTrack={'python'}></Courses>
    </>
  );
}

export default Home;
