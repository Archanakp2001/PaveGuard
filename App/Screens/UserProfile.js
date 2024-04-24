import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ProfileCard from '../Components/ProfileCard';
import forward from '../../assets/images/forward.png';
import styles from '../Utils/styles';
import MainTitle from '../Components/MainTitle';

const UserProfile = () => {

  const navigation = useNavigation();
  const onEditClick = () => {
    navigation.navigate('UserEditProfile')
  }
  const onFeedbackClick = () => {
    navigation.navigate('UserFeedback')
  }
  const onFaqClick = () => {
    navigation.navigate('UserFaqs')
  }
  const onSettingsClick = () => {
    navigation.navigate('UserSettings')
  }
  const onAboutClick = () => {
    navigation.navigate('About')
  }
  const onLogOut = () => {
    navigation.navigate('SignInScreen')
  }

  return (
    <View style={styles.mainContainer}>
      
      {/* ----------------- Title ------------------ */}
      {/* <View>
        <Text style={styles.mainHead}>Archana</Text>
        <View style={styles.mainLine} />
      </View> */}
      <MainTitle title='Username'/>


      {/* ---------------- Features ----------------- */}
      <View style={styles.cards}>

            <ProfileCard title="Edit Profile" icon={forward} navigateTo={onEditClick} />
            <ProfileCard title="Feedbacks" icon={forward} navigateTo={onFeedbackClick} />
            <ProfileCard title="FAQs" icon={forward} navigateTo={onFaqClick} />
            <ProfileCard title="Settings" icon={forward} navigateTo={onSettingsClick} />
            <ProfileCard title="About" icon={forward} navigateTo={onAboutClick} />

      </View>


      {/* --------------- Log out button ---------------- */}
      <TouchableOpacity onPress={onLogOut} style={[{alignItems: 'center'}]}>
        <View style={[styles.button, {width: 350, marginTop: 120}]}>
          <Text style={[styles.buttonText, {letterSpacing: 2}]}>Log Out</Text>
        </View>
      </TouchableOpacity>


      
    </View>
  );
};

export default UserProfile;