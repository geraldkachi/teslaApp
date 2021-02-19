import React from "react";
import { StyleSheet, View, FlatList,Dimensions } from "react-native";
import CarItem from "../cariitem/CarItem";
import cars from "../carsdata/carsdata";
import Header from "../header/Header";

const CarsList = () => {
    // console.log(cars);
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        keyExtractor={(item) => item.id}
        snapToAlignment='start'
        decelerationRate='fast'
        snapToInterval={Dimensions.get('window').height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CarsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // height: "100%",
  },
});
