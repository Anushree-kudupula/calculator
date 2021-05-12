import React from "react";
import "./ClearButton.css";

export const ClearButton = (props) => (
  <div className="clear_button" onClick={props.handleClear}>{props.children}</div>
);
