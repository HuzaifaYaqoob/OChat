
import React, { useEffect } from 'react'
import { Text, Dimensions, SafeAreaView, View, StyleSheet } from 'react-native'
import { tw } from 'react-native-tailwindcss'

import { mmkv } from '../../Redux/Storage/storage'

const SplashScreen = (props) => {
    const window_ = Dimensions.get('window')

    const splash_screen_showed = async () => {
        await mmkv.setBool('splashscreen', true)
    }

    useEffect(() => {
        splash_screen_showed()
    }, [])

    return (
        <>
            <SafeAreaView style={{backgroundColor : 'white'}}>
                <View
                    style={[{ height: (window_.height / 100) * 69, backgroundColor: '#F3D25C' }]}
                >
                    <View
                        style={[styles.bigCircle, tw.absolute,]}
                    >
                        <View style={[styles.small_into_big, tw.absolute]} />
                    </View>
                    <View style={[styles.similar_btm_1, tw.absolute, tw.roundedFull, tw.bottom0, tw.left0]} />
                    <View style={[styles.similar_big, tw.absolute, tw.roundedFull, tw.bottom0, tw.right0]} >
                        <View style={[styles.dark_into_similar_big, tw.roundedFull]} />
                        <View style={[styles.white_into_similar_big, tw.roundedFull]} />
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}


const styles = StyleSheet.create({
    bigCircle: {
        backgroundColor: '#F7AF25',
        width: 340,
        height: 340,
        borderRadius: 170,
        top: '50%',
        transform: [
            { translateY: -170 },
            { translateX: -170 }
        ]
    },
    small_into_big: {
        backgroundColor: '#FAEAB0',
        width: 120,
        height: 120,
        top: '50%',
        left: '50%',
        transform: [
            { translateX: -60 },
            { translateY: -60 }
        ],
        borderRadius: 60
    },
    similar_btm_1: {
        backgroundColor: '#F3D25C',
        width: 127,
        height: 127,
        transform: [
            { translateY: 127 / 2 }
        ]
    },
    similar_big: {
        backgroundColor: '#F3D25C',
        width: 224,
        height: 224,
        transform: [
            { translateY: (224 / 2) + 10 },
            { translateX: 224 / 2 }
        ]
    },
    dark_into_similar_big: {
        backgroundColor: '#F7AF25',
        width: 140,
        height: 140,
        top: '50%',
        left : '50%',
        transform: [
            { translateY: -(140 / 2) },
            { translateX: -(140 / 2) }
        ]
    },
    white_into_similar_big: {
        backgroundColor: 'white',
        width: 75,
        height: 75,
        top: 0,
        left : 0,
        transform: [
            { translateY: -75 },
            { translateX: -75 }
        ]
    },
    
})

export default SplashScreen