import React, { useState } from "react";
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

import ItemOrder from "../../models/ItemOrder";
import "./styles.css";

type ItemProps = {
  item: ItemOrder;
};

const ItemBag: React.FC<ItemProps> = ({ item }) => {
  const [amountState, setAmountState] = useState(item.amount);

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
              onClick={() => setAmountState(amountState + 1)}
              color="dark"
            >
              <IonIcon slot="icon-only" icon={add} />
            </IonButton>
            <div className="div-amount">
              <p>{amountState}</p>
            </div>
            <IonButton
              onClick={() => setAmountState(amountState - 1)}
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

export default ItemBag;
