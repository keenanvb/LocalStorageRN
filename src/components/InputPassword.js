import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const InputPassword = ({ label, value, onChangeText, placeholder, multiline, setSecureText, secureText }) => {

    const { inputStyle, containerStyle, labelStyle, actionStyle } = styles

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}> {label}</Text>
            <View style={actionStyle}>
                {secureText ?
                    <Feather onPress={() => { setSecureText() }} name="lock" size={20} color='black' />
                    :
                    <Feather onPress={() => { setSecureText() }} name="unlock" size={20} color='black' />
                }
                <TextInput
                    placeholder={placeholder}
                    style={inputStyle}
                    value={value}
                    secureTextEntry={secureText}
                    onChangeText={onChangeText}
                    multiline={multiline || false}
                />
                {secureText ?
                    <Feather onPress={() => { setSecureText() }} name="eye-off" size={20} color='gray' />
                    :
                    <Feather onPress={() => { setSecureText() }} name="eye" size={20} color='gray' />
                }
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    inputStyle: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
    },
    containerStyle: {
        backgroundColor: 'white',
        paddingVertical: 2,
        paddingHorizontal: 20,
    },
    actionStyle: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        alignItems: 'center'
    },
    labelStyle: {
        color: '#05375a',
        fontSize: 18,
    }
});



export default InputPassword
