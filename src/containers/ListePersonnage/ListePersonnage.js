import React, { useEffect, useState } from "react";
import axios from "axios";
import TitreH1 from "../../components/Titres/TitreH1";
import Joueur from "./Joueur/Joueur";

function ListePersonnage(props) {
  const [personnages, setPersonnages] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://creaperso-48c79-default-rtdb.europe-west1.firebasedatabase.app/perso.json"
      )
      .then((reponse) => {
        setPersonnages(Object.values(reponse.data));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [props.refresh]);

  return (
    <>
      {loading && <div>Chargement.. </div>}
      {!loading && (
        <div className='row no-gutters'>
          {personnages &&
            personnages.map((perso, i) => {
              return (
                <div key={i} className='col-6'>
                  <TitreH1>{perso.nom}</TitreH1>
                  <Joueur {...perso.perso}></Joueur>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
}

export default ListePersonnage;
