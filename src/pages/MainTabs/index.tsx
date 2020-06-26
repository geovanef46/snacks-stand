import React from "react";
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
} from "@ionic/react";
import { Route } from "react-router";
import { search, basket, person } from "ionicons/icons";
import { connect } from "react-redux";

import Search from "../Search";
import Bag from "../Bag";
import Home from "../Home";
import Orders from "../Orders";
import FavoriteSnacks from "../FavoriteSnacks";
import Comments from "../Comments";
import Stores from "../Stores";
import StoreDetails from "../StoreDetails";
import SnackDetails from "../SnackDetails";
import Profile from "../Profile";
import { StateType } from "../../store";
import "./styles.css";

type MainParams = {
  countItemsBag: number;
};

const MainTabs = ({ countItemsBag }: MainParams) => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact />
        <Route path="/search" component={Search} exact />
        <Route path="/bag" component={Bag} exact />
        <Route path="/profile" component={Profile} exact />
        {/* <Route
          path="/tabs/profile"
          component={Profile}
          //   render={(props) => {
          //     return false ? <Profile /> : <Login />;
          //   }}
          exact
        /> */}
        <Route path="/orders" component={Orders} exact />
        <Route path="/favorites" component={FavoriteSnacks} exact />
        <Route path="/comments" component={Comments} exact />
        <Route path="/stores" component={Stores} exact />
        <Route path="/stores/:id" component={StoreDetails} exact />
        <Route path="/snacks/:id" component={SnackDetails} exact />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="search" href="/search">
          <IonIcon icon={search} />
          <IonLabel>Pesquisar</IonLabel>
        </IonTabButton>

        <IonTabButton tab="bag" href="/bag">
          <IonIcon icon={basket} />
          <IonLabel>Sacola</IonLabel>
          {countItemsBag > 0 && (
            <IonBadge color="danger">{countItemsBag}</IonBadge>
          )}
        </IonTabButton>

        <IonTabButton tab="profile" href="/profile">
          <IonIcon icon={person} />
          <IonLabel>Perfil</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

const mapStateToProps = (state: StateType) => {
  return {
    countItemsBag: state.bag.items.length,
  };
};

export default connect(mapStateToProps)(MainTabs);
