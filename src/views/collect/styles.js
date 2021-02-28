import styled from "styled-components/native";
import { StyleSheet, Dimensions } from "react-native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

export const HeaderArea = styled.View`
  position: absolute;
  top: -360px;
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

export const SearchArea = styled.View`
  top: 190px;
  height: 50px;
  width: 350px;
  background: #fafafa;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  justify-content: center;
  flex-direction: row;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #000;
  opacity: 0.6;
  text-decoration: none;
`;
export const SearchIcon = styled.View`
  align-items: center;
  justify-content: center;
  width: 50px;
`;

export const MarkerContainer = styled.TouchableOpacity`
  position: absolute;
  width: 40px;
  height: 40px;

  /* primary-brown */

  background: #a64141;

  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
  transform: rotate(-46.26deg);
  align-items: center;
  justify-content: center;
`;

export const ContainerMarkerIcon = styled.View`
  transform: rotate(46.26deg);
`;

export const CalloutContainer = styled.View`
  height: 100px;
  width: 300px;
  background: #ffffff;
  border-radius: 13px;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`;

export const CalloutImageContainer = styled.Text`
  padding-bottom: 40px;
`;

export const CalloutImage = styled.Image``;

export const CalloutContainerText = styled.View``;

export const CalloutText = styled.Text`
  color: #333333;
  font-size: 18px;
`;

export const CalloutContainerTextKM = styled.View`
  flex-direction: row;
`;

export const CalloutTextKM = styled.Text`
  left: 5px;
  color: #bdbdbd;
`;

export const CalloutIcon = styled.View``;

// !Style para fazer shadow do button
export const Styles = StyleSheet.create({
  map: {
    top: 40,
    width: "100%",
    height: "85%",
  },
  MarkerStyle: {
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 3,
    zIndex: 1,
    elevation: 10,
  },
});
