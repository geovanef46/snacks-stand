import React from "react";
import { IonIcon } from "@ionic/react";
import { star, starHalf } from "ionicons/icons";

type ShowRatingParams = {
  starRate: number;
};

const ShowRating = ({ starRate }: ShowRatingParams) => {
  const getRate = () => {
    let a = [];
    let i = 0;

    for (i = 0; i < Math.floor(starRate); i++) {
      a.push(<IonIcon slot="end" icon={star} color="dark" key={i} />);
    }
    if (starRate && starRate % 1 !== 0) {
      a.push(<IonIcon slot="end" icon={starHalf} color="dark" key={i} />);
    }
    return a;
  };

  return <div>{getRate()}</div>;
};

export default ShowRating;
