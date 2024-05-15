import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

import backward from './../../assets/images/backward.png';
import styles from '../Utils/styles';
import MiniTitle from '../Components/MiniTitle';

const PasswordChange = () => {

  const navigation = useNavigation();

  const onIconClick = () => {
    navigation.goBack()
  }
  const onSave = () => {
    navigation.navigate('UserEditProfile')
  }

  return (
    <KeyboardAwareScrollView
    contentContainerStyle={styles.miniContainer}
    resetScrollToCoords={{ x: 0, y: 0 }}
    scrollEnabled={true}
    showsVerticalScrollIndicator={false} >

      <View style={styles.mainContainer}>
        
        {/* ---------------------- Title ------------------- */}
        <MiniTitle title='Change Password' navigateTo={onIconClick}/>


        {/* -------------------- Edit fields ------------------- */}
        <View style={[{alignItems: 'center', marginTop: 30}]}>
          <TextInput placeholder='Old Password' style={styles.editInput}/>
          <TextInput placeholder='New Password' style={styles.editInput}/>
          <TextInput placeholder='Confirm Password' style={styles.editInput}/>
        </View>


        {/* ------------------- Save button --------------------- */}
        <TouchableOpacity onPress={onSave} style={[{alignItems: 'center', marginTop: 20}]}>
          <View style={[styles.button, {width: 350, marginTop: 20}]}>
            <Text style={[styles.buttonText, {letterSpacing: 2, fontSize: 18, }]}>SAVE</Text>
          </View>
        </TouchableOpacity>

      </View>

    </KeyboardAwareScrollView>
  );
};

export default PasswordChange;