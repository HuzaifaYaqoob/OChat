import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../../screens/WelcomeScreen/welcomescreen";


const SettingsStack = createNativeStackNavigator()


const SettingsStackNavigator = () => {
    return (
        <>
            <SettingsStack.Navigator>
                <SettingsStack.Screen name="SettingStackScreen" component={WelcomeScreen} />
            </SettingsStack.Navigator>
        </>
    )
}

export default SettingsStackNavigator