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

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Crafts" component={Crafts} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="Schedule" component={Schedule} />
      <Stack.Screen name="Store" component={Store} />
      <Stack.Screen name="Collect" component={Collect} />
    </Stack.Navigator>
  </NavigationContainer>
);
