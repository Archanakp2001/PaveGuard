
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from './App/Utils/styles'

import SignInScreen from './App/Screens/SignInScreen';
import UserSignup from './App/Screens/UserSignup';
import AuthoSignup from './App/Screens/AuthoSignup';
import User from './App/Screens/User';
import UserHome from './App/Screens/UserHome';

const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <TouchableWithoutFeedback onPress={()=> {Keyboard.dismiss();}}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="SignInScreen"
          screenOptions={{
            headerShown: false
          }}> 
          <Stack.Screen name="SignInScreen" component={SignInScreen} /> 
          <Stack.Screen name="UserSignup" component={UserSignup} />
          <Stack.Screen name="AuthoSignup" component={AuthoSignup} />
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="UserHome" component={UserHome} />
        </Stack.Navigator>
      </NavigationContainer>
    </TouchableWithoutFeedback>

  );
}

