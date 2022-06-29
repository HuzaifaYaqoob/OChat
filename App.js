import React, { useEffect, useState } from 'react';

import { tw } from 'react-native-tailwindcss';
import {
  SafeAreaView,
} from 'react-native';

import { mmkv } from './Redux/Storage/storage';

// All Screens 
import WelcomeScreen from './screens/WelcomeScreen/welcomescreen';
import SplashScreen from './screens/SplashScreen';

// Navigators 
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './Navigators/TabNavigator';


const App = () => {
  const [loading, setLoading] = useState(true)

  const new_func = async () => {
    const result = await mmkv.getBool('splashscreen')
    if (result) {
      // setLoading(false)
    }
  }

  useEffect(() => {
    new_func()
  }, [])

  return (
    <SafeAreaView style={[tw.flex1, tw.bgWhite]} >
      {/* {
        loading ?
          <SplashScreen />
          :
          <WelcomeScreen />
      } */}
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
