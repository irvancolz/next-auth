"use client";
import React from "react";
import style from "./style.module.css";
import { signOut } from "next-auth/react";

export default function Logout() {
  function makeLogoutReq() {
    signOut({ callbackUrl: "/auth/login" });
  }

  return (
    <div className={style.container}>
      <h1>Are You Sure?</h1>
      <button onClick={makeLogoutReq}>Logout</button>
    </div>
  );
}
