import Navbar from "../components/Navbar";
import styles from "../assets/css/profile.module.css";
import "../assets/css/main.css";
const Profile = () => {
  return (
    <>
      <Navbar />

      <div className={styles.containerProfile}>
        <div className={styles.containerLeftPart}></div>
        <div className={styles.containerRightPart}></div>
      </div>
    </>
  );
};

export default Profile;
