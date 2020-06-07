import React from "react";
import { IonPage, IonContent } from "@ionic/react";

import Header from "../../components/Header";
import ExploreContainer from "../../components/ExploreContainer";

const Comments = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <ExploreContainer name="Comments" />
      </IonContent>
    </IonPage>
  );
};

export default Comments;
