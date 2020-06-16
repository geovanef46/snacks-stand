import React, { useRef } from "react";
import {
  IonItem,
  IonAvatar,
  IonLabel,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonIcon,
} from "@ionic/react";
import { basket, trash, heart } from "ionicons/icons";
import { useHistory, useParams } from "react-router-dom";
import Snack from "../../models/Snack";
import "./styles.css";

type SnackItemParams = {
  snack: Snack;
  isAdd: boolean; // To add in favorites or not -> verify after
  removeSnack: (id: number) => void;
};

const SnackItem = ({ snack, removeSnack, isAdd }: SnackItemParams) => {
  const { id } = useParams<{ id: string }>();
  
  const itemSlidingRef = useRef<HTMLIonItemSlidingElement>(null);

  const history = useHistory();

  const handleClick = (id: number) => {
    history.push(`/search/${id}`);
  };

  return (
    <div  className="snack-item">
      <IonItemSliding className="snack-item" ref={itemSlidingRef}>
        <IonItem  onClick={() => handleClick(snack.id)} color="light" lines="none" button={true}>
          <IonAvatar slot="start">
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </IonAvatar>
          <IonLabel>
            <h2>{snack.name}</h2>
            <p>{snack.description}</p>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="start">
          <IonItemOption
            color="dark"
            expandable
            onClick={() => console.log("Add to cart item")}
          >
            <IonIcon icon={basket} slot="icon-only" />
          </IonItemOption>
        </IonItemOptions>

        <IonItemOptions side="end">
          {isAdd ? (
            <IonItemOption
              color="success"
              onClick={() => {
                // removeSnack(snack.id);
                itemSlidingRef?.current?.closeOpened();
              }}
            >
              <IonIcon icon={heart} slot="icon-only" />
            </IonItemOption>
          ) : (
            <IonItemOption
              color="danger"
              onClick={() => {
                removeSnack(snack.id);
                itemSlidingRef?.current?.closeOpened();
              }}
            >
              <IonIcon icon={trash} slot="icon-only" />
            </IonItemOption>
          )}
        </IonItemOptions>
      </IonItemSliding>
    </div>
  );
};

export default SnackItem;
