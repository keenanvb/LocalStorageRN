
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOG_OUT, ACCOUNT_DELETE } from '../actions/types';
import AsyncStorage from '@react-native-community/async-storage';

//Load user
export const loadUser = (navigation) => {
    return async (dispatch, getState) => {
        let res = await AsyncStorage.getItem('user');
        // console.log('loadUser res', JSON.parse(res))

        if (res) {
            dispatch({
                type: USER_LOADED,
                payload: JSON.parse(res)
            });

            navigation.navigate('Screen2');
        }
    };
};


//Login user
export const signupWithEmailAndPassword = ({ name, password }, navigation) => {
    return async (dispatch) => {
        try {

            let user = {
                name, password
            };
            dispatch({
                type: LOGIN_SUCCESS,
                payload: user
            });

            //load user
            dispatch(loadUser(navigation));

            navigation.navigate('Screen2');
        } catch (err) {
            dispatch({
                type: LOGIN_FAIL
            });
        }
    }
}


export const logout = (navigation) => {
    return async (dispatch) => {
        try {
            await AsyncStorage.removeItem('user');

            dispatch({
                type: LOG_OUT
            });

            navigation.navigate('Screen1');
        } catch (e) {
            console.log('e', e)
        }

    }
}