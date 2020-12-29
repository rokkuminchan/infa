import React from "react";
import { EfaText, EfaDate, EfaRadioGroup, EfaSelect } from "./controlMapping";

const components = {
  EfaText,
  EfaDate,
  EfaRadioGroup,
  EfaSelect,
};

export default function FormControlPicker(props) {
  var DynamicControl;

  try {
    DynamicControl = components[props.type];
  } catch (error) {
    console.log(error);
  }

  return <DynamicControl {...props} />;
}
