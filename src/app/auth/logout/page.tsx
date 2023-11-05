"use client";
import React from "react";
import style from "./style.module.css";

export default function Logout() {
  function makeLogoutReq() {
    console.log("logged out");
  }

  return (
    <div className={style.container}>
      <h1>Are You Sure?</h1>
      <button onClick={makeLogoutReq}>Logout</button>
    </div>
  );
}
