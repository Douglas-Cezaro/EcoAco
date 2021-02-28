import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  HeaderArea,
  HeaderContent,
  HeaderBack,
  HeaderBackText,
  ContainerTitle,
  Title,
  Petala,
  PetalaText,
  Styles,
} from "./styles";

export default function CheckScan() {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.reset({
      routes: [{ name: "Home" }],
    });
  };

  const handlerHome = () => {
    navigation.reset({
      routes: [{ name: "Home" }],
    });
  };

  return (
    <Container>
      <HeaderArea style={(Styles.PetalaStyle, { elevation: 10, zIndex: 1 })}>
        <HeaderContent>
          <HeaderBack onPress={handleBack}>
            <AntDesign name="left" size={30} color="white" />
            <HeaderBackText>Voltar</HeaderBackText>
          </HeaderBack>
        </HeaderContent>
      </HeaderArea>
      <ContainerTitle>
        <Title>
          Muito obrigado por fazer parte deste ecossistema, esses são seus
          pontos adquirido nessa sessão!
        </Title>
      </ContainerTitle>
      <Petala onPress={handlerHome}>
        <PetalaText>Pontos</PetalaText>
        <PetalaText style={{ fontSize: 50 }}>25</PetalaText>
      </Petala>
    </Container>
  );
}
