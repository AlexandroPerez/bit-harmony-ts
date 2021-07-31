import React from "react";
import styles from "./card.module.scss";
import { Button, ButtonProps } from "@alexandroperez/workshop.ui.button";

//                      This is a construct called intersection types
//                      mainly used to combine existing object types.
export type CardProps = ButtonProps & {
  /** a text to be rendered in the component. */
  text: string;
  /** Text for button */
  buttonText?: string;
};

export function Card({ text, importance, buttonText = "Learn More" }: CardProps) {
  return (
    <div className={styles.card}>
      <h2>{text}</h2>
      <Button importance={importance} text={buttonText} />
    </div>
  );
}
