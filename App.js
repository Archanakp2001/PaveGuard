
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
import UserEditProfile from './App/Screens/UserEditProfile';
import UserFeedback from './App/Screens/UserFeedback';
import UserFaqs from './App/Screens/UserFaqs';
import UserSettings from './App/Screens/UserSettings';
import About from './App/Screens/About';
import UserProfile from './App/Screens/UserProfile';
import PasswordChange from './App/Screens/PasswordChange';

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
          <Stack.Screen name="UserProfile" component={UserProfile} />
          <Stack.Screen name="UserEditProfile" component={UserEditProfile} />
          <Stack.Screen name="PasswordChange" component={PasswordChange} />
          <Stack.Screen name="UserFeedback" component={UserFeedback} />
          <Stack.Screen name="UserFaqs" component={UserFaqs} />
          <Stack.Screen name="UserSettings" component={UserSettings} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </TouchableWithoutFeedback>

  );
}

