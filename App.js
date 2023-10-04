import 'react-native-gesture-handler';
import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DailyPicScreen from "./screens/DailyPic";
import HomeScreen from "./screens/Home";
import SpaceCraftScreen from "./screens/SpaceCraft";
import StarMapScreen from "./screens/StarMap";

const Stack = createStackNavigator()
 function App() {
  return (
<NavigationContainer>
  <Stack.Navigator initialRouteName="Home" screenOptions={{
    headerShown:false
  }}>
    <Stack.Screen name="DailyPic" component={DailyPicScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen} />
    <Stack.Screen name="StarMap" component={StarMapScreen} />
  </Stack.Navigator>
</NavigationContainer>
  );
}

export default App;