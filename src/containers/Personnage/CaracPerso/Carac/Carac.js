import React from "react";
import classes from "./Carac.module.css";

function Carac(props) {
  let carre = [];
  for (let i = 0; i < props.nbPoints; i++) {
    carre.push(
      <div key={i} className={classes.points}>
        {" "}
      </div>
    );
  }
  return (
    <div className='row no-gutters'>
      <div onClick={props.moins}  className={[classes.signe, classes.moins].join(" ")}></div>
      {props.children}
      {carre}
      <div onClick={props.plus} className={[classes.signe, classes.plus].join(" ")}></div>
    </div>
  );
}

export default Carac;
