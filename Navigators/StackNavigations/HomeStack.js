
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeChatScreen from '../../screens/HomeScreen/HomeChatScreen'

const HomeStack = createNativeStackNavigator()
const HomeStackNavigator = () => {
    return (
        <>
            <HomeStack.Navigator
                screenOptions={{
                    headerShown : false
                }}
            >
                <HomeStack.Screen name="HomeChatScreen" component={HomeChatScreen} />
            </HomeStack.Navigator>
        </>
    )
}


export default HomeStackNavigator