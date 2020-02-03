import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { f, storage, auth, database } from "./config";
import Login from "./src/components/Login";
import SignUp from "./src/components/SignUp";
import Main from "./src/components/Main";
const TabStack = createBottomTabNavigator(
  {
    Login: { screen: Login },
    SignUp: { screen: SignUp }
  },
  {
    initialRouteName: "Login"
  }
);
const MainStack = createSwitchNavigator({
  Authentication: TabStack,
  Main: { screen: Main }
});

export default createAppContainer(MainStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
