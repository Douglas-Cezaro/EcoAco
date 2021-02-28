import React from "react";
import { Container, ButtonScan, TextBtnScan, Styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

export default function QrCode() {
  const navigation = useNavigation();

  const handleCheck = () => {
    navigation.reset({
      routes: [{ name: "CheckScan" }],
    });
  };

  return (
    <Container>
      <FontAwesome name="qrcode" size={300} color="#FFF" />
      <ButtonScan style={Styles.ButtonStyle} onPress={handleCheck}>
        <TextBtnScan>Escanear</TextBtnScan>
      </ButtonScan>
    </Container>
  );
}
