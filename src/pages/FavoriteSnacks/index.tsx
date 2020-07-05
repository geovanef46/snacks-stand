import React from "react";
import { IonPage, IonContent, IonText } from "@ionic/react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { connect } from "react-redux";

import Header from "../../components/Header";
import Title from "../../components/Title";
import Snack from "../../models/Snack";
import SnackItem from "../../components/SnackItem";
import { StateType } from "../../store";
import "./styles.css";
import user from "../../store/reducer/user";

const GET_FAVORITE_SNACKS = gql`
  query GetFavoriteSnacks($id: ID!) {
    user(id: $id) {
      favorites {
        id
        name
        description
        price
      }
    }
  }
`;

const REMOVE_FAVORITE_SNACK = gql`
  mutation RemoveFavoriteSnack($userId: ID!, $snackId: ID!) {
    removeFavorite(user_id: $userId, snack_id: $snackId)
  }
`;

type FavoriteSnacksParams = {
  userId: number;
};

const FavoriteSnacks = ({ userId }: FavoriteSnacksParams) => {
  // const [snacks, setSnacks] = useState<Snack[]>(defaultSnacks);

  const [removeFavorite] = useMutation(REMOVE_FAVORITE_SNACK);

  const removeSnack = (snackId: number) => {
    removeFavorite({
      variables: {
        userId,
        snackId,
      },
    })
      .then(({ data }) => {
        if (data.removeFavorite) {
          alert("Removido com sucesso");
        }
      })
      .catch((err) => console.log(err));
  };

  const { loading, error, data } = useQuery(GET_FAVORITE_SNACKS, {
    variables: {
      id: userId,
    },
  });

  if (!userId) {
    return (
      <IonPage>
        <Header />
        <IonContent className="favorite-snacks">
          <Title title="Lanches Favoritos" />

          <IonText>Realize Login para acessar</IonText>
        </IonContent>
      </IonPage>
    );
  } else {
    return (
      <IonPage>
        <Header />
        <IonContent className="favorite-snacks">
          <Title title="Lanches Favoritos" />

          {loading || error ? (
            <IonText>Carregando ou ERROR...</IonText>
          ) : (
            data?.user.favorites.map((snack: Snack) => {
              return (
                <SnackItem
                  snack={snack}
                  key={snack.id}
                  removeSnack={removeSnack}
                  isAdd={false}
                />
              );
            })
          )}
        </IonContent>
      </IonPage>
    );
  }
};

const mapStateToProps = (state: StateType) => {
  return {
    userId: parseInt(state.user.id),
  };
};

export default connect(mapStateToProps)(FavoriteSnacks);
