import React, { useState, useEffect, FormEvent } from "react";
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import axios from "axios";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Title from "../../components/Title";
import "./styles.css";

interface UFResponse {
  nome: string;
  sigla: string;
}

interface CityResponse {
  nome: string;
}

const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $phone: String!
    $username: String!
    $password: String!
    $address: AddressInput!
  ) {
    createUser(
      name: $name
      phone: $phone
      username: $username
      password: $password
      address: $address
    ) {
      id
    }
  }
`;

const RegisterUser = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [district, setDistrict] = useState("");
  const [stateSelected, setStateSelected] = useState("");
  const [citySelected, setCitySelected] = useState("");

  const [states, setStates] = useState<UFResponse[]>([]);
  const [cities, setCities] = useState<CityResponse[]>([]);

  useEffect(() => {
    axios
      .get<UFResponse[]>(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      )
      .then((res) => {
        setStates(res.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get<CityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateSelected}/municipios`
      )
      .then((res) => {
        setCities(res.data);
      });
  }, [stateSelected]);

  const [createUser, { data }] = useMutation(CREATE_USER);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createUser({
      variables: {
        name,
        phone,
        username,
        password,
        address: {
          street,
          number: parseInt(number),
          district,
          complement,
          state: stateSelected,
          city: citySelected,
        },
      },
    });
    alert("Registrado...");
  };

  return (
    <IonPage>
      <IonContent id="register-user-container">
        <IonGrid>
          <Title title="Cadastro de usuário" />

          <form onSubmit={handleSubmit}>
            <IonRow>
              <IonCol>
                <IonLabel position="stacked">Nome</IonLabel>
                <IonInput
                  value={name}
                  onIonChange={(e) => setName(e.detail.value!)}
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel position="stacked">Telefone</IonLabel>
                <IonInput
                  value={phone}
                  onIonChange={(e) => setPhone(e.detail.value!)}
                />
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonText>Informações de Localização</IonText>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonLabel position="stacked">Rua</IonLabel>
                <IonInput
                  value={street}
                  onIonChange={(e) => setStreet(e.detail.value!)}
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel position="stacked">Número</IonLabel>
                <IonInput
                  type="number"
                  value={number}
                  onIonChange={(e) => setNumber(e.detail.value!)}
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel position="stacked">Complemento</IonLabel>
                <IonInput
                  value={complement}
                  onIonChange={(e) => setComplement(e.detail.value!)}
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel position="stacked">Bairro</IonLabel>
                <IonInput
                  value={district}
                  onIonChange={(e) => setDistrict(e.detail.value!)}
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel position="stacked">Estado</IonLabel>
                <IonSelect
                  value={stateSelected}
                  interface="action-sheet"
                  onIonChange={(e) => setStateSelected(e.detail.value)}
                >
                  {states.map((uf) => (
                    <IonSelectOption value={uf.sigla} key={uf.sigla}>
                      {uf.nome}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel position="stacked">Cidade</IonLabel>
                <IonSelect
                  value={citySelected}
                  interface="action-sheet"
                  onIonChange={(e) => setCitySelected(e.detail.value)}
                >
                  {cities.map((city) => (
                    <IonSelectOption value={city.nome} key={city.nome}>
                      {city.nome}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonText>Informações do sistema</IonText>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonLabel position="stacked">Username</IonLabel>
                <IonInput
                  value={username}
                  onIonChange={(e) => setUserName(e.detail.value!)}
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel position="stacked">Senha</IonLabel>
                <IonInput
                  type="password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel position="stacked">Confirmação de senha</IonLabel>
                <IonInput
                  type="password"
                  value={confirmPassword}
                  onIonChange={(e) => setConfirmPassword(e.detail.value!)}
                />
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonButton
                  fill="outline"
                  color="dark"
                  className="center"
                  type="submit"
                >
                  Cadastrar
                </IonButton>
              </IonCol>
            </IonRow>
          </form>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default RegisterUser;
