import { Link } from "@mui/material";
import { margin } from "@mui/system";
import React from "react";
import styles from "../../styles/Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.parent}>
      <div className={styles.parent_content}>
        <div className={styles.logo}>
          <Link href={`/`}>Transferro</Link>
        </div>
        <div className={styles.navbar_content}>
          {" "}
          <Link href={`/aboutUs`}>AboutUS</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
