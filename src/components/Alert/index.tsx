import React from "react";
import { IonAlert } from "@ionic/react";

type AlertParams = {
  header?: string;
  message: string;
  isOpen: boolean;
  onDidDismiss: () => void;
};

const Alert = ({ header, message, isOpen, onDidDismiss }: AlertParams) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onDidDismiss}
      header={header}
      message={message}
      buttons={[
        {
          text: "Ok",
          handler: () => {
            console.log("Confirm Okay");
          },
        },
      ]}
    />
  );
};

export default Alert;
