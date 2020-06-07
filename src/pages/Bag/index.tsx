import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useParams } from "react-router";

import ExploreContainer from "../../components/ExploreContainer";
import Header from "../../components/Header";

const Bag: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <Header />

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ExploreContainer name="Minha Sacola" />
      </IonContent>
    </IonPage>
  );
};

export default Bag;
