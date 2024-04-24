import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MiniTitle from '../Components/MiniTitle';
import ProfileCard from './../Components/ProfileCard.js';
import forward from './../../assets/images/forward.png';
import styles from '../Utils/styles';

const About = () => {

  const navigation = useNavigation();
  const onIconClick = () => {
    navigation.navigate('UserProfile');
  }
  const onEditClick = () => {
    navigation.navigate('Sample');
  }

  return (
    
    <View style={styles.mainContainer}>
      
      {/* ---------------------- Title ------------------- */}
      <MiniTitle title='About' navigateTo={onIconClick}/>


      {/* --------------------- Features --------------------- */}
      <View style={[styles.cards, {marginTop: 30}]}>
        <ProfileCard title="Terms of use" icon={forward} navigateTo={onEditClick} />
        <ProfileCard title="Privacy & Policy" icon={forward} navigateTo={onEditClick} />
        <ProfileCard title="About App" icon={forward} navigateTo={onEditClick} />
        <ProfileCard title="App version" />
      </View>
    </View>

  );
};


export default About;