import React, { useEffect, useState } from 'react';

import { tw } from 'react-native-tailwindcss';
import {
  SafeAreaView,
} from 'react-native';

import { mmkv } from './Redux/Storage/storage';

// All Screens 
import WelcomeScreen from './screens/WelcomeScreen/welcomescreen';
import SplashScreen from './screens/SplashScreen';

const App = () => {
  const [loading, setLoading] = useState(true)

  const new_func = async () => {
    const result = await mmkv.getBool('splashscreen')
    if (result) {
      setLoading(false)
    }
  }

  useEffect(() => {
    new_func()
  }, [])

  return (
    <SafeAreaView style={[tw.flex1]} >
      {
        loading ?
          <SplashScreen />
          :
          <WelcomeScreen />
      }
    </SafeAreaView>
  );
};

export default App;
