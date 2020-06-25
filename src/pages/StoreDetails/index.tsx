import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonAvatar,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
} from "@ionic/react";

import Header from "../../components/Header";
import ShowRating from "../../components/ShowRating";
import Snack from "../../models/Snack";
import SnackItem from "../../components/SnackItem";
import { useParams } from "react-router";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_SNACKS = gql`
  query GetSnacks($storeId: ID!) {
    store(id: $storeId) {
      id
      name
      description
      phone
      owner {
        id
        name
      }
      address {
        id
        street
        number
        complement
        district
        city
        state
      }
      snacks {
        id
        name
        description
      }
    }
  }
`;

const StoreDetails = () => {
  const { id: storeId } = useParams<{ id: string }>();

  const { loading, error, data } = useQuery(GET_SNACKS, {
    variables: {
      storeId,
    },
  });

  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonGrid>
          {loading || error ? (
            <IonText>Carregando ou ERROR...</IonText>
          ) : (
            <>
              <IonRow>
                <IonCol>
                  <IonAvatar>
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                  </IonAvatar>
                  <ShowRating starRate={5} />
                </IonCol>
                <IonCol>
                  <h3>{data?.store.name}</h3>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <p>{data?.store.description}</p>
                  <p>
                    <strong>Proprietário:</strong> {data?.store.owner.name}
                  </p>
                  <p>
                    Endereço: {data?.store.address.street},{" "}
                    {data?.store.address.number}, {data?.store.address.district}
                    , {data?.store.address.city}
                  </p>
                  <p>Telefone: {data?.store.phone}</p>
                  <p>Entrega grátis? PENSAR</p>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Mais Comprados</IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  {data?.store.snacks.map((snack: Snack) => {
                    return (
                      <SnackItem
                        snack={snack}
                        key={`m-${snack.id}`}
                        removeSnack={() => {}}
                        isAdd={true}
                      />
                    );
                  })}
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Novidades</IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  {data?.store.snacks.map((snack: Snack) => {
                    return (
                      <SnackItem
                        snack={snack}
                        key={`new-${snack.id}`}
                        removeSnack={() => {}}
                        isAdd={true}
                      />
                    );
                  })}
                </IonCol>
              </IonRow>
            </>
          )}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default StoreDetails;
