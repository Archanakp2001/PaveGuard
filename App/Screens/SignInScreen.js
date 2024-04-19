import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, Button, TouchableOpacity, Linking } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import SigninInput from '../Components/SigninInput';
import SignupPopup from '../Components/SignupPopup';

import userIcon from './../../assets/images/user.png';
import password from './../../assets/images/password.png';

import styles from '../Utils/styles';
import Colors from '../Utils/Colors';
import LoadingScreen from './LoadingScreen';


export default function SignInScreen() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after delay (simulated loading complete)
    }, 2000); // Simulated loading time: 3 seconds

    return () => clearTimeout(delay); // Cleanup timer on component unmount
  }, []);

const [name, setName] = useState('');
const [pwd, setPwd] = useState('');

const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

const handlePress = () => {
    Linking.openURL('https://www.google.co.in/');
    console.log('Forgot Paswword');
}

const navigation = useNavigation();
const onSignIn = () => {
  navigation.navigate('User')
}
  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <View style={styles.container}>

      <KeyboardAwareScrollView
        contentContainerStyle={styles.maincontainer}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false} >

          <View style={styles.container}>

              <StatusBar style="auto" />
              
              {/* ---------- SignIn Image ---------------- */}
              <View style={styles.imgcontainer}>
                  <Image style={[{height: 400}, {width: 300}]} source={require('./../../assets/images/signin_img.png')}/>
              </View>

              {/* -------------- SignIn Form ---------------- */}
              <View style={styles.formcontainer}>
                  <SigninInput icon={userIcon} placeholder='Username' keyboardtype='default' onChangeText={(text)=>setName(text)}/>
                  <SigninInput icon={password} placeholder='Password' keyboardtype='default' component='Password' onChangeText={(text)=>setPwd(text)} secureTextEntry={true}/>
                  
                  <TouchableOpacity onPress={handlePress}><Text style={[styles.text, {textAlign: 'right'},{color:Colors.PRIMARY}]}>Forgot Password?</Text></TouchableOpacity>

                  <TouchableOpacity onPress={onSignIn}>
                      <View style={styles.button}>
                          <Text style={styles.buttonText}>SIGN IN</Text>
                      </View>
                  </TouchableOpacity>

                  <View style={[{flexDirection: 'row'}, {justifyContent: 'center'}, {marginTop: 30}]}>
                      <Text style={[styles.text, {letterSpacing: 0.5}, ]}>Don't have an account? </Text>
                      <TouchableOpacity onPress={togglePopup}>
                          <Text style={[styles.text, {textDecorationLine:'underline'}, {letterSpacing: 0.5}, {color:Colors.PRIMARY}]}>Sign Up</Text>
                      </TouchableOpacity>
                      <SignupPopup isVisible={isPopupVisible} onClose={togglePopup} />
                  </View>
                  
              </View>
          
          </View>

      </KeyboardAwareScrollView>
    </View>

  );
}