import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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
  right: 130px;
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
  font-size: 30px;
  font-weight: bold;
  top: 5px;
`;

export const Scroller = styled.ScrollView``;

export const ContainerProducts = styled.View`
  top: 20px;
  height: 450px;
  width: 100%;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardProduct = styled.View`
  margin: 20px;
  width: 150px;
  border-radius: 25px;
  height: 189px;
`;

export const ButtonFinish = styled.View`
  width: 90%;
  height: 60px;
  top: 70px;
  /* primary-green-dark */

  background: #03a678;
  border-radius: 200px;
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
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 1,
    borderEndWidth: 0,
    borderStartWidth: 0,
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
    zIndex: 1,
  },
});
