

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../../screens/WelcomeScreen/welcomescreen";



const AddStack = createNativeStackNavigator()
const AddButtonStackNavigator = () => {
    return (
        <>
            <AddStack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <AddStack.Screen name="AddStackScreen" component={WelcomeScreen} />
            </AddStack.Navigator>
        </>
    )
}

export default AddButtonStackNavigator