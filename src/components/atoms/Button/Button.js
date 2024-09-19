import React from "react";
import styles from "./Button.module.css";

function Button() {
  return (
    <button type="submit" className={styles.button}>
      Get Weather
    </button>
  );
}

export default Button;
