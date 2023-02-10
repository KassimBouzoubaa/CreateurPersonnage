import React from 'react'
import ImagesPlayer1 from "../../../assets/images/persos/player1.png"
import ImagesPlayer2 from "../../../assets/images/persos/player2.png"
import ImagesPlayer3 from "../../../assets/images/persos/player3.png"
import imgArc from "../../../assets/images/armes/arc.png";
import imgFleau from "../../../assets/images/armes/fleau.png";
import imgEpee from "../../../assets/images/armes/epee.png";
import imgHache from "../../../assets/images/armes/hache.png";

function Joueur(props) {

    let imgPerso = ""
    if(props.image === 1) imgPerso = ImagesPlayer1
    else if(props.image === 2) imgPerso = ImagesPlayer2
    else if(props.image === 3) imgPerso = ImagesPlayer3

    let arme 
    if(props.arme === "epee") arme = imgEpee
    else if(props.arme === "fleau") arme = imgFleau
    else if(props.arme === "arc") arme = imgArc
    else if(props.arme === "hache") arme = imgHache

  return (
    <div className='row no-gutters'>
        <div className='col-4'>
            <img src={imgPerso} alt='joueur' />
        </div>
        <div className='col-4'>
            Force: {props.force} <br/>
            Agilite : {props.agilite}<br/>
            Intelligence : {props.intelligence}<br/>
        </div>
        <div className='col-4'>            <img src={arme} alt="arme" />
</div>
    </div>
  )
}

export default Joueur