import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {StartScreen, LoginScreen,ListView} from "./src/screen";

const Stack = createStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen"
                screenOptions={
                    {headerShown: false}
            }>
                <Stack.Screen name="LoginScreen"
                    component={LoginScreen}/>
                <Stack.Screen name="StartScreen"
                    component={StartScreen}/>
                <Stack.Screen name="ListView"
                    component={ListView}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}
