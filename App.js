import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
// import CarItem from "./components/cariitem/CarItem";
import CarsList from "./components/carlist/CarsList";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CarsList />
      {/* <CarItem /> */}
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


// name={"Model X"}
//         tagline={"Order Online for"}
//         taglineCTA={"Touchless Delivery"}
//         image={BackGrImg}