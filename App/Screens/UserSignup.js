
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

import SignupInput from '../Components/SignupInput';

import userIcon from './../../assets/images/user.png';
import phoneIcon from './../../assets/images/phone.png';
import emailIcon from './../../assets/images/email.png';
import placeIcon from './../../assets/images/place.png';
import panchayathIcon from './../../assets/images/panchayath.png';
import passwordIcon from './../../assets/images/password.png';
import confirm from './../../assets/images/confPassword.png';

import styles from '../Utils/styles';
import Colors from '../Utils/Colors';
import useLoginOrSignup from '../loginsignupAuth/CustomHooks/useLoginOrSignup';

const UserSignup = () => {

  // --------------- set input data ----------------
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [place, setPlace] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');


// --------------- navigation -------------------
const navigation = useNavigation();
const { usernameError, emailError, phoneError, passwordError, handleSignup, loading } = useLoginOrSignup(navigation)
  
  

  const onSignInClick = () => {
    navigation.navigate('SignInScreen');
  }
  // const onSignUpClick = () => {
  //   navigation.navigate('UserHome');
  // }

  

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

          <SignupInput style={[styles.input, {marginTop: 20}]} icon={userIcon} placeholder='User Name' keyboardtype='default' onChangeText={(text)=>setUsername(text)}/>
          <Text style={{color: 'red'}}> { usernameError } </Text>
          
          <SignupInput style={[styles.input, {marginTop: 20}]} icon={phoneIcon} placeholder='Phone no' keyboardtype='default' onChangeText={(text)=>setPhone(text)}/>
          <Text style={{color: 'red'}}> { phoneError } </Text>

          <SignupInput style={[styles.input, {marginTop: 20}]} icon={emailIcon} placeholder='Email id' keyboardtype='default' onChangeText={(text)=>setEmail(text)}/>
          <Text style={{color: 'red'}}> { emailError } </Text>

          <SignupInput style={[styles.input, {marginTop: 20}]} icon={placeIcon} placeholder='Place' keyboardtype='default' onChangeText={(text)=>setPlace(text)}/>
          
          <SignupInput style={[styles.input, {marginTop: 20}]} icon={passwordIcon} placeholder='Password' keyboardtype='default' onChangeText={(text)=>setPassword(text)}/>
          <Text style={{color: 'red'}}> { passwordError } </Text>

          <SignupInput style={[styles.input, {marginTop: 20}]} icon={confirm} placeholder='Confirm Password' keyboardtype='default' onChangeText={(text)=>setConfPassword(text)}/>        
          
          {/* ------------------ Signup button --------------- */}
          <View>{loading}</View>
          <TouchableOpacity onPress={() => handleSignup(username, email, password)}>
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
