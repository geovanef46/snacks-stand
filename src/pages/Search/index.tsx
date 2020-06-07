import React from "react";
import { IonPage, IonContent } from "@ionic/react";

import Header from "../../components/Header";
import ExploreContainer from "../../components/ExploreContainer";

const Search = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <ExploreContainer name="Search" />
      </IonContent>
    </IonPage>
  );
};

export default Search;
