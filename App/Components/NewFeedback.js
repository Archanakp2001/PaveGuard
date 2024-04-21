import React from 'react';
import { View, Modal, Text, TextInput, TouchableOpacity, Image, Button } from 'react-native';

import styles from '../Utils/styles';

import closeButton from './../../assets/images/closeButton.png';
import { useNavigation } from '@react-navigation/native';
import Colors from '../Utils/Colors';

const NewFeedback = ({ isVisible, onClose }) => {
    const navigation = useNavigation();
    const onSubmit = () => {
        navigation.navigate('UserFeedback');
        onClose();
    }

    return (
      
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}
      >
        <View style={styles.modalContainer}>
  
          {/* --------- close button ---------- */}
          <TouchableOpacity onPress={onClose}>
              <Image style={styles.closeButton} source={closeButton}/>
          </TouchableOpacity>
  
          {/* ------------- window --------------- */}
          <View style={[styles.modalContent, {width: 360, height: 360}]}>
            <View>
                <TextInput style={styles.newFeed} placeholder='Share your feedbacks ...' multiline={true} numberOfLines={10} textAlignVertical="top"/>
            </View>

            <TouchableOpacity onPress={onSubmit} style={[{alignItems: 'center'}]}>
                <View style={[{width: 320, borderWidth: 1, borderColor: Colors.PRIMARY, marginTop: 30, height: 50, borderRadius: 15, justifyContent: 'center'}]}>
                    <Text style={[styles.buttonText, {letterSpacing: 2, fontSize: 18, color: Colors.PRIMARY}]}>SUBMIT</Text>
                </View>
            </TouchableOpacity>
            
          </View>
  
        </View>
      </Modal>
    );
  };
  
  
  export default NewFeedback;
  