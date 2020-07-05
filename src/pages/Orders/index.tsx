import React from "react";
import { IonPage, IonContent, IonText } from "@ionic/react";
import { connect } from "react-redux";

import Header from "../../components/Header";
import Title from "../../components/Title";
import { StateType } from "../../store";

type OrdersParams = {
  userId: string;
};

const Orders = ({ userId }: OrdersParams) => {
  if (!userId) {
    return (
      <IonPage>
        <Header />
        <IonContent>
          <Title title="Meus Pedidos" />
          <IonText>Realize login para acessar</IonText>
        </IonContent>
      </IonPage>
    );
  } else {
    return (
      <IonPage>
        <Header />
        <IonContent>
          <Title title="Meus Pedidos" />
        </IonContent>
      </IonPage>
    );
  }
};

const mapStateToProps = (state: StateType) => {
  return {
    userId: state.user.id,
  };
};

export default connect(mapStateToProps)(Orders);
