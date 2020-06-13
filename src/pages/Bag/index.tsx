import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
} from "@ionic/react";
import { useParams } from "react-router";
import { arrowForward, logoUsd } from "ionicons/icons";

import Header from "../../components/Header";
import Title from "../../components/Title";
import ItemOrder from "../../models/ItemOrder";
import ItemBag from "../../components/ItemBag";
import "./styles.css";

const items: ItemOrder[] = [
  {
    amount: 2,
    snack: {
      id: 1,
      description: "Um pastel de frango saboroso",
      name: "Pastel de frango",
    },
  },
  {
    amount: 3,
    snack: {
      id: 2,
      description: "Um pastel de frango saboroso",
      name: "Pastel de frango",
    },
  },
  {
    amount: 3,
    snack: {
      id: 2,
      description: "Um pastel de frango saboroso",
      name: "Pastel de frango",
    },
  },
];

type Position = {
  x: number;
  y: number;
};

const Bag: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <Header />

      <IonContent>
        <Title title="Minha Sacola" />

        {items.map((value, index) => (
          <ItemBag key={index} item={value} />
        ))}
        <div className="bag-infos">
          <IonGrid>
            <IonRow className="ion-align-items-center">
              <IonCol>
                <p>VALOR TOTAL</p>
                <p>R$ 20,00</p>
              </IonCol>
              <IonCol>
                <p>10 itens</p>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

        <div className="slide-button-container">
          <IonItemSliding>
            <IonItemOptions side="start">
              <IonItemOption color="success" expandable>
                <IonIcon icon={logoUsd} slot="icon-only" />
              </IonItemOption>
            </IonItemOptions>
            <IonItem color="light">
              <IonIcon icon={arrowForward} color="dark" />
              <p>Deslize para pagar</p>
            </IonItem>
          </IonItemSliding>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Bag;
