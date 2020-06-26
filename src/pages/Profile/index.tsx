import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonAvatar,
  IonItem,
  IonIcon,
  IonGrid,
  IonRow,
  IonCard,
  IonLoading,
  IonLabel,
  IonSkeletonText,
} from "@ionic/react";
import { card } from "ionicons/icons";

import Header from "../../components/Header";
import Title from "../../components/Title";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_USER = gql`
{
  user(id: 2){
    name
    phone
    address{
      id
      street
      number
      district
      city
      state
    }
  }
}
`;

const Profile = () => {

  const { data, loading, error } = useQuery(GET_USER)
  const [showLoading, setShowLoading] = useState(false);

  return (
    <IonPage>
      <Header />

      <IonContent>

        <IonGrid >
          <IonRow class="ion-justify-content-center">
            <IonAvatar>
              <img
                src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                alt=""
              />
            </IonAvatar>
          </IonRow>
          <IonRow class="ion-justify-content-center">
            <Title title="Meu Perfil" />
          </IonRow>

          {loading ? (
            <div><IonLoading onDidPresent={() => setShowLoading(false)} isOpen={showLoading} onDidDismiss={() => setShowLoading(loading)} message={'Buscando dados...'}></IonLoading></div>
          ) : error ? (<div>
            <IonItem>
              <IonLabel>
                <h3>
                  <IonSkeletonText animated style={{ width: '80%' }} />
                </h3>
                <p>
                  <IonSkeletonText animated style={{ width: '60%' }} />
                </p>
                <p>
                  <IonSkeletonText animated style={{ width: '80%' }} />
                </p>
              </IonLabel>
            </IonItem>
          </div>
          ) : (

                <div>
                  <IonItem onLoadStart={() => setShowLoading(true)}><p>Nome:  {data.user.name}</p></IonItem>
                  <IonItem>Telefone:   {data.user.phone}</IonItem>
                  <IonItem onLoadedData={() => setShowLoading(false)}>Endereço:  {data.user.address.street}, {data.user.address.number}, {data.user.address.city}, {data.user.address.state}</IonItem>
                </div>

              )
          }
          <IonRow class="ion-justify-content-center">
            <IonItem> Meus Cartões</IonItem>
          </IonRow>
          <IonCard>
            <IonIcon icon={card} title="Meus Cartões">
              {" "}
            </IonIcon>
          </IonCard>

        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Profile;