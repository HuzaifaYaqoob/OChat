
import React, { useEffect } from 'react'
import { Text, Dimensions, SafeAreaView, View, StyleSheet, } from 'react-native'
import { tw } from 'react-native-tailwindcss'

import { mmkv } from '../../Redux/Storage/storage'

const SplashScreen = (props) => {
    const window_ = Dimensions.get('window')
    let w_width = window_.width

    let rb_circle = (w_width * 62.222) / 100
    let rbi_circle = (w_width * 38.88888) / 100
    let rbw_circle = (w_width * 20.83333) / 100

    let ls_circle = (w_width * 35.277778) / 100

    let arc_g = (w_width * 48.3333) / 100
    let bw_arc = (arc_g - rbw_circle) / 2

    console.log(w_width)

    const splash_screen_showed = async () => {
        await mmkv.setBool('splashscreen', true)
    }

    useEffect(() => {
        splash_screen_showed()
    }, [])

    return (
        <>
            <SafeAreaView style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'space-between', flex: 1 }}>
                <View
                    style={[{ height: (window_.height / 100) * 69, backgroundColor: '#F3D25C' }]}
                >
                    <Text
                        style={[
                            tw.textWhite,
                            tw.textCenter,
                            tw.absolute,
                            {
                                fontSize: 35,
                                paddingHorizontal: 15,
                                top: 80,
                                zIndex: 100,
                                fontWeight: '700',
                                fontFamily: 'sans-serif'
                            }
                        ]}
                    >A new way to connect with your favourite people</Text>
                    <View
                        style={[
                            tw.absolute,
                            tw.roundedFull,
                            {
                                top: 20,
                                left: 0,
                                width: 40,
                                height: 40,
                                backgroundColor: '#50D88C',
                                transform: [
                                    { translateX: -20 }
                                ]
                            }
                        ]}
                    ></View>
                    <View
                        style={[
                            tw.absolute,
                            tw.roundedFull,
                            {
                                top: 170,
                                right: 0,
                                width: 110,
                                height: 110,
                                backgroundColor: '#FFE1A7',
                                transform: [
                                    { translateX: 55 }
                                ]
                            }
                        ]}
                    ></View>
                    <View
                        style={[styles.bigCircle, tw.absolute,]}
                    >
                        <View style={[styles.small_into_big, tw.absolute]} />
                    </View>
                    <View
                        style={[
                            styles.similar_btm_1,
                            tw.absolute,
                            tw.roundedFull,
                            tw.bottom0,
                            tw.left0,
                            {
                                width: ls_circle - 4,
                                height: ls_circle - 4
                            }
                        ]}
                    />
                    <View
                        style={[
                            styles.similar_big,
                            tw.absolute,
                            tw.roundedFull,
                            tw.bottom0,
                            tw.right0,
                            {
                                width: rb_circle,
                                height: rb_circle,
                                transform: [
                                    { translateX: rb_circle / 2 },
                                    { translateY: rb_circle / 2 }
                                ]
                            }
                        ]}
                    >
                        <View style={[
                            styles.dark_into_similar_big,
                            tw.roundedFull,
                            {
                                width: rbi_circle,
                                height: rbi_circle,
                                transform: [
                                    { translateX: -(rbi_circle / 2) },
                                    { translateY: -(rbi_circle / 2) }
                                ]
                            }
                        ]} />
                        <View style={[
                            styles.white_into_similar_big,
                            tw.roundedFull,
                            tw.absolute,
                            {
                                width: rbw_circle,
                                height: rbw_circle,
                                transform: [
                                    { translateX: -rbw_circle },
                                    { translateY: -(rbw_circle / 2) },
                                ],
                                zIndex: 1000
                            }
                        ]} >
                            <View
                                style={[
                                    tw.absolute,
                                    {
                                        borderRadius: 1000,
                                        top: '50%',
                                        left: '50%',
                                        width: arc_g,
                                        height: arc_g,
                                        zIndex: 10,
                                        borderWidth: bw_arc,
                                        borderTopLeftRadius: bw_arc + 50,
                                        borderTopRightRadius: bw_arc + 50,
                                        borderBottomRightRadius: 10,
                                        borderBottomLeftRadius: 10,

                                        borderTopColor: "#50D88C",
                                        borderLeftColor: "transparent",
                                        borderRightColor: "transparent",
                                        borderBottomColor: "transparent",
                                        transform: [
                                            { translateX: -(arc_g / 2) },
                                            { translateY: -(arc_g / 2) },
                                            { rotate: '-45deg' }
                                        ],
                                    }
                                ]}
                            >
                                <View
                                    style={[
                                        tw.absolute,
                                        {
                                            borderRadius: 1000,
                                            top: 0,
                                            right: 0,
                                            width: 0,
                                            height: 0,
                                            backgroundColor: 'red',
                                            // zIndex: 10,
                                            borderWidth: 90,
                                            borderTopLeftRadius: 0 + 90,
                                            borderTopRightRadius: 0 + 90,
                                            borderBottomRightRadius: 10,
                                            borderBottomLeftRadius: 10,

                                            borderTopColor: "#50D88C",
                                            borderLeftColor: "transparent",
                                            borderRightColor: "transparent",
                                            borderBottomColor: "transparent",
                                            transform: [
                                                { rotate: '90deg' },
                                                { translateX: -117 },
                                                { translateY: -117 },
                                            ],
                                        }
                                    ]}
                                >

                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View
                    style={[
                        {
                            marginHorizontal : 40,
                            backgroundColor : '#F7AF25',
                            marginBottom : 20,
                            padding : 12,
                            borderRadius : 40
                        }
                    ]}
                >
                    <Text
                    style={{
                        textAlign : 'center',
                        color : 'white',
                        fontSize : 18,
                    }}

                    >Start Now</Text>
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
    },
    dark_into_similar_big: {
        backgroundColor: '#F7AF25',
        top: '50%',
        left: '50%',
    },
    white_into_similar_big: {
        backgroundColor: 'white',
        top: '50%',
        left: 0,
    },

})

export default SplashScreen