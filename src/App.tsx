import React from "react";

import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import { Plugins } from "@capacitor/core";

import { connect } from "react-redux";
import { Dispatch } from "redux";

/* Theme variables */
import "./theme/variables.css";
import "./styles.css";

import Menu from "./components/Menu";

import Login from "./pages/Login";
import Logout from "./pages/Logout";
import MainTabs from "./pages/MainTabs";
import RegisterUser from "./pages/RegisterUser";
import { setUser } from "./store/action/user";

type AppParams = {
  dispatch: Dispatch;
};

const { Storage } = Plugins;

const App = ({ dispatch }: AppParams) => {
  Storage.get({ key: "userData" }).then((userData) => {
    if (userData.value) dispatch(setUser(JSON.parse(userData.value)));
  });

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main" when="true">
          <Menu />
          <IonRouterOutlet id="main">
            <Redirect from="/" to="/login" exact />

            <Route path="/login" component={Login} exact />
            <Route path="/logout" component={Logout} exact />
            <Route path="/register-user" component={RegisterUser} exact />
            <Route path="/" component={MainTabs} />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default connect()(App);
