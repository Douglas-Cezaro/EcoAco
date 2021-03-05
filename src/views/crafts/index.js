import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  HeaderArea,
  HeaderContent,
  HeaderBack,
  HeaderBackText,
  HeaderTitleContainer,
  HeaderTitle,
  ContainerProducts,
  CardProduct,
  CardContentLeft,
  CardContentImage,
  CardContentRight,
  CardPrice,
  CardTitle,
  CardDescription,
  CardButton,
  CardButtonTxt,
  ButtonAdd,
  Styles,
} from "./styles";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
const ImageBoneco = require("../../../assets/images/boneco.png");

export default function Crafts() {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.reset({
      routes: [{ name: "Home" }],
    });
  };

  const handleAdd = () => {
    navigation.navigate("FormCrafts");
  };

  return (
    <Container>
      <HeaderArea style={(Styles.PetalaStyle, { elevation: 10 })}>
        <HeaderContent>
          <HeaderBack onPress={handleBack}>
            <AntDesign name="left" size={30} color="white" />
            <HeaderBackText>Voltar</HeaderBackText>
          </HeaderBack>
          <HeaderTitleContainer>
            <HeaderTitle>Loja do Artesanato </HeaderTitle>
          </HeaderTitleContainer>
        </HeaderContent>
      </HeaderArea>
      <ContainerProducts>
        <CardProduct>
          <CardContentLeft>
            <CardContentImage source={ImageBoneco} resizeMode="cover" />
            <CardPrice>R$ 50,00</CardPrice>
          </CardContentLeft>
          <CardContentRight>
            <CardTitle>Boneco de Lata</CardTitle>
            <CardDescription>
              Minha boneca de lata Bateu a cabeça no chão Levou mais de uma hora
              Pra fazer a arrumação
            </CardDescription>
            <CardButton>
              <CardButtonTxt>Comprar</CardButtonTxt>
            </CardButton>
          </CardContentRight>
        </CardProduct>
      </ContainerProducts>
      <ButtonAdd onPress={handleAdd}>
        <FontAwesome name="plus" size={30} color="white" />
      </ButtonAdd>
    </Container>
  );
}
