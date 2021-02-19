import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import RootNavigation from "./components/navigations/RootNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RootNavigation />
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
// tagline={"Order Online for"}
// taglineCTA={"Touchless Delivery"}
// image={BackGrImg}