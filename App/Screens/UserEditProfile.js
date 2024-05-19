import React, {useState, useEffect} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import MiniTitle from '../Components/MiniTitle';

import styles from '../Utils/styles';
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
    navigation.goBack()
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.91.139:8000/api/users/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (


    <View style={styles.miniContainer}>
            <FlatList
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (

                  <View style={styles.mainContainer}>

                  {/* ---------------------- Title ------------------- */}
                  <MiniTitle title='Edit Profile' navigateTo={onIconClick}/>
            
            
                  {/* -------------------- Edit fields ------------------- */}
                  <View style={[{alignItems: 'center', marginTop: 30}]}>
                  <TextInput
                    style={styles.editInput}
                    defaultValue={item.username}
                    placeholder="@Username"
                  />
                  <TextInput
                    style={styles.editInput}
                    keyboardType="numeric"
                    defaultValue={item.phone}
                    placeholder="@Phone no"
                  />
                  <TextInput
                    style={styles.editInput}
                    defaultValue={item.email}
                    placeholder="@Email"
                  />
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


                )}
            />
    </View>



    
  );
};

export default UserEditProfile;