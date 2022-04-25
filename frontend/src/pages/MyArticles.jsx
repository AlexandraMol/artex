import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
const MyArticles = () => {
  const loc = useLocation();
  console.log(loc);
  return (
    <>
      <Navbar data={loc} />
      <p>hi!</p>
      {/* https://www.primefaces.org/primereact/card/ */}
    </>
  );
};

export default MyArticles;
