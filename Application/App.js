/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import store from './src/Redux/Store/Store';
import StackNavigation from './src/Configs/Navigation/StackNavigation';
import { Provider as PaperProvider } from 'react-native-paper';
import Toast from 'react-native-toast-message';



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <PaperProvider >
        <StackNavigation />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </PaperProvider>
    </Provider >
  );
};



export default App;
