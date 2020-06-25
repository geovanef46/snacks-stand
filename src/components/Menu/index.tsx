import React from "react";
import { useLocation } from "react-router-dom";
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";

import {
  clipboardOutline,
  chatbubbleOutline,
  archiveSharp,
  heartOutline,
  heartSharp,
  mailSharp,
  logOutOutline,
  paperPlaneSharp,
  restaurantOutline,
  trashSharp,
} from "ionicons/icons";

import "./styles.css";
import { connect } from "react-redux";
import { StateType } from "../../store";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

interface MenuParams {
  userName: string;
}

const appPages: AppPage[] = [
  {
    title: "Pedidos",
    url: "/orders",
    iosIcon: clipboardOutline,
    mdIcon: mailSharp,
  },
  {
    title: "Favoritos",
    url: "/favorites",
    iosIcon: heartOutline,
    mdIcon: paperPlaneSharp,
  },
  {
    title: "Comentários",
    url: "/comments",
    iosIcon: chatbubbleOutline,
    mdIcon: heartSharp,
  },
  {
    title: "Lanchonetes",
    url: "/stores",
    iosIcon: restaurantOutline,
    mdIcon: archiveSharp,
  },
  {
    title: "Sair",
    url: "/logout",
    iosIcon: logOutOutline,
    mdIcon: trashSharp,
  },
];

const Menu = ({ userName }: MenuParams) => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Bem-vindo</IonListHeader>
          <IonNote>{userName}</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" icon={appPage.iosIcon} color="dark" />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

const mapStateToProps = (state: StateType) => {
  return {
    userName: state.user.name,
  };
};

export default connect(mapStateToProps)(Menu);
