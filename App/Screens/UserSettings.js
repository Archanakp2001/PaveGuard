import React, {useState} from 'react';
import { View, Text, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MiniTitle from '../Components/MiniTitle';
import styles from '../Utils/styles';
import Colors from '../Utils/Colors';

const UserSettings = () => {

  const navigation = useNavigation();
  const onIconClick = () => {
    navigation.navigate('UserProfile');
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    
    <View style={styles.mainContainer}>
      
      {/* ---------------------- Title ------------------- */}
      <MiniTitle title='Settings' navigateTo={onIconClick}/>


      {/* ------------------- Features ------------------- */}
      <View style={[{alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}]}>
        <View style={styles.settings}>
          <Text style={[{ fontSize: 16 }]}>Notifications</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        
      </View>

    </View>

  );
};


export default UserSettings;