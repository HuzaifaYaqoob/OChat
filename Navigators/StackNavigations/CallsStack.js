import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../../screens/WelcomeScreen/welcomescreen";


const CallStack = createNativeStackNavigator()


const CallsStackNavigator = () => {
    return (
        <>
            <CallStack.Navigator>
                <CallStack.Screen name="CallListScreen" component={WelcomeScreen} />
            </CallStack.Navigator>
        </>
    )
}

export default CallsStackNavigator