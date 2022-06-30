
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
                labeled={false}
                screenOptions={{
                    tabBarColor: 'white',
                    title: 'Home',
                }}
                activeColor='gray'
                backBehavior="history"
                barStyle={{ backgroundColor: 'tomato' }}
            >
                <Tab.Screen
                    name="HomeTabScreen"
                    component={HomeStackNavigation}
                    options={{
                        tabBarIcon: ({ focused }) => <TabIcon icon='HOME' active={focused} />,
                    }}
                />
                <Tab.Screen
                    name="StoriesTabScreen"
                    component={StoriesStackNavigation}
                    options={{
                        tabBarIcon: ({ focused }) => <TabIcon icon='STORY' active={focused} />,
                    }}
                />
                <Tab.Screen
                    name="AddButtonTabScreen"
                    component={AddButtonStackNavigation}
                    options={{
                        tabBarIcon: ({ focused }) => <TabIcon icon='ADD' active={focused} />,
                    }}
                />
                <Tab.Screen
                    name="CallsTabScreen"
                    component={CallsStackNavigation}
                    options={{
                        tabBarIcon: ({ focused }) => <TabIcon icon='CALL' active={focused} />,
                    }}
                />
                <Tab.Screen
                    name="SettingsTabScreen"
                    component={SettingsStackNavigation}
                    options={{
                        tabBarIcon: ({ focused }) => <TabIcon icon='SETTING' active={focused} />,
                    }}
                />
            </Tab.Navigator>
        </>
    )
}

export default TabNavigator