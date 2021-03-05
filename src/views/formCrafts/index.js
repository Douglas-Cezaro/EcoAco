import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Modal, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import {
  Container,
  HeaderArea,
  HeaderContent,
  HeaderBack,
  HeaderBackText,
  HeaderTitleContainer,
  HeaderTitle,
  Scroller,
  Form,
  Input,
  FormContainer,
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
import { AntDesign, FontAwesome, Entypo } from "@expo/vector-icons";

export default function FormCrafts() {
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
      routes: [{ name: "Crafts" }],
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
          <HeaderTitleContainer>
            <HeaderTitle>Artesanato</HeaderTitle>
          </HeaderTitleContainer>
        </HeaderContent>
      </HeaderArea>
      <Scroller>
        <Form>
          <Input placeholder="Título" />

          <FormContainer>
            <Input
              style={{ width: "45%" }}
              placeholder="R$ 0.00"
              keyboardType="numeric"
            />
            <Input
              style={{ width: "45%" }}
              placeholder="Qtd."
              keyboardType="numeric"
            />
          </FormContainer>

          <InputArea multiline placeholder="Descrição" />

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
            {images.length < 3 && (
              <BtnCamera onPress={() => setModalVisible(true)}>
                <FontAwesome name="plus" size={30} color="black" />
              </BtnCamera>
            )}
          </ContainerUploadedImage>
          <BtnSave style={Styles.ButtonStyle} onPress={handlerSave}>
            <BtnText>Salvar</BtnText>
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
