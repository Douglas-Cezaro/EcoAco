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

export const Scroller = styled.ScrollView`
  width: 100%;
  top: 150px;
  height: 500px;
`;

export const Form = styled.SafeAreaView`
  width: 100%;
  margin-top: 7%;
  align-items: center;
  justify-content: center;
`;
export const InputArea = styled.TextInput`
  margin-top: 5%;
  width: 85%;
  height: 140px;
  background: #fafafa;
  border: 1px solid rgba(0, 0, 0, 0.13);
  border-radius: 25px;
  color: rgba(0, 0, 0, 0.4);
  padding-left: 20px;
  padding-right: 20px;
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
  margin-bottom: 5%;
  width: 85%;
  height: 60px;
  background: #03a678;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;

export const BtnCamera = styled.TouchableOpacity`
  top: 20px;
  width: 100px;
  height: 100px;
  background: rgba(218, 218, 218, 0.5);
  border-radius: 20px;
  align-items: center;
  margin-bottom: 32px;
  margin-right: 8px;
  justify-content: center;
`;

export const FormContainer = styled.View`
  flex-direction: row;
  width: 85%;
  justify-content: space-between;
`;

export const BtnText = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
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
  UploadedImage: {
    top: 20,
    width: 100,
    height: 100,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 32,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  PetalaStyle: {
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 3,
    zIndex: 1,
  },
});

export const Label = styled.Text`
  margin-right: 70%;
  font-size: 19px;
`;

export const ContainerUploadedImage = styled.View`
  flex-direction: row;
`;

export const ContainerModal = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.View``;

export const ModalTitle = styled.Text`
  text-align: center;
  font-size: 15px;
`;

export const ModalContainerBtn = styled.View`
  flex-direction: row;
  margin-top: 5%;
  justify-content: space-between;
`;

export const ModalViewExit = styled.View`
  left: 50%;
  bottom: 15%;
`;

export const ModalBtnExit = styled.TouchableOpacity``;

export const ModalBtn = styled.TouchableOpacity`
  margin-left: 10%;
  margin-right: 10%;
  width: 30%;
  height: 40px;
  background: #88bf0f;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;
