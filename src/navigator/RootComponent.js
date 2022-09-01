import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const RootComponent = () => {
    const userToken = useSelector(state => state.token.token);
    return (
        <NavigationContainer>
            {userToken == null ? <AuthStack/> : <MainStack/>}
        </NavigationContainer>
    );
};
export default RootComponent;
