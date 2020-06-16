import React, { useState } from "react";
import { IonPage, IonContent, IonToolbar, IonSearchbar, IonHeader} from "@ionic/react";

import Snack from "../../models/Snack";
import SnackItem from "../../components/SnackItem";


const snacks: Snack[] = [
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
    }
];


const Search = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <IonPage>
      <IonHeader >
        <IonToolbar>
        <IonSearchbar color="light"  value={searchText} placeholder="O que você deseja?" autocomplete="on" 
      onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="focus" animated>
      </IonSearchbar>
        </IonToolbar>
      </IonHeader>
    
      <IonContent >
          {snacks.map((value, index) => {
              return <SnackItem snack={value} key={index} isAdd={false} removeSnack={() => console.log(`Remove item${value.id}`)} />;  
          })}
      </IonContent>
    </IonPage>
  );
  
};

export default Search;
