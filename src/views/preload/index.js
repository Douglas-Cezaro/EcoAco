import React from "react";
import { Image } from "react-native";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

const Logo = require("../../../assets/images/logo.png");

export default function Preload() {
  const navigation = useNavigation();

  const handlerHome = () => {
    navigation.reset({
      routes: [{ name: "Login" }],
    });
  };

  setTimeout(() => {
    handlerHome();
  }, 1000);

  return (
    <Container>
      <Image source={Logo} style={{ width: 400, height: 400 }} />
    </Container>
  );
}
