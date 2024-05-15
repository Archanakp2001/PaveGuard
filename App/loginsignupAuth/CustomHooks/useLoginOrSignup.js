import { useState, useEffect } from "react";

import login from "../auth/login";
import signup from "../auth/signup";

const useLoginOrSignup = (navigation) => {

  const [usernameError, setUsernameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setUsernameError('')
    setEmailError('')
    setPhoneError('')
    setPasswordError('')

  }, );
  

  const handleLogin = (username, password) => {
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
      login(username, password, setLoading, setPasswordError).then((result) => {
        console.log(result)
        if(result.token){
          setLoading(false)
          navigation.navigate('User', {userDetails: result})
        }
        else {
          setLoading(false)
          setPasswordError('Invalid credentials')
        }
      })
    }
  }

  const handleSignup = async(username, email, password, confPassword) => {
    console.log(username,email,password);
    if(username == '')
    {
      setUsernameError('Username cannot be empty')
      return
    }
    if(email == '')
    {
      setEmailError('Email id cannot be empty')
      return
    }
    
    if(password == '') {
      setPasswordError('Password cannot be empty')
      return
    }
    setLoading(true)
    console.log("Signing up");
    signup(username, email, password).then( (response) => {
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
      }
      
    })

  }


  return {

          usernameError,
          emailError,
          phoneError,
          passwordError,

          handleLogin,
          handleSignup,
          loading
        }
}


export default useLoginOrSignup;