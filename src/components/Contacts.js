import React from "react";
import map from "../img/map.svg";
import gmail from "../img/gmail.svg";
import wa from "../img/wa.svg";
import git from "../img/git.svg";

export const Contacts = () => (
  <div className="container-flex">
    <div className="container">
      <h2>Contacts</h2>
      <h3>Ceniccola Orlando</h3>
      <div className="contacts-icon">
        <img src={map} className="icon" alt="map icon" />
        <p>Via Municipio 153, Guardia Sanframondi, Benevento</p>
      </div>
      <div className="contacts-icon">
        <img src={gmail} className="icon" alt="gmail icon" />
        <p>orlando@ceniccola.it</p>
      </div>
      <div className="contacts-icon">
        <img src={wa} className="icon" alt="whatsapp icon" />
        <p>+393356322604</p>
      </div>
      <div className="contacts-icon">
        <img src={git} className="icon" alt="git icon" />
        <p>and0rl</p>
      </div>
    </div>
  </div>
);
