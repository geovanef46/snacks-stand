import React from "react";
import {
  IonPage,
  IonContent,
  IonText,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

import Header from "../../components/Header";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { logoutUser } from "../../store/action/user";
import { StateType } from "../../store";
import { Storage } from "@capacitor/core";

type LogoutParams = {
  dispatch: Dispatch;
  userId: string;
};

const Logout = ({ dispatch, userId }: LogoutParams) => {
  const handleLogout = () => {
    Storage.set({
      key: "userData",
      value: JSON.stringify(""),
    }).then(() => {
      dispatch(logoutUser());
    });
  };

  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonGrid>
          {userId ? (
            <>
              <IonRow>
                <IonCol>
                  <IonText>Deseja realmente sair?</IonText>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton
                    color="dark"
                    className="center"
                    onClick={handleLogout}
                  >
                    Sim
                  </IonButton>
                </IonCol>
                <IonCol>
                  <IonButton
                    fill="outline"
                    color="dark"
                    className="center"
                    routerLink="/home"
                  >
                    Não
                  </IonButton>
                </IonCol>
              </IonRow>
            </>
          ) : (
            <IonText>Realize login para acessar essa função</IonText>
          )}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

const mapStateToProps = (state: StateType) => {
  return {
    userId: state.user.id,
  };
};

export default connect(mapStateToProps)(Logout);
