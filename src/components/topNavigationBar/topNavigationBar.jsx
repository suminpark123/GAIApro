import styles from "./topNavigationBar.module.css";
import { Link } from "react-router-dom";

export const TopNavigationBar = ({ cart }) => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/">
          <h1 className={styles.logo}>
            <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" />
          </h1>
        </Link>
        <div className={styles.input_wrap}>
          <input type="text" placeholder="상품을 검색해보세요!" />
          <img
            src={process.env.PUBLIC_URL + "/images/icon-search.svg"}
            alt="search"
          />
        </div>
      </div>
      <Link to="">
        <div className={styles.mypage}>
          <img
            src={process.env.PUBLIC_URL + "/images/icon-user.svg"}
            alt="user"
          />
          <span>로그인</span>
        </div>
      </Link>
    </header>
  );
};
