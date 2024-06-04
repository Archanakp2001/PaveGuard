import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { API_ROOT } from "../../../apiroot";

import login from "../auth/login";
import signup from "../auth/signup";

const useLoginOrSignup = (navigation) => {

  const [usernameError, setUsernameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confPasswordError, setConfPasswordError] = useState('')
  const [loading, setLoading] = useState(false)

  const clearErrors = () => {
    setUsernameError('')
    setEmailError('')
    setPhoneError('')
    setPasswordError('')
    setConfPasswordError('')

  };
  

  const handleLogin = async(username, password) => {
    clearErrors();
    if(username == '')
    {
      setUsernameError('Username cannot be empty')
      return
    }
    if(password == '') {
      setPasswordError('Password cannot be empty')
      return
    }


    if(usernameError === '' && passwordError === ''){
      setLoading(true)
      
      const result = await login(username, password, setLoading, setPasswordError);
        if (result.token) {
            navigation.navigate('User', { userDetails: result });
        } else {
            setLoading(false);
            setPasswordError('Invalid credentials');
        }

    }
  }


  const handleSignup = async(username, email, password, phone, place, confPassword) => {
    clearErrors();
    console.log(username, email, password, phone, place, confPassword);
    if(username == '')
    {
      setUsernameError('Username cannot be empty')
      return
    }
    if(phone == '')
    {
      setPhoneError('Phone cannot be empty')
      return
    }
    if(email == '')
    {
      setEmailError('Email id cannot be empty')
      return
    }
    if(password == '') 
    {
      setPasswordError('Password cannot be empty')
      return
    }
    if(confPassword == '') 
    {
      setConfPasswordError('Confirm Password cannot be empty')
      return
    }
    if (password !== confPassword) {
      setConfPasswordError('Passwords do not match')
      return
    }

    setLoading(true)
    console.log("Signing up");

    signup(username, email, password, phone, place).then( (response) => {
      console.log(response);
      setLoading(false)
      if(response.token) {
        navigation.navigate('SignInScreen')
      }
      else {
        setLoading(false)
        if(response.username)
            setUsernameError(response.username[0])
        if(response.email)
            setEmailError(response.email[0])
        if(response.password)
            setPasswordError(response.password[0])
        if (response.profile) {
          if (response.profile.phone) setPhoneError(response.profile.phone[0]);
      }
      }
      
    })

  }


  return {

          usernameError,
          emailError,
          phoneError,
          passwordError,
          confPasswordError,

          handleLogin,
          handleSignup,
          loading
        }
}


export default useLoginOrSignup;