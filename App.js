import React from 'react';
import RootComponent from './src/navigator/RootComponent';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base/src/core/NativeBaseProvider';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
    return (
        <NativeBaseProvider>
            <SafeAreaProvider>
                <Provider store={store}>
                    <NavigationContainer>
                        <RootComponent/>
                    </NavigationContainer>
                </Provider>
            </SafeAreaProvider>
        </NativeBaseProvider>
    );
};
export default App;
