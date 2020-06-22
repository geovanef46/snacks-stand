import React from "react";
import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonText,
  IonInput,
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import Header from "../../components/Header";
import Title from "../../components/Title";

const RegisterUser = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <Title title="Cadastro de usuário" />

        <form onSubmit={() => {}}>
          <IonList lines="full" class="ion-no-margin ion-no-padding">
            <IonItem>
              <IonLabel position="stacked">
                First Name <IonText color="danger">*</IonText>
              </IonLabel>
              <IonInput
                required
                type="text"
                // onInpuinput="handleFirstNameValue(event)"
              />
            </IonItem>
          </IonList>
        </form>

        {/* <ExploreContainer name="Profile" /> */}
      </IonContent>
    </IonPage>
  );
};

export default RegisterUser;
