import React from "react";
import styles from "./button.module.css";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

export default function Button(props) {
  return (
    <button className={ props.flag === 1 ? styles.primary_btn : styles.secondary_btn}>
     
      <span className={styles.btn_logo}>{props.children} </span> 
      <span> {props.text}</span>

    </button>
  );
}
