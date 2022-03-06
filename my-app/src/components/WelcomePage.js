import "../assets/css/welcomePage.css";
import { Button } from "primereact/button";
const WelcomePage = () => {
  return (
    <div className="container-welcome-page">
      <div className="container-left-part">
        <h2 className="welcome">Welcome back!</h2>
        <p className="account-text">
          To use this application <br></br>please login into your account
        </p>
        <Button
          style={{ background: "#284b63", width: "170px" }}
          label="Sign In"
        />
      </div>

      <div className="container-right-part"></div>
    </div>
  );
};

export default WelcomePage;
