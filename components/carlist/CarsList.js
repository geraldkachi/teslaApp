import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import CarItem from '../cariitem/CarItem'
import CarData from '../carsdata/carsdata'
CarData

const CarsList = () => {
    return (
        <View>
            <FlatList
            data={CarData}
            renderItem={({item}) => <CarItem car={item} />}
            keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default CarsList

const styles = StyleSheet.create({})
