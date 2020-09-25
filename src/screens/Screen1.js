import React, { useState, useEffect } from 'react'
import { View, StyleSheet, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { signupWithEmailAndPassword, loadUser } from '../actions';
import Button from '../components/Button';
import InputText from '../components/InputText';
import InputPassword from '../components/InputPassword';

const Screen1 = ({ signupWithEmailAndPassword, navigation, loadUser }) => {

    const [signUpData, setSignUpData] = useState({
        name: '',
        password: '',
        formErrors: {
            name: false,
            password: false,
        }
    });

    useEffect(() => {
        loadUser(navigation);
    }, [loadUser, navigation]);

    const onFormDataChange = (value, text) => {
        const { name, password, formErrors } = signUpData;
        switch (value) {
            case 'name':
                formErrors.name = name.length > 3 ? true : false;
                break;
            case 'password':
                formErrors.password = password.length > 6 ? true : false;
                break;
            default:
                break;
        }
        setSignUpData({ ...signUpData, [value]: text });
    }

    const handleSignUp = () => {
        const { name, password } = signUpData;
        if (name && password) {
            signupWithEmailAndPassword({ name, password }, navigation);
        }
    };

    const { container, searchContainer } = styles;

    const { name, password, formErrors } = signUpData;

    const [secureText, setSecureText] = useState(true)

    return (
        <View style={container}>
            <SafeAreaView>
                <View style={searchContainer}>
                    <KeyboardAvoidingView behavior="padding">
                        <InputText
                            label={'User name'}
                            iconName={'user'}
                            value={name}
                            placeholder={'Enter Username'}
                            onChangeText={(nameTextValue) => { onFormDataChange('name', nameTextValue) }}
                            formErrors={formErrors.name} />
                        <InputPassword
                            label={'Password'}
                            value={password}
                            placeholder={'Enter Password'}
                            onChangeText={(passwordTextValue) => { onFormDataChange('password', passwordTextValue) }}
                            formErrors={formErrors}
                            secureText={secureText}
                            setSecureText={() => {
                                setSecureText(!secureText)
                            }}
                        />
                        <Button onPress={() => {
                            handleSignUp()
                        }}>Sign in</Button>
                    </KeyboardAvoidingView>
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchContainer: {
        backgroundColor: 'white',
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
});

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { signupWithEmailAndPassword, loadUser })(Screen1);
