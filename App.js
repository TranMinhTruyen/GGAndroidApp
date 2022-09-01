import React from 'react';
import RootComponent from './src/navigator/RootComponent';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <SafeAreaProvider>
                    <RootComponent/>
                </SafeAreaProvider>
            </PersistGate>
        </Provider>
    );
};
export default App;
