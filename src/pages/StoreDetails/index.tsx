import React from "react";
import { IonPage, IonContent, IonAvatar } from "@ionic/react";
import Header from "../../components/Header";
import ShowRating from "../../components/ShowRating";

const StoreDetails = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <ShowRating starRate={5} />

        <IonAvatar>
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </IonAvatar>

        <h2>Júnior Lanches</h2>

        <p>Proprietário</p>

        <p>Endereço</p>
        <p>Telefone</p>
        <p>Entrega grátis</p>
      </IonContent>
    </IonPage>
  );
};

export default StoreDetails;
