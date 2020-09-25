import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import Button from '../components/Button'
import Title from '../components/Title'

const Screen2 = ({ navigation }) => {

    const { container } = styles

    return (
        <View style={container}>
            <SafeAreaView>
                <Title title={'Screen 2'} />
                <Button onPress={() => {
                    navigation.navigate('Screen3');
                }}>Go to Screen 3</Button>

            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default connect(null, {})(Screen2);
