import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useMemo, useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EventRegister } from 'react-native-event-listeners'
// ==================================================================================
const Stack = createNativeStackNavigator();
// ==================================================================================
import Home from './screens/Home';
import Regisster from './screens/Register';
import Auth from './screens/Auth';
import Tech from './screens/Tech';
import Politic from './screens/Politic';
import OpenPer from './screens/Per/OpenPer';
import Actived from './screens/Per/Actived';


import Content from './screens/Content';
import Profile from './screens/Profile';

import Cont from './screens/Zak/Cont';
import Opener from './screens/Zak/Opener';
import Prof from './screens/Zak/Prof';




export default function App() {

  const [user, setUser] = React.useState(0);

  var token = localStorage.getItem('user');



  useEffect(() => {
    setUser(token);
    EventRegister.addEventListener('user', (data) => {
      setUser(data);
    });
  }, []);

  if (user == 0) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Regisster" component={Regisster} options={{ headerShown: false }} />
          <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
          <Stack.Screen name="Tech" component={Tech} options={{ headerShown: false }} />
          <Stack.Screen name="Politic" component={Politic} options={{ headerShown: false }} />
          <Stack.Screen name="OpenPer" component={OpenPer} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else if (user == 1) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Content" component={Content} options={{ headerShown: false }} />
          <Stack.Screen name="Tech" component={Tech} options={{ headerShown: false }} />
          <Stack.Screen name="Politic" component={Politic} options={{ headerShown: false }} />
          <Stack.Screen name="OpenPer" component={OpenPer} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
          <Stack.Screen name="Actived" component={Actived} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else if (user == 2) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Cont" component={Cont} options={{ headerShown: false }} />
          <Stack.Screen name="Tech" component={Tech} options={{ headerShown: false }} />
          <Stack.Screen name="Politic" component={Politic} options={{ headerShown: false }} />
          <Stack.Screen name="Opener" component={Opener} options={{ headerShown: false }} />
          <Stack.Screen name="Prof" component={Prof} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};