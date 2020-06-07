import React from "react";
import { IonPage, IonContent } from "@ionic/react";

import Header from "../../components/Header";
import ExploreContainer from "../../components/ExploreContainer";

const Logout = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <ExploreContainer name="Logout" />
      </IonContent>
    </IonPage>
  );
};

export default Logout;
