import React from "react";
import { IonPage } from "@ionic/react";
import { Map, Marker, TileLayer } from "react-leaflet";

import Header from "../../components/Header";

import "leaflet/dist/leaflet.css";
import "./styles.css";

const Home: React.FC = () => {
  // const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <Header />

      <Map center={[-6.9929002, -36.242569]} zoom={15}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-6.985344, -36.241385]} />
      </Map>

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
