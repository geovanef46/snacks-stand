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
import { Route, Redirect } from "react-router";
import { search, basket, person } from "ionicons/icons";

import Search from "../Search";
import Bag from "../Bag";
import Home from "../Home";
import Orders from "../Orders";
import Favorites from "../Favorites";
import Comments from "../Comments";
import Stores from "../Stores";

import "./styles.css";

const MainTabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact />
        <Route path="/search" component={Search} exact />
        <Route path="/bag" component={Bag} exact />
        {/* Apenas para teste do login */}
        <Redirect path="/profile" to="/login" exact />
        {/* <Route
          path="/tabs/profile"
          component={Profile}
          //   render={(props) => {
          //     return false ? <Profile /> : <Login />;
          //   }}
          exact
        /> */}
        <Route path="/orders" component={Orders} exact />
        <Route path="/favorites" component={Favorites} exact />
        <Route path="/comments" component={Comments} exact />
        <Route path="/stores" component={Stores} exact />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="search" href="/search">
          <IonIcon icon={search} />
          <IonLabel>Pesquisar</IonLabel>
        </IonTabButton>

        <IonTabButton tab="bag" href="/bag">
          <IonIcon icon={basket} />
          <IonLabel>Sacola</IonLabel>
          <IonBadge>3</IonBadge>
        </IonTabButton>

        <IonTabButton tab="profile" href="/profile">
          <IonIcon icon={person} />
          <IonLabel>Perfil</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainTabs;
