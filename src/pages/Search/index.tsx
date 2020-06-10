import React from "react";
import { IonPage, IonContent, IonToolbar, IonSearchbar, IonHeader, IonList, IonCard, IonBackButton } from "@ionic/react";

import { useState } from "react";


const Search = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <IonPage>
      <IonHeader >
        <IonToolbar>
        <IonSearchbar value={searchText} placeholder="O que você deseja?" autocomplete="on" 
      onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="focus" animated>
      </IonSearchbar>
        </IonToolbar>
      </IonHeader>
      
      <IonContent >
        <IonList>
          <IonCard>

          </IonCard>
        </IonList>
      </IonContent>
    </IonPage>
  );
  
};

export default Search;
