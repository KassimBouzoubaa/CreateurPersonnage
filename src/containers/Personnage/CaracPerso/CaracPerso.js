import React from "react";
import Carac from "./Carac/Carac";

function CaracPerso(props) {
  return (
    <>
      <div>
        Points restants : <span className="badge text-bg-success">  {props.nbPointsDispo}</span>
      </div>
      <div>
        <Carac plus={() => props.ajouterPoint('force')} moins={() => props.enleverPoint('force')}  nbPoints={props.force}>Force</Carac>
        <Carac plus={() => props.ajouterPoint('agilite')} moins={() => props.enleverPoint('agilite')}  nbPoints={props.agilite} >Agilite</Carac>
        <Carac plus={() => props.ajouterPoint('intelligence')} moins={() => props.enleverPoint('intelligence')}  nbPoints={props.intelligence}>Intelligence</Carac>
      </div>
    </>
  );
}

export default CaracPerso;
