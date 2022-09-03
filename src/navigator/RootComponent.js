import React from 'react';
import {useSelector} from 'react-redux';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const RootComponent = () => {
    const userToken = useSelector(state => state.token.token);
    return (
        userToken == null ? <AuthStack/> : <MainStack/>
    );
};
export default RootComponent;
