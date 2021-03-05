import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

export const HeaderArea = styled.View`
  position: absolute;
  top: -390px;
  width: 1000px;
  height: 550px;
  border-bottom-left-radius: 500px;
  border-bottom-right-radius: 500px;
  /* primary-green-dark */

  background: #03a678;
  justify-content: center;
  align-items: center;
`;

export const HeaderContent = styled.View`
  top: 200px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const HeaderBack = styled.TouchableOpacity`
  right: 120px;
  top: 10px;
  flex-direction: row;
  align-items: center;
`;

export const HeaderBackText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  right: 40px;
`;

export const HeaderContainerStore = styled.View`
  top: 200px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const HeaderStore = styled.Text`
  color: #d5eff2;
  left: 10px;
  font-size: 30px;
  font-weight: bold;
`;

export const PetalaTotal = styled.TouchableOpacity`
  width: 200px;
  height: 100px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  /* primary-green-medium */

  background: #88bf0f;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  align-items: center;
  justify-content: center;
`;

export const PetalaTotalContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  right: 10px;
`;

export const PetalaTotalIcon = styled.View`
  top: 10px;
  right: 5px;
`;

export const PetalaTotalText = styled.Text`
  color: #fff;
  font-size: 25px;
  font-weight: bold;
  top: 5px;
`;

export const ContainerProducts = styled.View`
  top: 40px;
  height: 450px;
  width: 100%;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardProduct = styled.View`
  margin-top: 30px;
  margin-left: 10px;
  margin-right: 10px;
  width: 180px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-radius: 10px;
  height: 210px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-color: rgba(0, 0, 0, 0.25);
`;

export const ContainerImage = styled.View`
  top: -30px;
  align-items: center;
`;

export const CardImage = styled.Image`
  height: 100px;
  width: 140px;
`;

export const CardContainerText = styled.View`
  align-items: center;
  bottom: 20px;
`;

export const CardText = styled.Text`
  font-weight: bold;
  font-size: 15px;
`;

export const CardSubText = styled.Text`
  font-weight: bold;
  font-size: 13px;
`;

export const CardTextQtd = styled.Text`
  top: 10px;
  color: #bdbdbd;
`;

export const CardContent = styled.View`
  align-items: center;
  bottom: 5px;
`;

export const CardContainerBtnQtd = styled.View`
  flex-direction: row;
  align-items: center;
  width: 80%;
  justify-content: space-between;
`;

export const CardBtnLess = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  /* primary-green-dark */

  background: #03a678;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;

  align-items: center;
  justify-content: center;
`;

export const CardTextSum = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const CardBtnPlus = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  /* primary-green-dark */

  background: #03a678;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;

  align-items: center;
  justify-content: center;
`;

export const ButtonFinish = styled.TouchableOpacity`
  width: 90%;
  height: 60px;
  top: 80px;
  /* primary-green-dark */

  background: #03a678;
  border-radius: 200px;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

// !Style para fazer shadow do button
export const Styles = StyleSheet.create({
  PetalaStyle: {
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 3,
    zIndex: 1,
  },
  CardStyle: {
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 3,
    zIndex: 1,
    elevation: 1,
  },
});
