
import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { tw } from 'react-native-tailwindcss'

import { mmkv } from '../../Redux/Storage/storage'

const SplashScreen = (props) => {

    const splash_screen_showed = async () => {
        await mmkv.setBool('splashscreen', true)
    }

    useEffect(() => {
        splash_screen_showed()
    }, [])

    return (
        <>
            <Text>this is splash screen</Text>
        </>
    )
}

export default SplashScreen