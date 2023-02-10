import React from "react";
import ImagePersonnage from "./ImagePersonnage/ImagePersonnage";
import CaracPerso from "./CaracPerso/CaracPerso";

function Personnage(props) {
  return (
    <div className='row no-gutters'>
      <div className='col-6'>
        <ImagePersonnage
          clicdroit={props.clicdroit}
          clicgauche={props.clicgauche}
          className='col-4'
          img={props.image}
        />
      </div>
      <div className='col-6'>
        <CaracPerso
          nbPointsDispo={props.nbPointsDispo}
          force={props.force}
          agilite={props.agilite}
          intelligence={props.intelligence}
          enleverPoint= {props.enleverPoint}
          ajouterPoint = {props.ajouterPoint}
        />
      </div>
    </div>
  );
}

export default Personnage;
