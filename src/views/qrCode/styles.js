import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #03a678;
`;

export const ButtonScan = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  height: 60px;
  width: 90%;
  /* primary-white */

  background: #ffffff;
  border-radius: 200px;
  align-items: center;
  justify-content: center;
`;

export const TextBtnScan = styled.Text`
  color: #03a678;
  font-size: 20px;
  font-weight: bold;
`;

// !Style para fazer shadow do button
export const Styles = StyleSheet.create({
  ButtonStyle: {
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 3,
    zIndex: 1,
    elevation: 10,
  },
});
