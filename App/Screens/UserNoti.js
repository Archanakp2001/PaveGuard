import React from 'react';
import { View, Text } from 'react-native';

import MainTitle from '../Components/MainTitle';
import ProfileCard from '../Components/ProfileCard';
import forward from '../../assets/images/forward.png';
import styles from '../Utils/styles';

const UserNoti = () => {
  return (
    <View style={styles.mainContainer}>
      
      {/* ----------------- Title ------------------- */}
      <MainTitle title='Notifications'/>


      {/* ------------------ Notifications ------------------- */}
      <View style={styles.cards}>

      </View>

    </View>
  );
};

export default UserNoti;