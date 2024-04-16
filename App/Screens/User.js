// import React from "react"; 
// import { Ionicons } from "@expo/vector-icons"; 
// import { createAppContainer } from "react-navigation"; 
// import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"; 
// import { Image } from "react-native";

// import styles from "../Utils/styles";

// import userHome from './UserHome';
// import userIssues from  './UserIssues';
// import userNotifications from './UserNoti';
// import userProfile from './UserProfile';


// const TabNavigator = createMaterialBottomTabNavigator( 
    
//     { 
//       Home: { 
//         screen: userHome, 
//         navigationOptions: { 
//           tabBarLabel: "Home", 
//           tabBarIcon: (tabInfo) => ( 
//             <Image source={require('./../../assets/images/user.png')} style={styles.inputicon}/>
//           ), 
//         }, 
//       }, 
//       Issues: { 
//         screen: userIssues, 
//         navigationOptions: { 
//           tabBarLabel: "Issues", 
//           tabBarIcon: (tabInfo) => ( 
//             <Image source={require('./../../assets/images/user.png')} style={styles.inputicon}/>
//           ),
//         }, 
//       }, 
//       Notifications: { 
//         screen: userNotifications, 
//         navigationOptions: { 
//           tabBarLabel: "Notifications", 
//           tabBarIcon: (tabInfo) => ( 
//             <Image source={require('./../../assets/images/user.png')} style={styles.inputicon}/> 
//           ), 
//         }, 
//       }, 
//       Profile: { 
//         screen: userProfile, 
//         navigationOptions: { 
//           tabBarLabel: "Profile", 
//           tabBarIcon: (tabInfo) => ( 
//             <Image source={require('./../../assets/images/user.png')} style={styles.inputicon}/> 
//           ), 
//         }, 
//       }, 
//     }, 

//     { 
//       initialRouteName: "Home", 
//       barStyle: { backgroundColor: "#006600" }, 
//     } 
    
//   ); 

// //   const AppContainer = createAppContainer(User);
// //     export default AppContainer;

//     const AppContainer = createAppContainer(TabNavigator); 
  
//     export default function App() { 
//       return ( 
//         <AppContainer />
//       ); 
//     }   

import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Import screen components
import userHome from './UserHome';
import userIssues from './UserIssues';
import userNotifications from './UserNoti';
import userProfile from './UserProfile';

import styles from '../Utils/styles';

const Tab = createBottomTabNavigator();

const User = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        activeTintColor: '#006600',
        inactiveTintColor: '#999999',
        style: {
          backgroundColor: '#f8f8f8',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={userHome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('./../../assets/images/user.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Issues"
        component={userIssues}
        options={{
          tabBarLabel: 'Issues',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('./../../assets/images/email.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={userNotifications}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('./../../assets/images/add.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={userProfile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('./../../assets/images/user.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
};

export default User;
