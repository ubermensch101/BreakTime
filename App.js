import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./screens/Home";
import Activities from "./screens/Activities";
import Change_Activities from "./screens/Customise_Activities";
import Activities_Timer from "./screens/Timer";

const Stack=createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerMode: "none",
        //mode: "modal",
        //headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Activities" component={Activities} />
      <Stack.Screen name="Change_Activities" component={Change_Activities}/>
      <Stack.Screen name="Timer" component={Activities_Timer}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}
