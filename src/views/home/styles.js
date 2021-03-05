import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

export const HeaderArea = styled.View`
  /* position: absolute; */
  top: -670px;
  width: 1000px;
  height: 550px;
  border-bottom-left-radius: 500px;
  border-bottom-right-radius: 500px;
  /* primary-green-dark */

  background: #03a678;
  justify-content: center;
  align-items: center;
`;

export const HeaderImage = styled.Image`
  top: 160px;
  height: 100px;
  width: 100px;
  border-radius: 50px;
`;

export const HeaderText = styled.Text`
  top: 170px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const ContainerScore = styled.View`
  height: 150px;
  width: 150px;
  top: -240px;
  border-radius: 75px;
  /* primary-green-medium */

  background: #88bf0f;
  align-items: center;
  justify-content: center;
  z-index: -1;
`;

export const ScoreText = styled.Text`
  top: 40px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const ContainerPetalas = styled.View`
  width: 100%;
  justify-content: center;
`;

export const PetalaStore = styled.TouchableOpacity`
  width: 240px;
  height: 150px;
  right: 80px;
  bottom: 30px;
  /* primary-green-medium */
  background: #88bf0f;
  border-bottom-left-radius: 100px;
  border-top-right-radius: 100px;
  transform: rotate(30deg);
`;

export const PetalaStoreTitle = styled.Text`
  transform: rotate(-30deg);
  color: #fff;
  bottom: 10px;
  left: 130px;
  font-size: 18px;
  font-weight: bold;
`;

export const ContainerIconStore = styled.View`
  transform: rotate(-30deg);
  left: 100px;
`;

export const PetalaSchedule = styled.TouchableOpacity`
  width: 240px;
  height: 150px;
  right: 80px;
  bottom: 10px;
  /* primary-green-dark */

  background: #03a678;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  transform: rotate(-40deg);
`;

export const PetalaScheduleTitle = styled.Text`
  transform: rotate(40deg);
  color: #fff;
  top: 50px;
  font-size: 18px;
  font-weight: bold;
`;

export const ContainerIconSchedule = styled.View`
  transform: rotate(40deg);
  top: 90px;
  left: 70px;
`;

export const PetalaUp = styled.View`
  flex-direction: row;
`;

export const PetalaDown = styled.View`
  flex-direction: row;
`;

export const PetalaCrafts = styled.TouchableOpacity`
  width: 240px;
  height: 150px;
  left: 20px;

  align-items: center;
  justify-content: center;
  flex-direction: column;

  /* primary-green-medium */

  background: #88bf0f;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  transform: rotate(-130deg);
`;

export const PetalaCraftsTitle = styled.Text`
  transform: rotate(130deg);
  color: #fff;
  top: -50px;
  font-size: 18px;
  left: 20px;
  font-weight: bold;
`;

export const ContainerIconCrafts = styled.TouchableOpacity`
  transform: rotate(130deg);
  left: 50px;
  bottom: -30px;
`;

export const PetalaHistory = styled.TouchableOpacity`
  width: 240px;
  height: 150px;
  left: 30px;
  /* primary-green-dark */

  background: #03a678;
  border-bottom-left-radius: 100px;
  border-top-right-radius: 100px;
  transform: rotate(130deg);
`;

export const PetalaHistoryTitle = styled.Text`
  transform: rotate(-130deg);
  color: #fff;
  font-size: 18px;
  bottom: 60px;
  right: 5px;
  font-weight: bold;
`;

export const ContainerIconHistory = styled.View`
  transform: rotate(-130deg);
  right: 40px;
`;

export const ContainerMarker = styled.View`
  left: 150px;
  top: 90px;
  flex-direction: row;
  align-items: center;
`;

export const Marker = styled.TouchableOpacity`
  position: absolute;
  width: 80px;
  height: 80px;

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

export const MarkerText = styled.Text`
  color: #666666;
  right: 150px;
  top: 40px;
  font-size: 18px;
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
