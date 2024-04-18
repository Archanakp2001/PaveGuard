
import React from 'react';
import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native';
import { StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ImagePicker from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';

import SignupInput from '../Components/SignupInput';

import userIcon from './../../assets/images/user.png';
import phone from './../../assets/images/phone.png';
import email from './../../assets/images/email.png';
import place from './../../assets/images/place.png';
import panchayath from './../../assets/images/panchayath.png';
import license from './../../assets/images/license.png';
import password from './../../assets/images/password.png';
import confirm from './../../assets/images/confPassword.png';
import User from './../../assets/images/signup_User.png';
import add from './../../assets/images/add.png'

import styles from '../Utils/styles';
import Colors from '../Utils/Colors';

const AuthoSignup = () => {

  const navigation = useNavigation();

  const onSignInClick = () => {
    navigation.navigate('SignInScreen')
  }

  const selectFromGallery = () => {
    console.log(ImagePicker);
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        console.log(source); // Handle the selected image source
      }
    });
  };



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
          <Text style={styles.titleHead}>Authority Sign Up</Text>
          <View style={styles.line} />
        </View>

        {/* ------------- Profile pic ------------- */}
        <View style={[styles.categoryIcon, {height: 100}, {width: 100}, ]}>
          <Image style={[{height: 80},{width: 80}, {marginTop: 10}]} source={User}/>
          <Pressable onPress={selectFromGallery}><Image source={add} style={[{marginLeft: 60}, {marginTop: -6}]} /></Pressable>
        </View>
        
        {/* ------------- Details ------------- */}
        <View>

          <SignupInput style={[styles.input, {marginTop: 15}]} icon={userIcon} placeholder='Authority Name' keyboardtype='default'/>
          <SignupInput style={[styles.input, {marginTop: 15}]} icon={phone} placeholder='Phone no' keyboardtype='numeric'/>
          <SignupInput style={[styles.input, {marginTop: 15}]} icon={email} placeholder='Email id' keyboardtype='default'/>
          <SignupInput style={[styles.input, {marginTop: 15}]} icon={place} placeholder='Place' keyboardtype='default'/>
          <SignupInput style={[styles.input, {marginTop: 15}]} icon={panchayath} placeholder='Department' keyboardtype='default'/>
          <SignupInput style={[styles.input, {marginTop: 15}]} icon={license} placeholder='License no' keyboardtype='default'/>
          <SignupInput style={[styles.input, {marginTop: 15}]} icon={password} placeholder='Password' keyboardtype='default' secureTextEntry={true}/>
          <SignupInput style={[styles.input, {marginTop: 15}]} icon={confirm} placeholder='Confirm Password' keyboardtype='default' secureTextEntry={true}/>        
          
          <TouchableOpacity>
            <View style={[styles.button, {marginTop: 20}]}>
              <Text style={styles.buttonText}>SIGN UP</Text>
            </View>
          </TouchableOpacity>

          <View style={[{flexDirection: 'row'}, {justifyContent: 'center'}, {marginTop: 20}]}>
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

export default AuthoSignup;
