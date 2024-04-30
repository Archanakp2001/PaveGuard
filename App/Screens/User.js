
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
