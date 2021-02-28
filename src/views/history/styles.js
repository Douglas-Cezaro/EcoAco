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
  top: -380px;
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
  right: 40px;
  bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

export const HeaderBackText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const HeaderTitle = styled.Text`
  top: 20px;
  right: 40px;
  color: #fff;
  font-size: 25px;
  font-weight: bold;
`;

export const ContainerCard = styled.View`
  top: 100px;
  align-items: center;
  width: 100%;
  height: 650px;
`;

export const Card = styled.View`
  height: 200px;
  width: 90%;
  margin-top: 30px;
  margin-left: 10px;
  margin-right: 10px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-radius: 10px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-color: rgba(0, 0, 0, 0.25);
`;

export const CardTitle = styled.Text`
  margin-top: 10px;
  margin-left: 20px;
  color: #000;
  font-size: 20px;
  font-weight: bold;
`;

export const CardContainerDate = styled.View`
  margin-top: 10px;
  margin-left: 20px;
  flex-direction: row;
  width: 40%;
  justify-content: space-between;
`;

export const CardDate = styled.Text`
  font-size: 17px;
`;

export const CardContainerCamera = styled.View`
  margin-top: 10px;
  margin-left: 20px;
  flex-direction: row;
  width: 40%;
  justify-content: space-between;
`;

export const CardCamera = styled.Text`
  font-size: 17px;
`;

export const CardSituation = styled.Text`
  margin-top: 10px;
  font-size: 17px;
  margin-left: 20px;
`;

export const CardSitutionAnalise = styled.Text`
  color: #f29f05;
  font-size: 20px;
  font-weight: bold;
`;

export const CardSitutionApro = styled.Text`
  color: #03a678;
  font-size: 20px;
  font-weight: bold;
`;

export const CardStore = styled.Text`
  margin-top: 10px;
  margin-left: 20px;
  font-size: 17px;
`;

// !Style para fazer shadow do button
export const Styles = StyleSheet.create({
  CardStyle: {
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 3,
    zIndex: 1,
    elevation: 1,
  },
  PetalaStyle: {
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 3,
    zIndex: 1,
  },
});
