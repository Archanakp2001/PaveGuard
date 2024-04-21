import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MiniTitle from '../Components/MiniTitle';
import styles from '../Utils/styles';

const UserSettings = () => {

  const navigation = useNavigation();
  const onIconClick = () => {
    navigation.navigate('UserProfile');
  }

  return (
    
    <View style={styles.mainContainer}>
      
      {/* ---------------------- Title ------------------- */}
      <MiniTitle title='Settings' navigateTo={onIconClick}/>

    </View>

  );
};


export default UserSettings;