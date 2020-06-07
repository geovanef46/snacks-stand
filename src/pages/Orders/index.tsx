import React from "react";
import { IonPage, IonContent } from "@ionic/react";

import Header from "../../components/Header";
import ExploreContainer from "../../components/ExploreContainer";

const Orders = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <ExploreContainer name="Orders" />
      </IonContent>
    </IonPage>
  );
};

export default Orders;
