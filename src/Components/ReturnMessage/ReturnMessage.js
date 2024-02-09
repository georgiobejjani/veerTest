import React from "react";
import classes from "./ReturnMessage.module.scss";

export default function ReturnMessage(props) {
  return (
    <div className={classes.msgContainer + " " + classes[props.type]}>
      <span className={classes.returnMessage}>{props.message}</span>
    </div>
  );
}
