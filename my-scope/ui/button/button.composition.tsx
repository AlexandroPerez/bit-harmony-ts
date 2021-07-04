import React from "react";
import { Button } from "./button";

export const BasicButton = () => <Button text="hello from Button" />;

export const PrimaryButton = () => (
  <Button importance="primary" text="hello from Primary Button" />
);

export const SecondaryButton = () => (
  <Button importance="secondary" text="hello from Secondary Button" />
);
