import React from 'react';

import { tw } from 'react-native-tailwindcss';
import {
  SafeAreaView,
} from 'react-native';


// All Screens 
import WelcomeScreen from './screens/WelcomeScreen/welcomescreen';

const App = () => {
  return (
    <SafeAreaView style={[tw.flex1]} >
      <WelcomeScreen />
    </SafeAreaView>
  );
};

export default App;
