import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import MainTitle from '../Components/MainTitle';
import place from '../../assets/images/place.png';
import menuVertical from '../../assets/images/menuVertical.png';
import styles from '../Utils/styles';
import Colors from '../Utils/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_ROOT } from '../../apiroot';
import { useNavigation } from '@react-navigation/native';
import { UserNotificationsContext } from '../Contexts/UserNotificationsContext';

const UserNoti = () => {

  const { userNotifications } = useContext(UserNotificationsContext);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const getUsername = async () => {
      const token = await AsyncStorage.getItem('token');
      const response = await axios.get(API_ROOT + '/user-profile/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      if (response.data && response.data.username) {
        setUsername(response.data.username);
        console.log(response.data.username);
      } else {
        console.error("Unexpected response format:", response.data);
      }
    };
    
    getUsername();
  }, []);

  const filteredNotifications = userNotifications.filter(notification => notification.user === username);

  // handle notification press 
  const navigation = useNavigation();
  const handleNotificationPress = (issueId) => {
    navigation.navigate('IssueReport', { issueId });
  }; 


  return (
    <View style={styles.mainContainer}>
      
      {/* ----------------- Title ------------------- */}
      <MainTitle title='Notifications'/>


      {/* ------------------ Notifications ------------------- */}
      <View style={styles.cards}>
        
        {filteredNotifications.map((notification) => (
        <TouchableOpacity key={notification.id} style={styles.notifications} onPress={() => handleNotificationPress(notification.issueId)}>
          
          <View style={[{paddingLeft: 10}]}>
            <View style={[{flexDirection: 'row', borderBottomWidth: 0.5, borderColor: '#B3B3B3' ,width: 320, paddingBottom: 6, marginBottom: 10, justifyContent: 'space-between'}]}>
              <Text style={[{fontWeight: 'bold'}]}>{notification.title}</Text>
              <Text>#{notification.issueId}</Text>
            </View>
            <View style={[{flexDirection: 'row', gap: 10}]}>
              <Image source={place} />
              <Text>{notification.location}</Text>
            </View>
          </View>

          <View>
            <Image source={menuVertical} style={[{height: 30, width: 30, marginTop: 15, marginLeft: 10}]}/>
          </View>
          
        </TouchableOpacity>
        ))}

        
      </View>

    </View>
  );
};

export default UserNoti;