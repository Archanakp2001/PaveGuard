import React from 'react';
import { View, Text } from 'react-native';

import MainTitle from '../Components/MainTitle';
import styles from '../Utils/styles';

const UserIssues = () => {
  return (
    <View style={styles.mainContainer}>
      
      {/* ----------------- Title ------------------- */}
      <MainTitle title='Issues'/>

    </View>
  );
};

export default UserIssues;