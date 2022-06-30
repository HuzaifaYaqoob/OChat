
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../../screens/SplashScreen";


const SplashStack = createNativeStackNavigator()

const SplashNavigation = () => {
    return (
        <SplashStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <SplashStack.Screen name="SplashScreen" component={SplashScreen} />
        </SplashStack.Navigator>
    )
}

export default SplashNavigation