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
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import "./styles.css";
import Alert from "../../components/Alert";
import { setUser } from "../../store/action/user";
import { StateType } from "../../store";
import { UserStateType } from "../../store/reducer/user";

const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
        name
      }
    }
  }
`;

type LoginParams = {
  dispatch: Dispatch;
  user: UserStateType;
};

const Login = ({ dispatch, user }: LoginParams) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const history = useHistory();

  const [login] = useMutation(LOGIN);

  const handleOnClick = () => {
    login({
      variables: {
        username,
        password,
      },
    })
      .then(({ data }) => {
        dispatch(
          setUser({
            id: data.login.user.id,
            token: data.login.token,
          })
        );
        history.push("/home");
      })
      .catch((err) => {
        alert("Ocorreu um erro, verifique o console");
        console.log(err);
      });
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
                value={username}
                onIonChange={(e) => setUsername(e.detail.value!)}
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

const mapStateToProps = (state: StateType) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Login);
