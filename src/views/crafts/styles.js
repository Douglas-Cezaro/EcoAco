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
  right: 80px;
  flex-direction: row;
  align-items: center;
`;

export const HeaderBackText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const HeaderTitleContainer = styled.View`
  height: 50px;
  width: 150px;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 25px;
  font-weight: bold;
  right: 40px;
  text-align: center;
`;

export const ContainerProducts = styled.View`
  height: 450px;
  width: 100%;
  align-items: center;
  justify-content: center;
  bottom: 100px;
`;

export const CardProduct = styled.View`
  width: 90%;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-radius: 10px;
  height: 210px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-color: rgba(0, 0, 0, 0.25);
  flex-direction: row;
`;

export const CardContentLeft = styled.View`
  width: 45%;
  align-items: center;
`;

export const CardContentImage = styled.Image`
  top: 10px;
  height: 130px;
  width: 140px;
`;

export const CardPrice = styled.Text`
  font-weight: bold;
  top: 20px;
  font-size: 25px;
`;

export const CardContentRight = styled.View`
  width: 55%;
  margin-left: 10px;
  align-items: flex-start;
`;

export const CardTitle = styled.Text`
  top: 10px;
  font-weight: bold;
  font-size: 15px;
`;

export const CardDescription = styled.Text`
  top: 15px;
  color: #bdbdbd;
  font-size: 15px;
`;

export const CardButton = styled.TouchableOpacity`
  background: #03a678;
  border-radius: 10px;
  width: 85%;
  height: 30px;
  top: 53px;
  align-items: center;
  justify-content: center;
`;

export const CardButtonTxt = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
`;

export const ButtonAdd = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  height: 90px;
  width: 90px;
  right: 20px;
  /* primary-green-medium */

  align-items: center;
  justify-content: center;

  background: #88bf0f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

// !Style para fazer shadow do Card
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
