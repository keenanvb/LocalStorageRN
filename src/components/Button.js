import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {

    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#52575D',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#52575D',
        fontSize: 16,
        fontWeight: '800',
        paddingTop: 10,
        paddingBottom: 10
    }
});


export default Button;