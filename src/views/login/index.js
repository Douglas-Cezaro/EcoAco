import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import {
  Container,
  HeaderArea,
  HeaderContent,
  Styles,
  Logo,
  ContainerTitle,
  Title,
  Logos,
  Facebook,
  Gmail,
  Scroller,
  Form,
  Input,
  BtnSave,
  BtnText,
  Footer,
  FooterTitle,
  FooterBtn,
  FooterBtnText,
} from "./styles";

const ImageLogo = require("../../../assets/images/logo.png");

export default function Home() {
  const navigation = useNavigation();

  const handlerLogin = () => {
    navigation.reset({
      routes: [{ name: "Home" }],
    });
  };

  const handlerRegister = () => {
    navigation.navigate("Register");
  };
  return (
    <Container>
      <HeaderArea style={(Styles.PetalaStyle, { elevation: 10 })}>
        <HeaderContent>
          <Logo source={ImageLogo} />
        </HeaderContent>
      </HeaderArea>
      <ContainerTitle>
        <Title>Antenticação</Title>
        <Logos>
          <Facebook>
            <FontAwesome name="facebook" size={24} color="#3A58BA" />
          </Facebook>
          <Gmail>
            <AntDesign name="google" size={24} color="#D6281D" />
          </Gmail>
        </Logos>
      </ContainerTitle>
      <Form>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" secureTextEntry={true} />
        <BtnSave style={Styles.ButtonStyle} onPress={handlerLogin}>
          <BtnText>Entrar</BtnText>
        </BtnSave>
      </Form>
      <Footer>
        <FooterTitle>Não tem uma conta?</FooterTitle>
        <FooterBtn onPress={handlerRegister}>
          <FooterBtnText>Inscrever-se</FooterBtnText>
        </FooterBtn>
      </Footer>
    </Container>
  );
}
