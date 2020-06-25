import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import { useParams } from "react-router";
import Header from "../../components/Header";
import SnackDetails from "../../components/SnackDetails";
import Snack from "../../models/Snack";

const snacks: Snack[] = [
  {
    id: 1,
    name: "Pastel de Frango",
    price: 4,
    description:
      "Pastel de frango Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Casamentiss faiz malandris se pirulitá. Copo furadis é disculpa de bebadis, arcu quam euismod magna. A ordem dos tratores não altera o pão duris.",
  },
  {
    id: 2,
    name: "Pastel de Frango",
    price: 4,
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Atirei o pau no gatis, per gatis num morreus. Cevadis im ampola pa arma uma pindureta.",
  },
  {
    id: 3,
    name: "Pastel de Frango",
    price: 4,
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma pindureta. Per aumento de cachacis, eu reclamis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Leite de capivaris, leite de mula manquis sem cabeça.",
  },
  {
    id: 4,
    name: "Pastel de Frango",
    price: 4,
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis, nisi eros vermeio. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Manduma pindureta quium dia nois paga. Per aumento de cachacis, eu reclamis.",
  },
  {
    id: 5,
    name: "Pastel de Frango",
    price: 4,
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis, nisi eros vermeio. Quem manda na minha terra sou euzis! Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.",
  },
  {
    id: 6,
    name: "Pastel de Frango",
    price: 4,
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Paisis, filhis, espiritis santis. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.",
  },
];

const Snacks = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <IonPage>
      <Header />
      <IonContent>
        {snacks.map((value, index) => {
          if (value.id.toString() === id) {
            return <SnackDetails snack={value} key={index} />;
          }
        })}
      </IonContent>
    </IonPage>
  );
};

export default Snacks;
