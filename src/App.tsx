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

/* Theme variables */
import "./theme/variables.css";
import "./styles.css";

import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
} from "@ionic/react";

import { person, search, basket } from "ionicons/icons";

import Menu from "./components/Menu";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Bag from "./pages/Bag";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Orders from "./pages/Orders";
import Favorites from "./pages/Favorites";
import Comments from "./pages/Comments";
import Stores from "./pages/Stores";
import Logout from "./pages/Logout";

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />

          <IonTabs>
            <IonRouterOutlet id="main">
              <Redirect from="/" to="/page/Snaks" exact />

              <Route path="/page/:name" component={Home} exact />
              <Route path="/login" component={Login} exact />
              <Route path="/bag" component={Bag} exact />
              <Route
                path="/profile"
                render={(props) => {
                  return false ? <Profile /> : <Login />;
                }}
                exact
              />
              <Route path="/search" component={Search} exact />

              <Route path="/orders" component={Orders} exact />
              <Route path="/favorites" component={Favorites} exact />
              <Route path="/comments" component={Comments} exact />
              <Route path="/stores" component={Stores} exact />
              <Route path="/logout" component={Logout} exact />
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
              <IonTabButton tab="search" href="/search">
                <IonIcon icon={search} />
                <IonLabel>Pesquisar</IonLabel>
                {/* <IonBadge>6</IonBadge> */}
              </IonTabButton>

              <IonTabButton tab="bag" href="/bag">
                <IonIcon icon={basket} />
                <IonLabel>Sacola</IonLabel>
              </IonTabButton>

              <IonTabButton
                tab="profile"
                href="/profile"
                // selected={location.pathname == "/profile"}
              >
                <IonIcon icon={person} />
                <IonLabel>Perfil</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
