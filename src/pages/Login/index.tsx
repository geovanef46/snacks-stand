import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  IonContent,
  IonPage,
  IonButton,
  IonInput,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

import "./styles.css";
import Alert from "../../components/Alert";

const Login: React.FC = () => {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const history = useHistory();

  const handleOnClick = () => {
    console.log("Conferir login");
    history.push("/home");
  };

  return (
    <IonPage id="page-login">
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1>Seja Bem-vindo</h1>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonLabel position="stacked">Usuário</IonLabel>
              <IonInput
                value={user}
                onIonChange={(e) => setUser(e.detail.value!)}
              />
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonLabel position="stacked">Senha</IonLabel>
              <IonInput
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
                type="password"
              />
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton
                color="dark"
                className="center"
                onClick={handleOnClick}
              >
                Login
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton
                fill="clear"
                size="small"
                color="dark"
                className="center"
                onClick={() => setShowAlert(true)}
              >
                Esqueceu a senha?
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton
                expand="block"
                fill="outline"
                color="dark"
                className="center"
                onClick={() => history.push("/register-user")}
              >
                Cadastre-se
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton
                fill="clear"
                color="dark"
                className="center"
                routerLink="/home"
              >
                Ou acesse como convidado
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        <Alert
          header={"Recuperar senha!"}
          message={"Recuperar senha!"}
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
