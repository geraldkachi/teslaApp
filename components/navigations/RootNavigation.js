import React from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import CarsList from "../carlist/CarsList";

const Drawer = createDrawerNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      initialRouteName="Home"
      drawerPosition="right"
      >
        <Drawer.Screen name="Home" component={CarsList} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
