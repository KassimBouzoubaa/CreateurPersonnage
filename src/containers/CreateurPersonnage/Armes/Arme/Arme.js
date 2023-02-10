import React from "react";

function Arme(props) {
  return (
    <div>
      <div>
        <img 
         style={{
            opacity : props.isCurrentArme ? "1" : "0.5",
            cursor:"pointer"
        }} 
        src={props.imageArme} alt={props.children} 
        onClick={props.clic}/>
      </div>
      <div>{props.children} </div>
    </div>
  );
}

export default Arme;
