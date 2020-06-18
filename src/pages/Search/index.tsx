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
      name: "Hamburger",
      description: "Hamburger de frango ",
    },
    {
      id: 3,
      name: "Asinha de Frango",
      description: "Asinha de frango ",
    },
    {
      id: 4,
      name: "Churrasco de Frango",
      description: "Churrasco de frango ",
    },
    {
      id: 5,
      name: "Creme de Frango",
      description: "Creme de frango ",
    },
    {
      id: 6,
      name: "Especial de Frango",
      description: "Especial de frango ",
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
      {snacks.filter(item => item.name.includes(searchText)).map((value,index) => (
      <SnackItem snack={value} key={index} isAdd={false} removeSnack={() => console.log(`Remove item${value.id}`)} /> 
  ))}
        
      </IonContent>
    </IonPage>
  );
  
};

export default Search;
