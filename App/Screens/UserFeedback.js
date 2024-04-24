import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import MiniTitle from '../Components/MiniTitle';
import NewFeedback from '../Components/NewFeedback';

import styles from '../Utils/styles';
import Colors from '../Utils/Colors';

const UserFeedback = () => {

  const navigation = useNavigation();
  const onIconClick = () => {
    navigation.navigate('UserProfile');
  }

  // --------------- New feedback popup --------------------
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const onNewFeedback = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  
  return (
    <View style={styles.mainContainer}>

      <KeyboardAwareScrollView
        contentContainerStyle={styles.miniContainer}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false} >
      
        {/* ---------------------- Title ------------------- */}
        <MiniTitle title='Feedbacks' navigateTo={onIconClick}/>


        {/* ----------------- New button ------------------ */}
        <TouchableOpacity onPress={onNewFeedback} style={[{alignItems: 'center'}]}>
          <View style={[styles.button, {width: 360, marginTop: 40}]}>
            <Text style={[styles.buttonText, {letterSpacing: 2, fontSize: 18}]}>+ New</Text>
          </View>
        </TouchableOpacity>
        <NewFeedback isVisible={isPopupVisible} onClose={onNewFeedback} />


        {/* ------------------- Feedbacks ------------------ */}
        <View style={[{alignItems: 'center'}]}>
          <View style={styles.feedbacks}>
              <Text style={[{fontSize: 15, color: Colors.PRIMARY}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor</Text>
          </View>

          <View style={styles.feedbacks}>  
              <Text style={[{fontSize: 15, color: Colors.PRIMARY}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor</Text>
          </View>

          <View style={styles.feedbacks}>  
              <Text style={[{fontSize: 15, color: Colors.PRIMARY}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor</Text>
          </View>
        </View>

      </KeyboardAwareScrollView>
      

    </View>
  );
};

export default UserFeedback;