import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Title = ({ onPress, title }) => {

    const { titleStyle, textStyle } = styles;

    return (
        <View style={titleStyle}>
            <Text style={textStyle}>{title}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    titleStyle: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    textStyle: {
        fontFamily: "HelveticaNeue",
        color: "#52575D",
        fontWeight: "200",
        fontSize: 36
    },
});


export default Title;
