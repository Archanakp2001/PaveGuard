import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

import backward from './../../assets/images/backward.png';
import styles from '../Utils/styles';

const PasswordChange = () => {

  const navigation = useNavigation();

  const onIconClick = () => {
    navigation.navigate('UserEditProfile')
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
        <View>
          <View style={styles.miniTitle}>
            <TouchableOpacity onPress={onIconClick}><Image source={backward} style={styles.miniIcon} /></TouchableOpacity>
            <Text style={styles.miniHead}>Change Password</Text>
          </View>
          <View style={styles.miniLine} />
        </View>


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