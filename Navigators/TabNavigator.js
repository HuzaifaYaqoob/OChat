
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
                }}
                activeColor='white'
                backBehavior="history"

                barStyle={{
                    // backgroundColor: 'tomato',
                    position: 'absolute',
                    bottom: 10,
                    left: 10,
                    right: 10,
                    height: 54,
                    borderRadius: 10,
                    elevation: 1,
                    overflow: 'hidden',
                    shadowColor: 'darkgray',
                    shadowOffset: {
                        width: 0,
                        height: 0
                    },
                    shadowOpacity: 1,
                    shadowRadius: 1
                }}
            >
                <Tab.Screen
                    name="HomeTabScreen"
                    component={HomeStackNavigation}
                    options={{
                        tabBarIcon: ({ focused }) => <TabIcon icon='HOME' active={focused} />,
                        // tabBarColor : 'red',
                        // tabBarLabel : 'hello'
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