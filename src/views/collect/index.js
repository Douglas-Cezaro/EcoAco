import React from "react";
import { View } from "react-native";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import {
  Container,
  HeaderArea,
  HeaderContent,
  HeaderBack,
  HeaderBackText,
  SearchArea,
  SearchInput,
  SearchIcon,
  MarkerContainer,
  ContainerMarkerIcon,
  CalloutContainer,
  CalloutImageContainer,
  CalloutImage,
  CalloutContainerText,
  CalloutText,
  CalloutContainerTextKM,
  CalloutTextKM,
  CalloutIcon,
  Styles,
} from "./styles";

const CalloutPng = require("../../../assets/images/callout.png");

export default function Collect() {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.reset({
      routes: [{ name: "Home" }],
    });
  };

  const handleQrCode = () => {
    navigation.navigate("QrCode");
  };

  return (
    <Container>
      <HeaderArea style={{ zIndex: 1 }}>
        <HeaderContent>
          <HeaderBack onPress={handleBack}>
            <AntDesign name="left" size={30} color="white" />
            <HeaderBackText>Voltar</HeaderBackText>
          </HeaderBack>
        </HeaderContent>
        <SearchArea>
          <SearchIcon>
            <AntDesign name="search1" size={30} color="#DADADA" />
          </SearchIcon>
          <SearchInput placeholder="pesquisar..." />
        </SearchArea>
      </HeaderArea>
      <CalloutImage source={CalloutPng} resizeMode="cover" />
      <MapView
        style={Styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -22.5111318,
          longitude: -44.1101119,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker
          calloutAnchor={{ x: 0.3, y: 3 }}
          coordinate={{
            latitude: -22.5111318,
            longitude: -44.1101119,
          }}
        >
          <MarkerContainer style={Styles.MarkerStyle}>
            <ContainerMarkerIcon>
              <Feather
                name="trash"
                size={24}
                color="white"
                style={{ top: 5 }}
              />
              <View style={{ zIndex: 1, bottom: 10, left: 8 }}>
                <FontAwesome name="recycle" size={7} color="white" />
              </View>
            </ContainerMarkerIcon>
          </MarkerContainer>
          <Callout tooltip onPress={handleQrCode}>
            <CalloutContainer>
              <CalloutImageContainer>
                <CalloutImage source={CalloutPng} resizeMode="cover" />
              </CalloutImageContainer>
              <CalloutContainerText>
                <CalloutText>Rua Abreu</CalloutText>
                <CalloutContainerTextKM>
                  <FontAwesome5
                    name="map-marker-alt"
                    size={24}
                    color="#03A678"
                  />
                  <CalloutTextKM>2 km</CalloutTextKM>
                </CalloutContainerTextKM>
              </CalloutContainerText>
              <CalloutIcon>
                <FontAwesome name="qrcode" size={60} color="#03A678" />
              </CalloutIcon>
            </CalloutContainer>
          </Callout>
        </Marker>

        <Marker
          calloutAnchor={{ x: 0.3, y: 3 }}
          coordinate={{
            latitude: -22.5135836,
            longitude: -44.1084422,
          }}
        >
          <MarkerContainer style={Styles.MarkerStyle}>
            <ContainerMarkerIcon>
              <Feather
                name="trash"
                size={24}
                color="white"
                style={{ top: 5 }}
              />
              <View style={{ zIndex: 1, bottom: 10, left: 8 }}>
                <FontAwesome name="recycle" size={7} color="white" />
              </View>
            </ContainerMarkerIcon>
          </MarkerContainer>
          <Callout tooltip onPress={handleQrCode}>
            <CalloutContainer>
              <CalloutImageContainer>
                <CalloutImage source={CalloutPng} resizeMode="cover" />
              </CalloutImageContainer>
              <CalloutContainerText>
                <CalloutText>Rua Abreu</CalloutText>
                <CalloutContainerTextKM>
                  <FontAwesome5
                    name="map-marker-alt"
                    size={24}
                    color="#03A678"
                  />
                  <CalloutTextKM>2 km</CalloutTextKM>
                </CalloutContainerTextKM>
              </CalloutContainerText>
              <CalloutIcon>
                <FontAwesome name="qrcode" size={60} color="#03A678" />
              </CalloutIcon>
            </CalloutContainer>
          </Callout>
        </Marker>
        <Marker
          calloutAnchor={{ x: 0.3, y: 3 }}
          coordinate={{
            latitude: -22.5129295,
            longitude: -44.1121437,
          }}
        >
          <MarkerContainer style={Styles.MarkerStyle}>
            <ContainerMarkerIcon>
              <Feather
                name="trash"
                size={24}
                color="white"
                style={{ top: 5 }}
              />
              <View style={{ zIndex: 1, bottom: 10, left: 8 }}>
                <FontAwesome name="recycle" size={7} color="white" />
              </View>
            </ContainerMarkerIcon>
          </MarkerContainer>
          <Callout tooltip onPress={handleQrCode}>
            <CalloutContainer>
              <CalloutImageContainer>
                <CalloutImage source={CalloutPng} resizeMode="cover" />
              </CalloutImageContainer>
              <CalloutContainerText>
                <CalloutText>Rua Getulio</CalloutText>
                <CalloutContainerTextKM>
                  <FontAwesome5
                    name="map-marker-alt"
                    size={24}
                    color="#03A678"
                  />
                  <CalloutTextKM>2 km</CalloutTextKM>
                </CalloutContainerTextKM>
              </CalloutContainerText>
              <CalloutIcon>
                <FontAwesome name="qrcode" size={60} color="#03A678" />
              </CalloutIcon>
            </CalloutContainer>
          </Callout>
        </Marker>
      </MapView>
    </Container>
  );
}
