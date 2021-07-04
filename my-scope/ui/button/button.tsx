import React from "react";
import styles from "./button.module.scss";

export type ButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
  /**
   * sets the primary or secondary color
   */
  importance?: "primary" | "secondary";
};

export function Button({ text, importance }: ButtonProps) {
  return (
    <button className={styles.button} data-variation={importance}>
      {text}
    </button>
  );
}
