import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import CarItem from "./components/cariitem/CarItem";
import BackGrImg from "./assets/images/ModelX.jpeg";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CarItem
        name={"Model X"}
        tagline={"Order Online for"}
        taglineCTA={"Touchless Delivery"}
        image={BackGrImg}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
