import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonToolbar,
  IonSearchbar,
  IonHeader,
  IonText,
} from "@ionic/react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Snack from "../../models/Snack";
import SnackItem from "../../components/SnackItem";

const GET_SNACKS = gql`
  {
    snacks {
      id
      name
      description
    }
  }
`;

const Search = () => {
  const [searchText, setSearchText] = useState("");

  // let  loading, error, data = {snacks:[]}

  // const getDocument = () : DocumentNode =>{
  //   let GET_SNACKS: DocumentNode = gql`{}`;
  //   setInterval(() =>{
  //    GET_SNACKS = gql`
  //   {
  //     snacks {
  //       id
  //       name
  //       description
  //     }
  //   }
  // `;
  //     return GET_SNACKS
  //   },timeOut)
  
  //   return GET_SNACKS
  // }

  let { loading, error, data } = useQuery(GET_SNACKS);

  
  useQuery(GET_SNACKS).refetch()
    .then((result) => {
      data = result.data
      loading = result.loading
      
    })
    .catch((err) => { error = err })
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonSearchbar
            color="light"
            value={searchText}
            placeholder="O que você deseja?"
            autocomplete="on"
            onIonChange={(e) => {
              setSearchText(e.detail.value!)
              
            }
          }
            showCancelButton="focus"
            animated
          ></IonSearchbar>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {loading ? (
          <IonText>loading...</IonText>
        ) : error ? (
          <IonText>Houve um erro...</IonText>
        ) : (
          
          data.snacks.filter((item:Snack) =>
            
          item.name.toLowerCase().includes(searchText.toLowerCase())
        ).map((snack: Snack) => (
            <SnackItem
          snack={snack}
          key={snack.id}
          isAdd={false}
          removeSnack={() => console.log(`Remove item${snack.id}`)}
        />
          ))
        )}
        {/* {snacks
          .filter((item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((value, index) => (
            <SnackItem
              snack={value}
              key={index}
              isAdd={false}
              removeSnack={() => console.log(`Remove item${value.id}`)}
            />
          ))} */}
      </IonContent>
    </IonPage>
  );
};

export default Search;
