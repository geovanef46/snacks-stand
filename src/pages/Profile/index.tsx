import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import Header from "../../components/Header";

const Profile = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <ExploreContainer name="Profile" />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
