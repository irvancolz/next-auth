"use client";
import React, { FormEvent, useContext, useState } from "react";
import style from "./style.module.css";
import { signIn } from "next-auth/react";
import { CallbackUrlContext, callbackContext } from "@/context/login";

export default function Login({}) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const { callback } = useContext(CallbackUrlContext);

  async function makeLoginReq(e: FormEvent) {
    e.preventDefault();

    const loginRes = await signIn("credentials", {
      username: user,
      password: pass,
      redirect: false,
    });
    if (loginRes?.error) {
      alert("failed to login :" + loginRes?.error);
      return;
    }
    setUser(() => "");
    setPass(() => "");
    window.location.replace(callback);
  }

  return (
    <div className={style.container}>
      <h1>Login With Credentials</h1>
      <form className={style.form} onSubmit={makeLoginReq}>
        <div className={style.input_group}>
          <label htmlFor="username-txt-field">Your Username</label>
          <input
            type="text"
            id="username-txt-field"
            placeholder="username"
            value={user}
            onChange={(e) => setUser(() => e.target.value)}
          />
        </div>
        <div className={style.input_group}>
          <label htmlFor="password-txt-field">Password</label>
          <input
            type="text"
            id="password-txt-field"
            placeholder="username"
            value={user}
            onChange={(e) => setPass(() => e.target.value)}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: ".35rem 0",
            fontWeight: 600,
            fontSize: "1.25rem",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
