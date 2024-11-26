import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <>
       <header style={styles.header}>
            <nav style={styles.nav}>
                <Link to="/" style={styles.link}>Home</Link>
                <Link to="/about" style={styles.link}>About</Link>
            </nav>
        </header>
    </>
  )
}
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
export default Header
