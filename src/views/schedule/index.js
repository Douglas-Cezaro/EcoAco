import React, { useState } from "react";
import { Entypo, FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Modal, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  HeaderArea,
  HeaderContent,
  HeaderBack,
  HeaderBackText,
  HeaderTitle,
  Scroller,
  Form,
  Input,
  InputArea,
  BtnCamera,
  BtnSave,
  Label,
  ContainerUploadedImage,
  BtnText,
  ContainerModal,
  ModalView,
  ModalViewExit,
  ModalBtnExit,
  ModalTitle,
  ModalContainerBtn,
  ModalBtn,
  Styles,
} from "./styles";

export default function Schedule() {
  const [close, setClose] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [images, setImages] = useState([]);
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.reset({
      routes: [{ name: "Home" }],
    });
  };

  const handlerSave = () => {
    navigation.reset({
      routes: [{ name: "History" }],
    });
  };

  const gallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert("Eita, precisamos de acesso as suas fotos...");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if (result.cancelled) {
      return;
    }

    const { uri: image } = result;

    setImages([...images, image]);
    setModalVisible(false);
  };

  const camera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (result.cancelled) {
      return;
    }

    const { uri: image } = result;

    setImages([...images, image]);
    setModalVisible(false);
  };

  return (
    <Container>
      <HeaderArea style={(Styles.PetalaStyle, { elevation: 10 })}>
        <HeaderContent>
          <HeaderBack onPress={handleBack}>
            <AntDesign name="left" size={30} color="white" />
            <HeaderBackText>Voltar</HeaderBackText>
          </HeaderBack>
          <HeaderTitle>Agendar Coleta</HeaderTitle>
        </HeaderContent>
      </HeaderArea>
      <Scroller>
        <Form>
          <Input placeholder="Título" />

          <Input placeholder="Data 00/00/0000" />

          <InputArea multiline placeholder="Descrição" />

          <BtnCamera
            style={Styles.ButtonStyle}
            onPress={() => setModalVisible(true)}
          >
            <Entypo name="camera" size={35} color="white" />
          </BtnCamera>

          {images.length > 0 && <Label>Fotos</Label>}

          <ContainerUploadedImage>
            {images.map((image) => {
              return (
                <Image
                  resizeMode="cover"
                  source={{ uri: image }}
                  style={Styles.UploadedImage}
                  key={image}
                />
              );
            })}
          </ContainerUploadedImage>
          <BtnSave style={Styles.ButtonStyle} onPress={handlerSave}>
            <BtnText>Reportar</BtnText>
          </BtnSave>
        </Form>
      </Scroller>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <ContainerModal>
          <ModalView style={Styles.modalView}>
            <ModalViewExit>
              <ModalBtnExit onPress={() => setModalVisible(false)}>
                <AntDesign name="closecircle" size={28} color="#fd5555" />
              </ModalBtnExit>
            </ModalViewExit>

            <ModalTitle>Selecione de onde quer adicionar a foto</ModalTitle>
            <ModalContainerBtn>
              <ModalBtn onPress={() => camera()}>
                <Entypo name="camera" size={24} color="white" />
              </ModalBtn>
              <ModalBtn onPress={() => gallery()}>
                <FontAwesome name="photo" size={24} color="white" />
              </ModalBtn>
            </ModalContainerBtn>
          </ModalView>
        </ContainerModal>
      </Modal>
    </Container>
  );
}
