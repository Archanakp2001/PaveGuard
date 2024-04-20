import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import backward from './../../assets/images/backward.png';
import styles from '../Utils/styles';
import { useNavigation } from '@react-navigation/native';
import Colors from '../Utils/Colors';

const UserEditProfile = () => {

  const navigation = useNavigation();
  const onPasswordChange = () => {
    navigation.navigate('PasswordChange')
  }
  const onSubmit = () => {
    navigation.navigate('UserProfile')
  }
  const onIconClick = () => {
    navigation.navigate('UserProfile')
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
          <Text style={styles.miniHead}>Edit Profile</Text>
        </View>
        <View style={styles.miniLine} />
      </View>


      {/* -------------------- Edit fields ------------------- */}
      <View style={[{alignItems: 'center', marginTop: 30}]}>
        <TextInput placeholder='@Username' style={styles.editInput}/>
        <TextInput placeholder='@Phone no' style={styles.editInput} keyboardType='numeric'/>
        <TextInput placeholder='@Email' style={styles.editInput}/>
        <TextInput placeholder='@Place' style={styles.editInput}/>
        <TextInput placeholder='@Panchayath' style={styles.editInput}/>
      </View>


      {/* ------------------ Change password -------------------- */}
      <TouchableOpacity onPress={onPasswordChange} style={[{alignItems: 'center'}]}>
        <View style={[{ width: 350, marginTop: 40, borderColor: Colors.PRIMARY, borderWidth: 1, height:50, borderRadius: 15, justifyContent: 'center'}]}>
          <Text style={[{color:Colors.PRIMARY, letterSpacing: 1, fontSize: 16, textAlign: 'center'}]}>Change Password</Text>
        </View>
      </TouchableOpacity>


      {/* ----------------- Submit button --------------------- */}
      <TouchableOpacity onPress={onSubmit} style={[{alignItems: 'center'}]}>
        <View style={[styles.button, {width: 350, marginTop: 20}]}>
          <Text style={[styles.buttonText, {letterSpacing: 2, fontSize: 18}]}>SUBMIT</Text>
        </View>
      </TouchableOpacity>


    </View>

    </KeyboardAwareScrollView>
  );
};

export default UserEditProfile;