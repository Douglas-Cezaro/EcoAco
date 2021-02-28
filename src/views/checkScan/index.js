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
} from "./styles";

export default function CheckScan() {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.reset({
      routes: [{ name: "Home" }],
    });
  };

  return (
    <Container>
      <HeaderArea>
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
      <Petala>
        <PetalaText>Pontos</PetalaText>
        <PetalaText style={{ fontSize: 50 }}>25</PetalaText>
      </Petala>
    </Container>
  );
}
