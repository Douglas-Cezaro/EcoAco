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
  top: 180px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const HeaderBack = styled.TouchableOpacity`
  right: 150px;
  flex-direction: row;
  align-items: center;
`;

export const HeaderBackText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const ContainerTitle = styled.View`
  height: 100px;
  width: 80%;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: 20px;
  text-align: center;
`;

export const Petala = styled.TouchableOpacity`
  width: 240px;
  height: 150px;
  top: 100px;

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

export const PetalaText = styled.Text`
  color: #fff;
  font-size: 25px;
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
});
