import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header style={styles.header}>
        <nav style={styles.nav}>
          <Link to="/VariableCalls" style={styles.link}>
            Variable Calls
          </Link>
          <Link to="/Props" style={styles.link}>
            Props
          </Link>
          <Link to="/propsObjectOrDestructured" style={styles.link}>
            PropsObjectOrDestructured
          </Link>{" "}
          <Link to="/multipleComponentFromSameFile" style={styles.link}>
            MultipleComponentFromSameFile
          </Link>
          <Link to="/" style={styles.link}>
            Home
          </Link>
          <Link to="/register" style={styles.link}>
            Register
          </Link>
          <Link to="/admin" style={styles.link}>
            Admin
          </Link>
          <Link to="/login" style={styles.link}>
            Login
          </Link>
        </nav>
      </header>
    </>
  );
};
const styles = {
  header: {
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nav: {
    display: "flex",
    gap: "15px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
};
export default Header;
