import React from "react";
import {
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonNote,
  IonButton,
} from "@ionic/react";
import { add, remove } from "ionicons/icons";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import ItemOrder from "../../models/ItemOrder";
import { alterAmountItem } from "../../store/action/bag";
import "./styles.css";

type ItemProps = {
  dispatch: Dispatch;
  item: ItemOrder;
};

const ItemBag = ({ item, dispatch }: ItemProps) => {
  return (
    <IonItem color="light" className="item-bag">
      <IonGrid>
        <IonRow>
          <IonCol size="9">
            <h4>{item.snack.name}</h4>
            <IonNote>{item.snack.description}</IonNote>
          </IonCol>
          <IonCol size="3">
            <IonButton
              onClick={() =>
                dispatch(
                  alterAmountItem({
                    ...item,
                    amount: item.amount + 1,
                  })
                )
              }
              color="dark"
            >
              <IonIcon slot="icon-only" icon={add} />
            </IonButton>
            <div className="div-amount">
              <p>{item.amount}</p>
            </div>
            <IonButton
              onClick={() =>
                dispatch(
                  alterAmountItem({
                    ...item,
                    amount: item.amount - 1,
                  })
                )
              }
              color="dark"
            >
              <IonIcon slot="icon-only" icon={remove} />
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonItem>
  );
};

export default connect()(ItemBag);
