"use client";

import react from "react";
import styles from "./Card.module.css";
import * as React from "react";

interface CardProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
}

// Client component: merging a function className creates a new function,
// which cannot be passed across the server/client boundary.
export function Card({}: CardProps) {
  return <div className={styles.card}>CARD</div>
}
