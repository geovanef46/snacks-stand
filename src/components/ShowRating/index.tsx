import React from "react";
import { IonIcon } from "@ionic/react";
import { star, starHalf } from "ionicons/icons";

type ShowRatingParams = {
  starRate: number;
};

const ShowRating = ({ starRate }: ShowRatingParams) => {
  const getRate = () => {
    const a = [];

    for (let i = 0; i < Math.floor(starRate); i++) {
      a.push(<IonIcon slot="end" icon={star} color="dark" />);
    }
    if (starRate % 1 !== 0) {
      a.push(<IonIcon slot="end" icon={starHalf} color="dark" />);
    }
    return a;
  };

  return <div>{getRate()}</div>;
};

export default ShowRating;
