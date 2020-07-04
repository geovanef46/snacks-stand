import React, { useState } from "react";
import { IonPage, IonContent, IonSearchbar, IonText } from "@ionic/react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Snack from "../../models/Snack";
import SnackItem from "../../components/SnackItem";
import Header from "../../components/Header";

const GET_SNACKS = gql`
  query Search($key: String!) {
    searchSnack(key: $key) {
      id
      name
      description
    }
  }
`;

const Search = () => {
  const [searchText, setSearchText] = useState("");

  let { loading, error, data } = useQuery(GET_SNACKS, {
    variables: {
      key: searchText,
    },
    pollInterval: 500,
  });

  return (
    <IonPage>
      <Header />

      <IonSearchbar
        color="light"
        value={searchText}
        placeholder="O que você deseja?"
        autocomplete="on"
        onIonChange={(e) => {
          setSearchText(e.detail.value!);
        }}
        showCancelButton="focus"
        animated
      />

      <IonContent>
        {loading ? (
          <IonText>loading...</IonText>
        ) : error ? (
          <IonText>Houve um erro...</IonText>
        ) : (
          data.searchSnack.map((snack: Snack) => (
            <SnackItem
              snack={snack}
              key={snack.id}
              isAdd={false}
              removeSnack={() => console.log(`Remove item${snack.id}`)}
            />
          ))
        )}
      </IonContent>
    </IonPage>
  );
};

export default Search;
