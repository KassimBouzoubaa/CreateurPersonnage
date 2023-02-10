import React, { useEffect, useState } from "react";
import TitreH1 from "../../components/Titres/TitreH1";
import Bouton from "../../components/Bouton/Bouton";
import Personnage from "../Personnage/Personnage";
import axios from "axios";
import Armes from "./Armes/Armes";

function CreateurPersonnage(props) {
  const [personnage, setPersonnage] = useState({
    image: 1,
    force: 0,
    agilite: 0,
    intelligence: 0,
    arme: "hache",
  });
  const [nbPointsDispo, setNbPointsDispo] = useState(7);
  const [armes, setArmes] = useState(null);
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [nom, setNom] = useState("");

  const handleReinitialisation = () => {
    setPersonnage({
      image: 1,
      force: 0,
      agilite: 0,
      intelligence: 0,
      arme: "hache",
    });
    setNbPointsDispo(7);
    setNom("");
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://creaperso-48c79-default-rtdb.europe-west1.firebasedatabase.app/armes.json"
      )
      .then((reponse) => {
        setArmes(Object.values(reponse.data));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleDroit = () => {
    let imgUpdate = { ...personnage };
    if (imgUpdate.image >= 3) imgUpdate.image = 1;
    else imgUpdate.image++;
    setPersonnage(imgUpdate);
  };
  const handleGauche = () => {
    let imgUpdate = { ...personnage };
    if (imgUpdate.image <= 1) imgUpdate.image = 3;
    else imgUpdate.image--;
    setPersonnage(imgUpdate);
  };
  const handleEnleverPoint = (carac) => {
    if (nbPointsDispo < 7 && personnage[carac] > 0) {
      setNbPointsDispo(nbPointsDispo + 1);
      let newPerso = { ...personnage };
      newPerso[carac]--;
      setPersonnage(newPerso);
    }
  };
  const handleAjouterPoint = (carac) => {
    if (nbPointsDispo > 0 && personnage[carac] < 5) {
      setNbPointsDispo(nbPointsDispo - 1);
      let newPerso = { ...personnage };
      newPerso[carac]++;
      setPersonnage(newPerso);
    }
  };

  const handleSelectArme = (arme) => {
    let newPerso = { ...personnage };
    newPerso.arme = arme;
    setPersonnage(newPerso);
  };

  const handleValidation = () => {
    setLoading(true);
    setAlert(!alert);
    const player = {
      perso: { ...personnage },
      nom: nom,
    };
    axios
      .post(
        "https://creaperso-48c79-default-rtdb.europe-west1.firebasedatabase.app/perso.json",
        player
      )
      .then((reponse) => {
        setLoading(false);
        handleReinitialisation();
        props.refresh();
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        handleReinitialisation();
      });
  };

  return (
    <div className='container'>
      <TitreH1>Créateur de personnage</TitreH1>
      {loading && <div>Chargement.. </div>}
      {alert && (
        <div className={"alert alert-success"} role='alert'>
          Le personnage a été créé avec succès.
        </div>
      )}
      <div className='mb-3'>
        <input
          value={nom}
          onChange={(event) => setNom(event.target.value)}
          type='text'
          className='form-control'
          id='inputName'
          placeholder='Nom du personnage'
        />
      </div>
      <Personnage
        ajouterPoint={(carac) => handleAjouterPoint(carac)}
        enleverPoint={(carac) => handleEnleverPoint(carac)}
        clicdroit={() => handleDroit()}
        clicgauche={() => handleGauche()}
        {...personnage}
        nbPointsDispo={nbPointsDispo}
      />
      {armes && (
        <Armes
          currentArme={personnage.arme}
          selectArme={(arme) => handleSelectArme(arme)}
          listeArmes={armes}
        />
      )}
      <div className='row no-gutters'>
        <Bouton
          clic={() => handleReinitialisation()}
          css='col-6'
          typeBtn='btn-danger'
        >
          Réinitialiser
        </Bouton>
        <Bouton
          clic={() => handleValidation()}
          css='col-6'
          typeBtn='btn-success'
        >
          Créer
        </Bouton>
      </div>
    </div>
  );
}

export default CreateurPersonnage;
