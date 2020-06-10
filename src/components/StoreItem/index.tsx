import React from "react";
import { IonLabel, IonItem, IonAvatar } from "@ionic/react";

import Store from "../../models/Store";
import ShowRating from "../ShowRating";
import "./styles.css";

type StoreItemParams = {
  store: Store;
};

const StoreItem = ({ store }: StoreItemParams) => {
  return (
    <IonItem color="light" lines="none" button={true}>
      <IonAvatar slot="start">
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
      </IonAvatar>
      <IonLabel>
        <h2>{store.name}</h2>
        <p>{store.description}</p>
        <ShowRating starRate={store.stars} />
      </IonLabel>
    </IonItem>
  );
};

export default StoreItem;
