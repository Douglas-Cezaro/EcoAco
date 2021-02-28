import React, { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import {
  Container,
  HeaderArea,
  HeaderContent,
  HeaderBack,
  HeaderBackText,
  HeaderTitle,
  HeaderContainerStore,
  HeaderStore,
  PetalaTotal,
  PetalaTotalContent,
  PetalaTotalIcon,
  PetalaTotalText,
  Scroller,
  ContainerProducts,
  CardProduct,
  ContainerImage,
  CardImage,
  CardContainerText,
  CardText,
  CardSubText,
  CardTextQtd,
  CardContent,
  CardContainerBtnQtd,
  CardBtnLess,
  CardTextSum,
  CardBtnPlus,
  ButtonFinish,
  ButtonText,
  Styles,
} from "./styles";

const Nescau = require("../../../assets/images/nescau.png");
const Sardinha = require("../../../assets/images/sardinha.png");
const Ervilha = require("../../../assets/images/ervilha.png");
const Pessago = require("../../../assets/images/pessago.png");

export default function Store() {
  const navigation = useNavigation();

  const [products, setProducts] = useState([
    {
      id: 0,
      val: 10,
      qtd: 0,
    },
    {
      id: 1,
      val: 2,
      qtd: 0,
    },
    {
      id: 2,
      val: 7,
      qtd: 0,
    },
    {
      id: 3,
      val: 6,
      qtd: 0,
    },
  ]);
  const [sum, setSum] = useState(0);
  const [store, setStore] = useState(300);

  const addProducts = (index) => {
    const totalProduct = products;
    const product = products.filter((prod) => {
      if (prod.id === index) {
        return prod;
      }
    });
    var sumVar = sum;
    var storeVar = store;
    storeVar -= Number(product[0].val);

    if (storeVar < 0) {
      Alert.alert("Epa Epa Epa", "Sem Saldo para continuar!");
      return;
    }

    setStore(storeVar);

    sumVar += Number(product[0].val);

    setSum(sumVar);
    totalProduct[index].qtd += 1;
    setProducts(totalProduct);
  };

  const removeProducts = (index) => {
    const totalProduct = products;

    const product = products.filter((prod) => {
      if (prod.id === index) {
        return prod;
      }
    });
    var sumVar = sum;
    if (sumVar > 0) {
      sumVar -= product[0].val;
      var storeVar = store;
      storeVar += Number(product[0].val);
      setStore(storeVar);
      setSum(sumVar);
      totalProduct[index].qtd -= 1;
      setProducts(totalProduct);
    }
  };

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
        <HeaderContainerStore>
          <HeaderStore>Saldo : pts {store}</HeaderStore>
        </HeaderContainerStore>
      </HeaderArea>
      <PetalaTotal>
        <PetalaTotalContent>
          <PetalaTotalIcon>
            <AntDesign name="shoppingcart" size={30} color="white" />
          </PetalaTotalIcon>
          <PetalaTotalText>pts:{sum}</PetalaTotalText>
        </PetalaTotalContent>
      </PetalaTotal>
      <ContainerProducts>
        <CardProduct>
          <ContainerImage>
            <CardImage source={Nescau} />
          </ContainerImage>
          <CardContainerText>
            <CardText>Achocolatado</CardText>
            <CardSubText>pts : 10</CardSubText>
            <CardTextQtd>Quantidade</CardTextQtd>
          </CardContainerText>
          <CardContent>
            <CardContainerBtnQtd>
              <CardBtnLess onPress={() => removeProducts(0)}>
                <Ionicons name="remove-outline" size={35} color="white" />
              </CardBtnLess>
              <CardTextSum>{products[0].qtd}</CardTextSum>
              <CardBtnPlus onPress={() => addProducts(0)}>
                <FontAwesome name="plus" size={20} color="white" />
              </CardBtnPlus>
            </CardContainerBtnQtd>
          </CardContent>
        </CardProduct>
        <CardProduct>
          <ContainerImage>
            <CardImage source={Sardinha} />
          </ContainerImage>
          <CardContainerText>
            <CardText>Sardinha</CardText>
            <CardSubText>pts : 2</CardSubText>
            <CardTextQtd>Quantidade</CardTextQtd>
          </CardContainerText>
          <CardContent>
            <CardContainerBtnQtd>
              <CardBtnLess onPress={() => removeProducts(1)}>
                <Ionicons name="remove-outline" size={35} color="white" />
              </CardBtnLess>
              <CardTextSum>{products[1].qtd}</CardTextSum>
              <CardBtnPlus onPress={() => addProducts(1)}>
                <FontAwesome name="plus" size={20} color="white" />
              </CardBtnPlus>
            </CardContainerBtnQtd>
          </CardContent>
        </CardProduct>
        <CardProduct>
          <ContainerImage>
            <CardImage source={Ervilha} style={{ width: 100 }} />
          </ContainerImage>
          <CardContainerText>
            <CardText>Ervilha</CardText>
            <CardSubText>pts : 7</CardSubText>
            <CardTextQtd>Quantidade</CardTextQtd>
          </CardContainerText>
          <CardContent>
            <CardContainerBtnQtd>
              <CardBtnLess onPress={() => removeProducts(2)}>
                <Ionicons name="remove-outline" size={35} color="white" />
              </CardBtnLess>
              <CardTextSum>{products[2].qtd}</CardTextSum>
              <CardBtnPlus onPress={() => addProducts(2)}>
                <FontAwesome name="plus" size={20} color="white" />
              </CardBtnPlus>
            </CardContainerBtnQtd>
          </CardContent>
        </CardProduct>
        <CardProduct>
          <ContainerImage>
            <CardImage source={Pessago} style={{ width: 100 }} />
          </ContainerImage>
          <CardContainerText>
            <CardText>Pessago</CardText>
            <CardSubText>pts : 6</CardSubText>
            <CardTextQtd>Quantidade</CardTextQtd>
          </CardContainerText>
          <CardContent>
            <CardContainerBtnQtd>
              <CardBtnLess onPress={() => removeProducts(3)}>
                <Ionicons name="remove-outline" size={35} color="white" />
              </CardBtnLess>
              <CardTextSum>{products[3].qtd}</CardTextSum>
              <CardBtnPlus onPress={() => addProducts(3)}>
                <FontAwesome name="plus" size={20} color="white" />
              </CardBtnPlus>
            </CardContainerBtnQtd>
          </CardContent>
        </CardProduct>
      </ContainerProducts>
      <ButtonFinish style={(Styles.PetalaStyle, { elevation: 10 })}>
        <ButtonText>Finalizar</ButtonText>
      </ButtonFinish>
    </Container>
  );
}
