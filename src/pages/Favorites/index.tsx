import React from "react";
import { IonPage, IonContent } from "@ionic/react";

import Header from "../../components/Header";
import ExploreContainer from "../../components/ExploreContainer";

const Favorites = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <ExploreContainer name="Favorites" />
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
