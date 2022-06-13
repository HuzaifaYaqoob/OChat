import React from 'react';

import { tw } from 'react-native-tailwindcss';
import LinearGradient from 'react-native-linear-gradient'
import FPImage from './assets/images/fpimg.png'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';


const App = () => {
  return (
    <SafeAreaView style={[tw.flex1]} >
      <LinearGradient
        colors={['#95c43a', '#00863d']}
        style={[tw.flex1, tw.itemsCenter, tw.justifyCenter]}
        useAngle={true}
        angle={135}
      >
        {/* <View style={[tw.w20, tw.h20, tw.roundedFull, tw.bgTransparent, tw.border2, tw.borderWhite, tw.flex, tw.itemsCenter, tw.justifyCenter, { width: 160, height: 160 }]}>
          <Image source={FPImage} />
        </View> */}
      </LinearGradient>
    </SafeAreaView>
  );
};

export default App;
