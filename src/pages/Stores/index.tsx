import React from "react";
import { IonPage, IonContent } from "@ionic/react";

import Header from "../../components/Header";
import ExploreContainer from "../../components/ExploreContainer";

const Stores = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <ExploreContainer name="Stores" />
      </IonContent>
    </IonPage>
  );
};

export default Stores;
