import React, { useState } from "react";
import { IonPage,  IonPopover, IonAvatar,  IonText } from "@ionic/react";
import { Map, Marker, TileLayer } from "react-leaflet";
import { location } from "ionicons/icons";
import { useHistory } from "react-router-dom"
import Header from "../../components/Header";

import "leaflet/dist/leaflet.css";
import "./styles.css";
import L from 'leaflet'
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import Store from "../../models/Store";
import ShowRating from "../../components/ShowRating";

const GET_STORES = gql`
  {
    stores {
      id
      name
      classification
      latitude
      longitude
    }
  }
`;

const Home: React.FC = () => {
  const [showPop, setShowPop] = useState(false);
  const [idStore, setIdStore] = useState(0);
  const { loading, error, data } = useQuery(GET_STORES);
  // const { name } = useParams<{ name: string }>();
  const icon = new L.Icon({
    iconUrl: location,
    iconSize: [25, 25]
  })
  const history = useHistory();

  const handleClick = (id: number) => {
    history.push(`/stores/${id}`);
  };


  return (
    <IonPage>
      <Header />

      <Map center={[-6.985344, -36.241385]} zoom={15}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {loading ? (
          console.log("Carregando dados...")
        ) : error ? (console.error("Erro ao carregar dados...")) : (
          data.stores.map((value: Store) => <Marker key={value.id} onClick={() => { setShowPop(true); setIdStore(value.id) }} icon={icon}  position={[value.latitude, value.longitude]} />
          )

        )
        }


      </Map>
      <IonPopover onDidDismiss={() => setShowPop(false)} isOpen={showPop} animated={true}>
        {loading ? (
          console.log("Carregando dados...")
        ) : error ? (console.error("Erro ao carregar dados...")) :
            (data.stores.filter((store: Store) => store.id === idStore)
              .map(
                (value: Store) => (
                  <div style={{ textAlign: "center" }}>
                    <IonAvatar >
                      <img
                        src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                        alt=""
                        onClick={() => { handleClick(value.id); setShowPop(false) }}
                      />
                    </IonAvatar>
                    <ShowRating starRate={5} />
                    <IonText>
                      {value.name}
                    </IonText>

                  </div>

                )
              )
            )
        }
      </IonPopover>

      {/* <IonContent>
        <Title title="Seja bem-vindo" /> */}

      {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Página inicial" /> */}
      {/* </IonContent> */}
    </IonPage>
  );
};

export default Home;
