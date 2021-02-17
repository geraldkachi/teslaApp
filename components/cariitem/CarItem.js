import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import TeslsaBtn from "../teslabtn/TeslsaBtn";

const CarItem = ({ name, tagline, image, taglineCTA }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.carContainer}>
          <View style={styles.titles}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>
              {tagline}
              {/* &nbsp; */}
              {' '}
              <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
            </Text>
          </View>
        </View>
        <View style={styles.buttomContainer}>
          <TeslsaBtn
            type="primary"
            content="Custom Order"
            onPress={() => console.warn("you don press Custom Order abi")}
          />
          <TeslsaBtn
            type="secondary"
            content="Exisiting Inventory"
            onPress={() =>
              console.warn("you don press Exisiting Inventory abi")
            }
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default CarItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  carContainer: {
    width: "100%",
    height: "100%",
  },
  titles: {
    marginTop: "30%",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  subtitleCTA: {
    //   paddingHorizontal: 5,
      textDecorationLine: 'underline'
  },
  buttomContainer: {
    //   position: 'absolute',
    bottom: 150,
    width: "100",
  },
});
