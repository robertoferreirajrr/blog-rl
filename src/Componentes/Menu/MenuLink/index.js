import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MenuLink.module.css";

export default function MenuLink({ nome, path }) {
  return (
    <NavLink
      className={({ isActive, isPending }) => {
        return `
        ${styles.link}
        ${isActive ? styles.linkDestacado : ""}
      `;
      }}
      to={path}
    >
      {nome}
    </NavLink>
  );
}
