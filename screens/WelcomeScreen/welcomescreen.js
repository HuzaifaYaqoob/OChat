
import React from 'react';
import { tw } from 'react-native-tailwindcss';
import LinearGradient from 'react-native-linear-gradient'

import { StatusBar, Text, View, Image } from 'react-native';

import FPImg from '../../assets/images/fpimage.png'

const WelcomeScreen = () => {
    return (
        <>
            <StatusBar backgroundColor={'#EF9432'} />
            <LinearGradient
                colors={['#FBBF1E', '#E15E4B']}
                style={[tw.flex1]}
                useAngle={true}
                angle={135}
            >
                <View style={[tw.p5, tw.flex1, tw.justifyBetween]}>
                    <Text style={[tw.textWhite, tw.mT6, tw.text3xl, tw.fontBold, { fontFamily: "Roboto" }]}>
                        A new way to connect with your favourite people
                    </Text>
                    <View>
                        <Image
                            source={FPImg}
                            style={[{ width: 80, height: 80 }, tw.mLAuto, tw.mRAuto]}
                        />
                        <Text style={[tw.textCenter, tw.mT3, tw.textGray100]}>Please place your fingure over the sensor</Text>
                    </View>
                    <View style={[tw.textCenter, tw.textWhite]}>
                        <Text style={[tw.textCenter, tw.textWhite, {fontSize:15 ,fontFamily: "Roboto" }]}>Dont’t have a fingerprint enabled device?</Text>
                        <View style={[tw.mB5, tw.mT2, tw.pY2, tw.bgWhite, tw.selfCenter, tw.pX8, tw.roundedFull]} >
                            <Text style={[{ color: '#E15E4A', fontFamily: 'Roboto', fontSize:16 }, tw.fontMedium]}>Standard Signin</Text>
                        </View>
                        <Text style={[tw.textCenter, tw.textWhite, tw.textGray900, { fontFamily: 'Roboto' }]}>Don't have account? <Text style={[tw.textWhite]}>Create new</Text></Text>
                    </View>
                </View>

            </LinearGradient>
        </>
    )
}

export default WelcomeScreen