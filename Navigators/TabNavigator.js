
import React from "react";
import { Text } from "react-native";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
    HomeStackNavigation,
    StoriesStackNavigation,
    AddButtonStackNavigation,
    CallsStackNavigation,
    SettingsStackNavigation
} from "./StackNavigator";
import { TabIcon } from "../components/Navigation/TabNavComponent";

const Tab = createMaterialBottomTabNavigator()

const TabNavigator = () => {
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    tabBarColor: 'white',
                    title: 'Home',
                }}
                activeColor='red'
                inactiveColor="red"
                backBehavior="history"
                barStyle={{ backgroundColor: 'tomato' }}
            >
                <Tab.Screen
                    name="HomeTabScreen"
                    component={HomeStackNavigation}
                    options={{
                        tabBarIcon: ({focused}) => <TabIcon icon='HOME' active={focused} />,
                        title: '',
                        tabBarLabel : ''
                    }}
                />
                <Tab.Screen name="StoriesTabScreen" component={StoriesStackNavigation} />
                <Tab.Screen name="AddButtonTabScreen" component={AddButtonStackNavigation} />
                <Tab.Screen name="CallsTabScreen" component={CallsStackNavigation} />
                <Tab.Screen name="SettingsTabScreen" component={SettingsStackNavigation} />
            </Tab.Navigator>
        </>
    )
}

export default TabNavigator