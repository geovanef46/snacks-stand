import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonSearchbar,
} from "@ionic/react";

import Header from "../../components/Header";
import Store from "../../models/Store";
import StoreItem from "../../components/StoreItem";
import "./styles.css";

const stores: Store[] = [
  {
    id: 1,
    name: "Lanchonete do Júnior",
    description:
      "Nós vendemos lanches baratinhos, entregamos na sua casa com segurança e higiene",
    stars: 4,
  },
  {
    id: 2,
    name: "Lanchonete do Geovane",
    description:
      "Nós vendemos lanches baratinhos, entregamos na sua casa com segurança e higiene",
    stars: 4.5,
  },
  {
    id: 3,
    name: "Lanchonete do Jackie Chan",
    description:
      "Nós vendemos lanches baratinhos, entregamos na sua casa com segurança e higiene",
    stars: 3,
  },
  {
    id: 4,
    name: "Lanchonete do Júnior",
    description:
      "Nós vendemos lanches baratinhos, entregamos na sua casa com segurança e higiene",
    stars: 4,
  },
  {
    id: 5,
    name: "Lanchonete do Geovane",
    description:
      "Nós vendemos lanches baratinhos, entregamos na sua casa com segurança e higiene",
    stars: 4.5,
  },
  {
    id: 6,
    name: "Lanchonete do Jackie Chan",
    description:
      "Nós vendemos lanches baratinhos, entregamos na sua casa com segurança e higiene",
    stars: 3,
  },
];

const Stores = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonSearchbar
          id="searchStores"
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          debounce={1000}
          color="light"
          placeholder="Pesquisar"
        />

        <IonInfiniteScroll>
        {stores.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase())).map((value,index) => (
      <StoreItem store={value} key={index} /> 
  ))}
          <IonInfiniteScrollContent
            loadingSpinner="bubbles"
            loadingText="Carregando dados..."
          />
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default Stores;
