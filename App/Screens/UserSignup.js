
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

import SignupInput from '../Components/SignupInput';

import userIcon from './../../assets/images/user.png';
import phone from './../../assets/images/phone.png';
import email from './../../assets/images/email.png';
import place from './../../assets/images/place.png';
import panchayath from './../../assets/images/panchayath.png';
import password from './../../assets/images/password.png';
import confirm from './../../assets/images/confPassword.png';

import styles from '../Utils/styles';
import Colors from '../Utils/Colors';

const UserSignup = () => {
  
  const navigation = useNavigation();

  const onSignInClick = () => {
    navigation.navigate('SignInScreen');
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.maincontainer}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
      showsVerticalScrollIndicator={false} >


      <View style={styles.container}>

        <StatusBar style='auto'/>

        {/* ------------ Title --------------- */}
        <View style={styles.title}>
          <Text style={styles.titleHead}>User Sign Up</Text>
          <View style={styles.line} />
        </View>

        {/* ------------- Details ------------- */}
        <View style={{marginTop: 20}}>

          <SignupInput style={[styles.input, {marginTop: 20}]} icon={userIcon} placeholder='User Name' keyboardtype='default'/>
          <SignupInput style={[styles.input, {marginTop: 20}]} icon={phone} placeholder='Phone no' keyboardtype='default'/>
          <SignupInput style={[styles.input, {marginTop: 20}]} icon={email} placeholder='Email id' keyboardtype='default'/>
          <SignupInput style={[styles.input, {marginTop: 20}]} icon={place} placeholder='Place' keyboardtype='default'/>
          <SignupInput style={[styles.input, {marginTop: 20}]} icon={panchayath} placeholder='Panchayath' keyboardtype='default'/>
          <SignupInput style={[styles.input, {marginTop: 20}]} icon={password} placeholder='Password' keyboardtype='default'/>
          <SignupInput style={[styles.input, {marginTop: 20}]} icon={confirm} placeholder='Confirm Password' keyboardtype='default'/>        
          
          <TouchableOpacity>
            <View style={[styles.button, {marginTop: 50}]}>
              <Text style={styles.buttonText}>SIGN UP</Text>
            </View>
          </TouchableOpacity>

          <View style={[{flexDirection: 'row'}, {justifyContent: 'center'}, {marginTop: 30}]}>
            <Text style={[styles.text, {letterSpacing: 0.5}, ]}>Already have an account? </Text>
            <TouchableOpacity onPress={onSignInClick}>
              <Text style={[styles.text, {textDecorationLine:'underline'}, {letterSpacing: 0.5}, {color:Colors.PRIMARY}]}>Sign In</Text>
            </TouchableOpacity>
          </View>
                  
        </View>

      </View>
    
        
    </KeyboardAwareScrollView>
  );
};

export default UserSignup;
