import React from "react";
import Arme from "./Arme/Arme";
import imgArc from "../../../assets/images/armes/arc.png";
import imgFleau from "../../../assets/images/armes/fleau.png";
import imgEpee from "../../../assets/images/armes/epee.png";
import imgHache from "../../../assets/images/armes/hache.png";

function Armes(props) {
   
  return (
    <div className='row no-gutters text-center'>
      {props.listeArmes.map((arme) => {
        let imgArme;
        switch (arme) {
          case "arc":
            imgArme = imgArc;
            break;
          case "epee":
            imgArme = imgEpee;
            break;
          case "hache":
            imgArme = imgHache;
            break;
          case "fleau":
            imgArme = imgFleau;
            break;
        }
        return (
          <div key={arme} className='col-3' >
            <Arme 
            clic={() => props.selectArme(arme)}
            isCurrentArme={props.currentArme === arme}
         imageArme={imgArme}>
              {arme}
            </Arme>
          </div>
        );
      })}
    </div>
  );
}

export default Armes;
