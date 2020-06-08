import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle
} from "@ionic/react";

const Header = () => {
  return (

      <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton autoHide={false}/>
        </IonButtons>
  <IonTitle>Snacks</IonTitle>
      </IonToolbar>
    </IonHeader>
    
  );
};

export default Header;
