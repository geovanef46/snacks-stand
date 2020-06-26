import React from "react";
import {
  IonContent,
  IonPage,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
} from "@ionic/react";
import { arrowForward, logoUsd } from "ionicons/icons";
import { connect } from "react-redux";

import Header from "../../components/Header";
import Title from "../../components/Title";
import ItemOrder from "../../models/ItemOrder";
import ItemBag from "../../components/ItemBag";
import { StateType } from "../../store";
import "./styles.css";

type BagParams = {
  items: Array<ItemOrder>;
  totalValue: number;
};

const Bag = ({ items, totalValue }: BagParams) => {
  // const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <Header />

      <IonContent>
        <Title title="Minha Sacola" />

        {items.map((value, index) => (
          <ItemBag key={index} item={value} />
        ))}
        <div className="bag-infos">
          <IonGrid>
            <IonRow className="ion-align-items-center">
              <IonCol>
                <p>VALOR TOTAL</p>
                <p>R$ {totalValue}</p>
              </IonCol>
              <IonCol>
                <p>{items.length} itens</p>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

        <div className="slide-button-container">
          <IonItemSliding>
            <IonItemOptions side="start">
              <IonItemOption color="success" expandable>
                <IonIcon icon={logoUsd} slot="icon-only" />
              </IonItemOption>
            </IonItemOptions>
            <IonItem color="light">
              <IonIcon icon={arrowForward} color="dark" />
              <p>Deslize para pagar</p>
            </IonItem>
          </IonItemSliding>
        </div>
      </IonContent>
    </IonPage>
  );
};

const mapStateToProps = (state: StateType) => {
  return {
    items: state.bag.items,
    totalValue: state.bag.items.reduce((total, item) => {
      return total + item.amount * item.price;
    }, 0),
  };
};

export default connect(mapStateToProps)(Bag);
