import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, Button, TouchableOpacity, Linking, ToastAndroid } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import LoadingScreen from './LoadingScreen';
import SigninInput from '../Components/SigninInput';
import SignupPopup from '../Components/SignupPopup';
import useLoginOrSignup from '../loginsignupAuth/CustomHooks/useLoginOrSignup';

import userIcon from './../../assets/images/user.png';
import passwordIcon from './../../assets/images/password.png';

import styles from '../Utils/styles';
import Colors from '../Utils/Colors';


export default function SignInScreen() {

  // ------------ Loading screen --------------
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after delay (simulated loading complete)
    }, 2000); // Simulated loading time: 2 seconds

    return () => clearTimeout(delay); // Cleanup timer on component unmount
  }, []);

  
  const navigation = useNavigation();
  
// --------------- set input data ------------
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const { usernameError, passwordError, handleLogin, loading } = useLoginOrSignup(navigation)


// --------------- Popup -----------------
const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };


// ---------------- Forgot password --------------
const handlePress = () => {
    Linking.openURL('https://www.google.co.in/');
    console.log('Forgot Paswword');
}


// ---------------- Button sign in click ----------------

// const onSignIn = () => {
//   navigation.navigate('User')
//   ToastAndroid.show('Signed In!', ToastAndroid.SHORT);
// }

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


                {/* ---------- Inputs ----------- */}
                  <SigninInput icon={userIcon} placeholder='Username' keyboardtype='default' onChangeText={(text)=>setUsername(text)}/>
                  <Text style={{color: 'red', paddingTop: 4}}> { usernameError } </Text>
                  
                  <SigninInput icon={passwordIcon} placeholder='Password' keyboardtype='default' component='Password' onChangeText={(text)=>setPassword(text)} secureTextEntry={true}/>
                  <Text style={{color: 'red', paddingTop: 4}}> { passwordError } </Text>
                  
                  <TouchableOpacity onPress={handlePress}><Text style={[styles.text, {textAlign: 'right'},{color:Colors.PRIMARY}]}>Forgot Password?</Text></TouchableOpacity>


                {/* --------- Sign in button ----------- */}
                  <View>{loading}</View>
                  <TouchableOpacity onPress={() => handleLogin(username, password)}>
                      <View style={styles.button}>
                          <Text style={styles.buttonText}>SIGN IN</Text>
                      </View>
                  </TouchableOpacity>


                {/* ------------ For sign up -------------- */}
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