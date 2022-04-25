import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

const ViewArticles = () => {
  const loc = useLocation();
  console.log(loc);
  return (
    <>
      <Navbar data={loc} />
      <p>hellou!!</p>
    </>
  );
};

export default ViewArticles;
