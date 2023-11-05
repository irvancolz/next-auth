"use client";
import React from "react";
import Link from "next/link";
import style from "./style.module.css";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "User",
    href: "/user",
  },
  {
    label: "Admin",
    href: "/admin",
  },
  {
    label: "Super Admin",
    href: "/superAdmin",
  },
];

export default function Sidebar() {
  const currpath = usePathname();
  return (
    <nav className={style.container}>
      <ul>
        {navLinks.map((e, i) => {
          return (
            <li
              key={i}
              className={`${style.links} ${
                currpath.toLowerCase() === e.href.toLowerCase() ? "active" : ""
              }`}
            >
              <Link href={e.href}>{e.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
