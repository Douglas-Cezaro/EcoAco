import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  Fontisto,
} from "@expo/vector-icons";
import {
  Container,
  HeaderArea,
  HeaderImage,
  HeaderText,
  ContainerScore,
  ScoreText,
  ContainerPetalas,
  PetalaStore,
  PetalaStoreTitle,
  ContainerIconStore,
  PetalaSchedule,
  PetalaScheduleTitle,
  ContainerIconSchedule,
  PetalaCrafts,
  PetalaCraftsTitle,
  ContainerIconCrafts,
  PetalaHistory,
  PetalaHistoryTitle,
  ContainerIconHistory,
  ContainerMarker,
  Marker,
  ContainerMarkerIcon,
  MarkerText,
  Styles,
} from "./styles";
const ImageProfile = require("../../../assets/images/profile.png");

export default function Home() {
  const navigation = useNavigation();

  const handleCrafts = () => {
    navigation.navigate("Crafts");
  };

  const handleSchedule = () => {
    navigation.navigate("Schedule");
  };

  const handleHistory = () => {
    navigation.navigate("History");
  };

  const handleStore = () => {
    navigation.reset({
      routes: [{ name: "Store" }],
    });
  };

  const handleCollect = () => {
    navigation.reset({
      routes: [{ name: "Collect" }],
    });
  };

  return (
    <Container>
      <HeaderArea style={(Styles.PetalaStyle, { elevation: 10 })}>
        <HeaderImage source={ImageProfile} />
        <HeaderText>Jane</HeaderText>
        <HeaderText>Volta Redonda, RJ</HeaderText>
      </HeaderArea>
      <ContainerScore>
        <ScoreText>PONTOS</ScoreText>
        <ScoreText>300</ScoreText>
      </ContainerScore>
      <ContainerPetalas>
        <PetalaCrafts style={Styles.PetalaStyle}>
          <ContainerIconCrafts onPress={handleCrafts}>
            <Entypo name="brush" size={60} color="white" />
          </ContainerIconCrafts>
          <PetalaCraftsTitle>Artesanato</PetalaCraftsTitle>
        </PetalaCrafts>
        <PetalaHistory
          style={(Styles.PetalaStyle, { elevation: 10 })}
          onPress={handleHistory}
        >
          <ContainerIconHistory>
            <MaterialCommunityIcons
              name="clipboard-text-outline"
              size={60}
              color="white"
            />
          </ContainerIconHistory>
          <PetalaHistoryTitle>Histórico</PetalaHistoryTitle>
        </PetalaHistory>
        <PetalaStore
          style={(Styles.PetalaStyle, { elevation: 20 })}
          onPress={handleStore}
        >
          <ContainerIconStore>
            <Fontisto name="shopping-bag-1" size={60} color="white" />
          </ContainerIconStore>
          <PetalaStoreTitle>Loja</PetalaStoreTitle>
        </PetalaStore>
        <PetalaSchedule
          style={(Styles.PetalaStyle, { elevation: 30 })}
          onPress={handleSchedule}
        >
          <ContainerIconSchedule>
            <FontAwesome5 name="calendar-alt" size={60} color="white" />
          </ContainerIconSchedule>
          <PetalaScheduleTitle>Agendar Coleta</PetalaScheduleTitle>
        </PetalaSchedule>
      </ContainerPetalas>
      <ContainerMarker>
        <MarkerText>Pontos de Coleta</MarkerText>
        <Marker
          style={(Styles.PetalaStyle, { elevation: 10 })}
          onPress={handleCollect}
        >
          <ContainerMarkerIcon>
            <FontAwesome5 name="map-marker-alt" size={50} color="white" />
          </ContainerMarkerIcon>
        </Marker>
      </ContainerMarker>
    </Container>
  );
}
