import React from "react";
import { AntDesign, FontAwesome5, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  HeaderArea,
  HeaderContent,
  HeaderBack,
  HeaderBackText,
  HeaderTitle,
  ContainerCard,
  Card,
  CardTitle,
  CardContainerDate,
  CardDate,
  CardContainerCamera,
  CardCamera,
  CardSituation,
  CardSitutionAnalise,
  CardSitutionApro,
  CardStore,
  Styles,
} from "./styles";

export default function History() {
  const navigation = useNavigation();

  const handleBack = () => {
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
          <HeaderTitle>Histórico de coleta</HeaderTitle>
        </HeaderContent>
      </HeaderArea>
      <ContainerCard>
        <Card style={Styles.CardStyle}>
          <CardTitle>Latinhas</CardTitle>
          <CardContainerDate>
            <FontAwesome5 name="calendar-alt" size={20} color="#828282" />
            <CardDate>28/02/2021</CardDate>
          </CardContainerDate>
          <CardContainerCamera>
            <Entypo name="camera" size={20} color="#828282" />
            <CardCamera>2</CardCamera>
          </CardContainerCamera>
          <CardSituation>
            SITUAÇÃO : <CardSitutionAnalise>EM ANÁLISE</CardSitutionAnalise>
          </CardSituation>
          <CardStore>PONTOS : 0</CardStore>
        </Card>
        <Card style={Styles.CardStyle}>
          <CardTitle>Sucatas</CardTitle>
          <CardContainerDate>
            <FontAwesome5 name="calendar-alt" size={20} color="#828282" />
            <CardDate>28/02/2021</CardDate>
          </CardContainerDate>
          <CardContainerCamera>
            <Entypo name="camera" size={20} color="#828282" />
            <CardCamera>1</CardCamera>
          </CardContainerCamera>
          <CardSituation>
            SITUAÇÃO : <CardSitutionApro>APROVADO</CardSitutionApro>
          </CardSituation>
          <CardStore>PONTOS : 15</CardStore>
        </Card>
      </ContainerCard>
    </Container>
  );
}
