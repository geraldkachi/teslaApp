import React from "react";
import { StyleSheet, Image, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/images/logo.png")} />
      <Image style={styles.menu} source={require("../../assets/images/menu.png")} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 25,
    width: "100%",
    paddingHorizontal: 20,
    zIndex: 100
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode:'contain'
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode:'contain'
  },
});
