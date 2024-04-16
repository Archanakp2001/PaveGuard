
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from './App/Utils/styles'

import SignInScreen from './App/Screens/SignInScreen';
import LoadingScreen from './App/Screens/LoadingScreen';
import SignupPopup from './App/Components/SignupPopup';
import UserSignup from './App/Screens/UserSignup';
import AuthoSignup from './App/Screens/AuthoSignup';
import User from './App/Screens/User';

const Stack = createNativeStackNavigator();

export default function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after delay (simulated loading complete)
    }, 2000); // Simulated loading time: 3 seconds

    return () => clearTimeout(delay); // Cleanup timer on component unmount
  }, []);


  return (
    <TouchableWithoutFeedback onPress={()=> {Keyboard.dismiss();}}>
      <View style={styles.container}>
        
        {isLoading ? (<LoadingScreen />) : (<SignInScreen />)}

        <NavigationContainer>
          <Stack.Navigator>
            {/* <Stack.Screen name="Home" component={LoadingScreen} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} /> */}
            <Stack.Screen name="UserSignup" component={UserSignup} />
            <Stack.Screen name="SignupPopup" component={SignupPopup} />
          </Stack.Navigator>
        </NavigationContainer>

       {/* <UserSignup /> */}
       {/* <AuthoSignup /> */}
       {/* <User /> */}
        
      </View>
    </TouchableWithoutFeedback>

  
  );
}

