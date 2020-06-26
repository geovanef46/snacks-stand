import React from "react";
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonAvatar,
  IonCard,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonIcon,
  IonItem,
  IonCardContent,
  IonText,
} from "@ionic/react";
import { useParams } from "react-router";
import { basket, arrowForward } from "ionicons/icons";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import Header from "../../components/Header";

const GET_SNACK = gql`
  query GetSnack($snackId: ID!) {
    snack(id: $snackId) {
      id
      name
      description
    }
  }
`;

const SnackDetails = () => {
  const { id: snackId } = useParams<{ id: string }>();

  const { loading, error, data } = useQuery(GET_SNACK, {
    variables: {
      snackId,
    },
  });

  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonGrid>
          {loading || error || !data.snack ? (
            <IonText>Carregando ou ERROR...</IonText>
          ) : (
            <>
              <IonRow>
                <IonCol>
                  <IonAvatar>
                    <img
                      src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                      alt=""
                    />
                  </IonAvatar>
                </IonCol>
                <IonCol>
                  <h3>{data?.snack?.name}</h3>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonCard color="light">
                    <IonCardContent color="dark">
                      <p>{data?.snack?.description}</p>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
              <IonRow></IonRow>
              <IonRow>
                <IonItemSliding>
                  <IonItemOptions side="start">
                    <IonItemOption color="dark" expandable>
                      <IonIcon icon={basket} slot="icon-only" />
                    </IonItemOption>
                  </IonItemOptions>
                  <IonItem color="light">
                    <IonIcon icon={arrowForward} color="dark" />
                    <p>Enviar para sua Cesta</p>
                  </IonItem>
                </IonItemSliding>
              </IonRow>
            </>
          )}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SnackDetails;
