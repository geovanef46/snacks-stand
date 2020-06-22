import React from "react";
import { IonPage, IonContent, IonTitle, IonAvatar, IonInput, IonItemGroup, IonItem, IonIcon } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { card } from "ionicons/icons";

const Profile = () => {
  return (
    <IonPage>
      <Header />

      <IonContent>
        <Title title="Meu Perfil" />
        <IonAvatar>
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </IonAvatar>
        <IonItemGroup>
          <IonItem></IonItem>
          <IonItem></IonItem>
          <IonItem></IonItem>
        </IonItemGroup>
        <IonItemGroup>
          <IonIcon icon={card} title="Meus Cartões" > </IonIcon>
          <IonItem> Meus Cartões</IonItem>
          <IonItem></IonItem>
          <IonItem></IonItem>
        </IonItemGroup>        

      </IonContent>
    </IonPage>
  );
};

export default Profile;
