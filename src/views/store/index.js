import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import {
  Container,
  HeaderArea,
  HeaderContent,
  HeaderBack,
  HeaderBackText,
  HeaderTitle,
  PetalaTotal,
  PetalaTotalContent,
  PetalaTotalIcon,
  PetalaTotalText,
  Scroller,
  ContainerProducts,
  CardProduct,
  ButtonFinish,
  Styles,
} from "./styles";

export default function Store() {
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
          <HeaderTitle>Loja</HeaderTitle>
        </HeaderContent>
      </HeaderArea>
      <PetalaTotal>
        <PetalaTotalContent>
          <PetalaTotalIcon>
            <AntDesign name="shoppingcart" size={40} color="white" />
          </PetalaTotalIcon>
          <PetalaTotalText>pts:0</PetalaTotalText>
        </PetalaTotalContent>
      </PetalaTotal>
      {/* <Scroller></Scroller> */}
      <ContainerProducts>
        <CardProduct style={Styles.CardStyle}></CardProduct>
        <CardProduct style={Styles.CardStyle}></CardProduct>
        <CardProduct style={Styles.CardStyle}></CardProduct>
        <CardProduct style={Styles.CardStyle}></CardProduct>
      </ContainerProducts>
      <ButtonFinish></ButtonFinish>
    </Container>
  );
}
