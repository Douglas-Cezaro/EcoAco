import React, { useState } from "react";
import { Entypo, FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Modal, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  HeaderArea,
  HeaderContent,
  HeaderBack,
  HeaderBackText,
  HeaderTitle,
  Scroller,
  Form,
  Input,
  BtnSave,
  BtnText,
  Styles,
} from "./styles";

export default function Register() {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.reset({
      routes: [{ name: "Home" }],
    });
  };

  const handlerSave = () => {
    navigation.reset({
      routes: [{ name: "Home" }],
    });
  };

  return (
    <Container>
      <HeaderArea style={(Styles.PetalaStyle, { elevation: 10 })}>
        <HeaderContent>
          <HeaderBack onPress={handleBack}>
            <AntDesign name="left" size={30} color="white" />
            <HeaderBackText>Voltar</HeaderBackText>
          </HeaderBack>
          <HeaderTitle>Cadastro de Usuário</HeaderTitle>
        </HeaderContent>
      </HeaderArea>
      <Scroller>
        <Form>
          <Input placeholder="Nome Completo" />

          <Input placeholder="CPF" keyboardType="numeric" />

          <Input placeholder="Data Nasc. 00/00/0000" />

          <Input placeholder="Celular" keyboardType="numeric" />

          <Input placeholder="E-mail" />

          <Input placeholder="Senha" secureTextEntry={true} />

          <Input placeholder="Confirmar Senha" secureTextEntry={true} />

          <BtnSave style={Styles.ButtonStyle} onPress={handlerSave}>
            <BtnText>Salvar</BtnText>
          </BtnSave>
        </Form>
      </Scroller>
    </Container>
  );
}
