import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonList,
  IonItemDivider,
  IonItem,
  IonInput,
  IonLabel,
} from "@ionic/react";

import "./styles.css";

const Login: React.FC = () => {
  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();

  const [user, setUser] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <IonPage id="page-login">
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large">Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>Seja Bem-vindo</h1>

        {/* <IonList> */}
        <IonItem>
          <IonLabel position="stacked">Usuário</IonLabel>
          <IonInput
            value={user}
            onIonChange={(e) => setUser(e.detail.value!)}
          ></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Senha</IonLabel>
          <IonInput
            value={password}
            onIonChange={(e) => setPassword(e.detail.value!)}
            type="password"
          ></IonInput>
        </IonItem>

        {/* <IonItem> */}
        <IonButton color="dark">Login</IonButton>
        {/* </IonItem> */}

        {/* <IonItem> */}
        <IonButton fill="outline" color="dark">
          Cadastre-se
        </IonButton>
        {/* </IonItem> */}
        {/* </IonList> */}
      </IonContent>
    </IonPage>
  );
};

export default Login;
