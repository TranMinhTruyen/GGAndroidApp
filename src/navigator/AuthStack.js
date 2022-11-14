import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../auth-screen/Splash';
import Login from '../auth-screen/Login';
import Register from '../auth-screen/Register';

const Stack = createNativeStackNavigator();
const AuthStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};
export default AuthStack;
