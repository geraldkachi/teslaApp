import React from 'react'
import { StyleSheet, Text, Pressable, View } from 'react-native'

const TeslsaBtn = ({type, content, onPress}) => {
    

    // const contentText = type === 'primary' ? "#171A20CC" : '#FFFFFf'
    const backgroundColor = type === 'primary' ? "#171A20CC" : '#FFFFFf'
    const textColor = type === 'primary' ? 'white' : "black"

    return (
        <View style={styles.container}>
            <Pressable onPress={() => onPress()} style={[styles.buttonT, {backgroundColor: backgroundColor}]}  >
                <Text style={[styles.text, {color: textColor}]} >
                    {content}
                </Text>
            </Pressable>
        </View>
    )
}
// 272004

export default TeslsaBtn

const styles = StyleSheet.create({
    
    container:{
        width:"100%",
        padding:10
    },
    buttonT: {
        justifyContent:'center',
        alignItems:"center",
        height: 40,
        borderRadius: 20,
        backgroundColor:"grey",
        // position:"absolute",
    },
    text: {
        fontSize: 12,
        color:'white',
        fontWeight: '500',
        textTransform: "uppercase"
    },
})
