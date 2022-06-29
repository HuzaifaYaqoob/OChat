import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../../screens/WelcomeScreen/welcomescreen";


const StoriesStack = createNativeStackNavigator()


const StoriesStackNavigator = () => {
    return (
        <>
            <StoriesStack.Navigator>
                <StoriesStack.Screen name="StoryStackScreen" component={WelcomeScreen} />
            </StoriesStack.Navigator>
        </>
    )
}


export default StoriesStackNavigator