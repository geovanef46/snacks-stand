import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from "@ionic/react";

import Header from "../../components/Header";
import Title from "../../components/Title";
import Snack from "../../models/Snack";
import SnackItem from "../../components/SnackItem";

import "./styles.css";

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

const FavoriteSnacks = () => {
  const [snacks, setSnacks] = useState<Snack[]>(defaultSnacks);

  const removeSnack = (id: number) => {
    const newSnacks = snacks.filter((value) => value.id !== id);
    setSnacks(newSnacks);
  };

  return (
    <IonPage>
      <Header />
      <IonContent className="favorite-snacks">
        <Title title="Lanches Favoritos" />

        {snacks.map((value, index) => {
          return (
            <SnackItem
              snack={value}
              key={index}
              removeSnack={removeSnack}
              isAdd={false}
            />
          );
        })}
      </IonContent>
    </IonPage>
  );
};

export default FavoriteSnacks;
