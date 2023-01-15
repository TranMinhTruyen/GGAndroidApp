import React from 'react';
import RootComponent from './src/navigator/RootComponent';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";
import {SafeAreaProvider} from "react-native-safe-area-context";

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <NativeBaseProvider>
                        <RootComponent/>
                </NativeBaseProvider>
            </NavigationContainer>
        </Provider>
    );
};
export default App;
