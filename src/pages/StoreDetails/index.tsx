import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonAvatar,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { useParams } from "react-router";

import Header from "../../components/Header";
import ShowRating from "../../components/ShowRating";
import Snack from "../../models/Snack";
import SnackItem from "../../components/SnackItem";

const defaultSnacks: Snack[] = [
  {
    id: 1,
    name: "Pastel de Frango",
    description: "Pastel de frango katupiry",
  },
  {
    id: 2,
    name: "Pastel de Frango",
    description: "Pastel de frango katupiry",
  },
  {
    id: 3,
    name: "Pastel de Frango",
    description: "Pastel de frango katupiry",
  },
  {
    id: 4,
    name: "Pastel de Frango",
    description: "Pastel de frango katupiry",
  },
  {
    id: 5,
    name: "Pastel de Frango",
    description: "Pastel de frango katupiry",
  },
  {
    id: 6,
    name: "Pastel de Frango",
    description: "Pastel de frango katupiry",
  },
];

const StoreDetails = () => {
  const { id } = useParams<{ id: string }>();

  const [snacks, setSnacks] = useState<Snack[]>(defaultSnacks);

  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonAvatar>
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
              </IonAvatar>
              <ShowRating starRate={5} />
            </IonCol>
            <IonCol>
              <h3>Júnior Lanches</h3>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <p>
                Nós vendemos lanches baratinhos, entregamos na sua casa com
                segurança e higiene
              </p>
              <p>
                <strong>Proprietário:</strong> Júnior de Antônio de Elvira
              </p>

              <p>Endereço: Rua do Berra Bode</p>
              <p>Telefone: 394893489348</p>
              <p>Entrega grátis? A partir de R$ 10</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>Mais Comprados</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              {snacks.map((value, index) => {
                return (
                  <SnackItem
                    snack={value}
                    key={index}
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
              {snacks.map((value, index) => {
                return (
                  <SnackItem
                    snack={value}
                    key={index}
                    removeSnack={() => {}}
                    isAdd={true}
                  />
                );
              })}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default StoreDetails;
