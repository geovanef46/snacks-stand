import React from "react";
import {
    IonItem,
    IonAvatar,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonButton,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonIcon,
} from "@ionic/react";

import Snack from "../../models/Snack";
import { basket, arrowForward } from "ionicons/icons";

type SnackItemParams = {
    snack: Snack;
};

const SnackItem = ({ snack }: SnackItemParams) => {

    return (
        <IonGrid>
            <IonRow>
                <IonCol>
                <IonAvatar>
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
              </IonAvatar>
                </IonCol>
                <IonCol>
                        <h3>{snack.name}</h3>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonCard color="light">
                        <IonCardContent color="dark">
                            <p>{snack.description}</p>
                        </IonCardContent>
                    </IonCard>
                </IonCol>
            </IonRow>
            <IonRow>

            </IonRow>
            <IonRow >
            <IonItemSliding>
            <IonItemOptions side="start">
              <IonItemOption color="dark" expandable>
                <IonIcon icon={basket} slot="icon-only" />
              </IonItemOption>
            </IonItemOptions>
            <IonItem color="light">
              <IonIcon icon={arrowForward} color="dark" />
              <p>Enviar para sua Cesta</p>
            </IonItem>
          </IonItemSliding>
            </IonRow>
        </IonGrid>

    );
};

export default SnackItem;
