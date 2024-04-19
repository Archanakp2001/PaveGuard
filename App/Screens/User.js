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





// import React from 'react';
// import { Image } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// // Import screen components
// import userHome from './UserHome';
// import userIssues from './UserIssues';
// import userNotifications from './UserNoti';
// import userProfile from './UserProfile';

// import styles from '../Utils/styles';

// const Tab = createBottomTabNavigator();

// const User = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={{
//         activeTintColor: '#006600',
//         inactiveTintColor: '#696969',
//         style: styles.tabBar,
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={userHome}
//         options={{
//           tabBarLabel: 'Home' ,
//           tabBarIcon: ({ focused, color, size }) => (
//             <Image
//               source={require('./../../assets/images/home.png')}
//               style={{ width: size, height: size, tintColor: color}}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Issues"
//         component={userIssues}
//         options={{
//           tabBarLabel: 'Issues',
//           tabBarIcon: ({ focused, color, size }) => (
//             <Image
//               source={require('./../../assets/images/issues.png')}
//               style={{ width: size, height: size, tintColor: color }}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Notifications"
//         component={userNotifications}
//         options={{
//           tabBarLabel: 'Notifications',
//           tabBarIcon: ({ focused, color, size }) => (
//             <Image
//               source={require('./../../assets/images/notifications.png')}
//               style={{ width: size, height: size, tintColor: color }}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={userProfile}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({ focused, color, size }) => (
//             <Image
//               source={require('./../../assets/images/user.png')}
//               style={{ width: size, height: size, tintColor: color }}
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default User;




import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import screen components
import userHome from './UserHome';
import userIssues from './UserIssues';
import userNotifications from './UserNoti';
import userProfile from './UserProfile';

import styles from '../Utils/styles';
import Colors from '../Utils/Colors';

const Tab = createBottomTabNavigator();

const User = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions = {{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 15,
          right: 15,
          shadowOpacity: 30,
          elevation: 6,
          height: 60,
          borderRadius: 20,
          backgroundColor: Colors.WHITE,
          
        }, 
        
      }}
      
      
    >
      <Tab.Screen
        name="Home"
        component={userHome}
        options={{
          tabBarLabel: 'Home' ,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('./../../assets/images/home.png')}
              style={{ width: 30, height: 30, tintColor: focused ? Colors.PRIMARY : '#B0B0B0'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Issues"
        component={userIssues}
        options={{
          tabBarLabel: 'Issues',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('./../../assets/images/issues.png')}
              style={{ width: 30, height: 30, tintColor: focused ? Colors.PRIMARY : '#B0B0B0' }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={userNotifications}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('./../../assets/images/notifications.png')}
              style={{ width: 30, height: 30, tintColor: focused ? Colors.PRIMARY : '#B0B0B0' }}
            />
          ),
          tabBarBadge: 2
        }}
      />
      <Tab.Screen
        name="Profile"
        component={userProfile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('./../../assets/images/user.png')}
              style={{ width: 30, height: 30, tintColor: focused ? Colors.PRIMARY : '#B0B0B0' }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default User;
