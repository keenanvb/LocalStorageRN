import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { logout } from '../actions';
import Button from '../components/Button';
import Title from '../components/Title';

const Screen3 = ({ logout, navigation }) => {

    const { container } = styles

    return (
        <View style={container}>
            <SafeAreaView>
                <Title title={'Screen 3'} />
                <Button onPress={() => {
                    navigation.navigate('Screen2');
                }}>Go to Screen 2</Button>
                <Button onPress={() => {
                    logout(navigation)
                }}>Logout</Button>

            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default connect(null, { logout })(Screen3);
