import React, { useEffect, useState } from "react";
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
  PetalaUp,
  PetalaDown,
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
import { Animated, View, TouchableOpacity, Text } from "react-native";
const ImageProfile = require("../../../assets/images/profile.png");

export default function Home() {
  const navigation = useNavigation();
  const [petalaAnim] = useState(new Animated.Value(0));
  const [markerAnim] = useState(new Animated.Value(0));
  const [artAnim] = useState(new Animated.Value(0));
  const [ageAnim] = useState(new Animated.Value(0));
  const [hisAnim] = useState(new Animated.Value(0));
  const [stAnim] = useState(new Animated.Value(0));
  const [headerAnim] = useState(new Animated.Value(0));
  const [storeAnim] = useState(new Animated.Value(0));

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

  useEffect(() => {
    Animated.spring(headerAnim, {
      toValue: 200,
      speed: 20,
      bounciness: 20,
      useNativeDriver: true,
    }).start();

    Animated.spring(storeAnim, {
      toValue: 200,
      speed: 10,
      bounciness: 10,
      useNativeDriver: true,
    }).start();

    Animated.timing(petalaAnim, {
      toValue: 1,
      duration: 1500,
      bounciness: 20,
      useNativeDriver: true,
    }).start();
    Animated.timing(markerAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    Animated.timing(artAnim, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
      delay: 10,
    }).start();

    Animated.timing(ageAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      delay: 15,
    }).start();

    Animated.timing(hisAnim, {
      toValue: 1,
      duration: 1100,
      useNativeDriver: true,
      delay: 20,
    }).start();

    Animated.timing(stAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
      delay: 25,
    }).start();
  }, []);

  return (
    <Container>
      <Animated.View
        style={{
          position: "absolute",
          transform: [{ translateY: headerAnim }],
        }}
      >
        <HeaderArea style={(Styles.PetalaStyle, { elevation: 10 })}>
          <HeaderImage source={ImageProfile} />
          <HeaderText>Jane</HeaderText>
          <HeaderText>Volta Redonda, RJ</HeaderText>
        </HeaderArea>
      </Animated.View>
      <Animated.View
        style={{
          zIndex: -1,
          transform: [{ translateY: storeAnim }],
        }}
      >
        <ContainerScore>
          <ScoreText>PONTOS</ScoreText>
          <ScoreText>300</ScoreText>
        </ContainerScore>
      </Animated.View>
      <Animated.View
        style={{
          width: "100%",
          height: 300,
          justifyContent: "center",
          transform: [
            {
              rotate: petalaAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ["100deg", "360deg"],
              }),
            },
          ],
        }}
      >
        <PetalaUp>
          <Animated.View style={{ opacity: artAnim, zIndex: -1 }}>
            <PetalaCrafts style={Styles.PetalaStyle}>
              <ContainerIconCrafts onPress={handleCrafts}>
                <Entypo name="brush" size={60} color="white" />
              </ContainerIconCrafts>
              <PetalaCraftsTitle>Artesanato</PetalaCraftsTitle>
            </PetalaCrafts>
          </Animated.View>
          <Animated.View style={{ opacity: ageAnim }}>
            <PetalaSchedule
              style={(Styles.PetalaStyle, { elevation: 30 })}
              onPress={handleSchedule}
            >
              <ContainerIconSchedule>
                <FontAwesome5 name="calendar-alt" size={60} color="white" />
              </ContainerIconSchedule>
              <PetalaScheduleTitle>Agendar Coleta</PetalaScheduleTitle>
            </PetalaSchedule>
          </Animated.View>
        </PetalaUp>
        <PetalaDown>
          <Animated.View style={{ opacity: hisAnim, zIndex: -1 }}>
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
          </Animated.View>
          <Animated.View style={{ opacity: stAnim, zIndex: -1 }}>
            <PetalaStore
              style={(Styles.PetalaStyle, { elevation: 20 })}
              onPress={handleStore}
            >
              <ContainerIconStore>
                <Fontisto name="shopping-bag-1" size={60} color="white" />
              </ContainerIconStore>
              <PetalaStoreTitle>Loja</PetalaStoreTitle>
            </PetalaStore>
          </Animated.View>
        </PetalaDown>
      </Animated.View>
      <Animated.View
        style={{
          left: 150,
          top: 90,
          flexDirection: "row",
          alignItems: "center",
          opacity: markerAnim,
        }}
      >
        <MarkerText>Pontos de Coleta</MarkerText>
        <Marker
          style={(Styles.PetalaStyle, { elevation: 10 })}
          onPress={handleCollect}
        >
          <ContainerMarkerIcon>
            <FontAwesome5 name="map-marker-alt" size={50} color="white" />
          </ContainerMarkerIcon>
        </Marker>
      </Animated.View>
    </Container>
  );
}
