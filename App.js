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
import SplashNavigation from './Navigators/StackNavigations/SplashScreen';


import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';

const App = () => {
  const [loading, setLoading] = useState(true)
  const [show_splash, setShowSplash] = useState(true)

  const get_splash_details = async () => {
    const sp_details = await mmkv.getBool('splash_screen')
    console.log(sp_details)
    if (sp_details) {
      setShowSplash(false)
    }
    else{
      mmkv.setBool('splash_screen' , true)
    }
  }

  const new_func = async () => {
    // const result = await mmkv.getBool('splashscreen')
    // if (result) {
    //   // setLoading(false)
    // }

    // const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: false})

    // rnBiometrics.isSensorAvailable()
    //   .then(result => {

    //     if ((result.biometryType === BiometryTypes.Biometrics) && result.available) {
    //       console.log(result)
    //       //do something face id specific
    //       rnBiometrics.biometricKeysExist()
    //       .then(r2 =>{
    //         console.log(r2)
    //       })

    //       rnBiometrics.createKeys()
    //       .then(r3 =>{
    //         console.log(r3)
    //       })

    //       rnBiometrics.createSignature({
    //         promptMessage: 'Sign in',
    //         payload: 'somemessage'
    //       })
    //       .then(r4 =>{
    //         console.log(r4)
    //       })
    //       .catch(err =>{
    //         console.log(err)

    //       })

    // rnBiometrics.simplePrompt({
    //   promptMessage : 'Hello',

    // })
    // .then(r5 =>{
    //   console.log(r5)
    // })
    // .catch(err =>{
    //   console.log(err)
    // })
    // }
    // })
  }

  useEffect(() => {
    get_splash_details()
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
        {
          show_splash ?
            <SplashNavigation />
            :
            <TabNavigator />
        }
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
