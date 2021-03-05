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
  top: -260px;
  width: 1050px;
  height: 550px;
  border-bottom-left-radius: 500px;
  border-bottom-right-radius: 500px;
  /* primary-green-dark */

  background: #03a678;
  justify-content: center;
  align-items: center;
`;

export const HeaderContent = styled.View`
  top: 170px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Logo = styled.Image`
  height: 250px;
  width: 250px;
`;

export const ContainerTitle = styled.View`
  top: 130px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 75%;
`;

export const Title = styled.Text`
  color: #666666;
  font-size: 18px;
  opacity: 0.5;
`;

export const Logos = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Facebook = styled.TouchableOpacity`
  right: 20px;
  border: 0.3px solid #3a58ba;
  width: 50px;
  height: 50px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const Gmail = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  border: 0.3px solid #d6281d;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.SafeAreaView`
  width: 100%;
  top: 120px;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  margin-top: 5%;
  width: 85%;
  height: 60px;
  background: #fafafa;
  border: 1px solid rgba(0, 0, 0, 0.13);
  border-radius: 25px;
  color: rgba(0, 0, 0, 0.4);
  padding-left: 20px;
  padding-right: 20px;
`;

export const BtnSave = styled.TouchableOpacity`
  margin-top: 5%;
  width: 85%;
  height: 60px;
  background: #03a678;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;

export const BtnText = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const Footer = styled.View`
  top: 200px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const FooterTitle = styled.Text`
  color: #666666;
  font-size: 15px;
  opacity: 0.3;
  margin-right: 20px;
`;

export const FooterBtn = styled.TouchableOpacity``;

export const FooterBtnText = styled.Text`
  color: #03a678;
  font-size: 16px;
`;

// !Style para fazer shadow do button
export const Styles = StyleSheet.create({
  ButtonStyle: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    zIndex: 1,
  },
  PetalaStyle: {
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 3,
    zIndex: 1,
  },
});
