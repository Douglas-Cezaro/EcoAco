import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../views/home";
import Login from "../views/login";
import Crafts from "../views/crafts";
import History from "../views/history";
import Schedule from "../views/schedule";
import Store from "../views/store";
import Collect from "../views/collect";
import QrCode from "../views/qrCode";
import CheckScan from "../views/checkScan";
import Preload from "../views/preload";

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Crafts" component={Crafts} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="Schedule" component={Schedule} />
      <Stack.Screen name="Store" component={Store} />
      <Stack.Screen name="Collect" component={Collect} />
      <Stack.Screen name="QrCode" component={QrCode} />
      <Stack.Screen name="CheckScan" component={CheckScan} />
    </Stack.Navigator>
  </NavigationContainer>
);
