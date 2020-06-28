import React, { useState } from "react";
import { IonPage, IonContent, IonSearchbar, IonText } from "@ionic/react";

import Header from "../../components/Header";
import Store from "../../models/Store";
import StoreItem from "../../components/StoreItem";
import "./styles.css";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_STORES = gql`
  {
    stores {
      id
      name
      classification
    }
  }
`;

const Stores = () => {
  const [searchText, setSearchText] = useState("");

  const { loading, error, data } = useQuery(GET_STORES);

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
        {loading || error ? (
          <IonText>Carregando ou ERRO</IonText>
        ) : (
          data.stores
            .filter((item: Store) =>
              item.name.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((value: Store) => <StoreItem store={value} key={value.id} />)
        )}
      </IonContent>
    </IonPage>
  );
};

export default Stores;
