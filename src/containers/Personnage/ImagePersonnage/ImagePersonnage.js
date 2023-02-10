import React from 'react'
import ImagesPlayer1 from "../../../assets/images/persos/player1.png"
import ImagesPlayer2 from "../../../assets/images/persos/player2.png"
import ImagesPlayer3 from "../../../assets/images/persos/player3.png"
import classes from "./ImagePersonage.module.css"

function ImagePersonnage(props) {
   let player
   if(props.img === 1) player = ImagesPlayer1
   else if (props.img === 2) player = ImagesPlayer2
   else player = ImagesPlayer3
  return (
    <div className='row no-gutters text-center align-items-center'>
        <div onClick={props.clicgauche} className={["col-1", classes.fleche, classes.gauche].join(" ")}> </div>
       <div className='col'> <img src={player} alt="perso" /></div>
        <div onClick={props.clicdroit} className={["col-1", classes.fleche, classes.droite].join(" ")}></div>
    </div>
  )
}

export default ImagePersonnage