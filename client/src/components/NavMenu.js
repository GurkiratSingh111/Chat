import styles from "./NavMenu.module.css";
export default function NavMenu({username = null}) {
  return (
    <div id={styles["nav-container-no-bg"]}>
      <div id={styles["nav-container"]}>
        <div id={styles["nav-container-left-side"]}>
          <a href='http://localhost:3000/'>webName</a>
        </div>
        <div id={styles["nav-container-middle-side"]}>
          <a href='http://localhost:3000/'>Home</a>
          <a href='http://localhost:3000/'>option2</a>
          <a href='http://localhost:3000/'>option3</a>
        </div>
        <div id={styles["nav-container-right-side"]}>
          <a href='http://localhost:3000/login'>{username? username : "Log In" }</a>
          <a href='http://localhost:3000/register'>Sign in</a>
        </div>
      </div>
    </div>
  );
}
