import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image, ScrollView, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Dropdown } from 'react-native-element-dropdown';

import cancel from '../../assets/images/cancel.png';
import place from '../../assets/images/place.png';
import addImage from '../../assets/images/addImage.png';
import video from '../../assets/images/video.png';
import road from '../../assets/images/road.png';
import bridge from '../../assets/images/bridge.png';
import drain from '../../assets/images/drain.png';
import tunnel from '../../assets/images/tunnel.png';
import footpath from '../../assets/images/footpath.png';
import others from '../../assets/images/others.png';
import Colors from '../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

const data = [
  { label: 'Pothole', value: 'Pothole' },
  { label: 'Crack', value: 'Crack' },
  { label: 'Blocked', value: 'Blocked' },
  { label: 'Other', value: 'Other' },
];

const SlideUpView = ({ isVisible, onClose }) => {

  // -------- Radio button -----------
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // -------- Dropdown --------
  const [value, setValue] = useState(null);

  // ------------- submit button -------------
  const navigation = useNavigation();
  const onSubmit = () => {
    navigation.navigate('IssueSummary');
  }

  return (
    <Modal
      visible={isVisible}
      animationType='slide'
      backdropOpacity={0.5}
      transparent={true}
      onRequestClose={onClose}
    >
    <View style={styles.modal}>

      {/* ----------------- Close button ----------------- */}
      <TouchableOpacity onPress={onClose}>
          <Image style={styles.closeButton} source={cancel}/>
      </TouchableOpacity>

      {/* ----------------- Content ------------------- */}

      <View style={styles.container}>
        <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false} >

          {/* ---------- Heading ---------- */}
          <Text style={styles.head}>Report an Issue</Text>

          {/* --------- Content --------- */}
          <View style={styles.content}>

            {/* Location Input */}
            <View style={styles.locationInput}>
              <Image source={place} style={[{marginTop: 14}]}/>
              <TextInput placeholder='Location' multiline={true}/>
            </View>

            {/* Upload image */}
            <View style={[{marginTop: 20}]}>
              <Text style={styles.miniHead}>Upload Images</Text>
              <View style={[{flexDirection: 'row', gap: 15}]}>
                <View style={styles.uploadView}>
                  <Image source={addImage} style={styles.uploadImage} />
                </View>
                <View style={styles.uploadView}>
                  <Image source={addImage} style={styles.uploadImage} />
                </View>
                <View style={styles.uploadView}>
                  <Image source={addImage} style={styles.uploadImage} />
                </View>
              </View>
            </View>
            <View style={styles.line} />

            {/* Upload Video */}
            <View style={[{marginTop: 20}]}>
              <Text style={styles.miniHead}>Upload Video</Text>
              <View style={styles.uploadView}>
                <Image source={video} style={styles.uploadImage} />
              </View>
            </View>
            <View style={styles.line} />

            {/* Issue with */}
            <View style={[{marginTop: 20}]}>
              <Text style={styles.miniHead}>Issue With</Text>
              <View style={[{marginTop: 10, flexDirection: 'row', gap: 15, flexWrap: 'wrap'}]}>
                {/* radio1 */}
                <TouchableOpacity style={[styles.radioButton, selectedOption === 'Road' && styles.selectedRadioButton,]} 
                  onPress={() => handleOptionSelect('Road')}>
                  <Image source={road} style={[{height: 50, width: 50}, selectedOption === 'Road' && styles.selectedRadioButtonImage]}/>
                  <Text style={[styles.radioButtonText, selectedOption === 'Road' && styles.selectedRadioButtonText]}>Road</Text>
                </TouchableOpacity>
                {/* radio2 */}
                <TouchableOpacity style={[styles.radioButton, selectedOption === 'Bridge' && styles.selectedRadioButton,]}
                  onPress={() => handleOptionSelect('Bridge')}>
                  <Image source={bridge} style={[{height: 50, width: 50}, selectedOption === 'Bridge' && styles.selectedRadioButtonImage]}/>
                  <Text style={[styles.radioButtonText, selectedOption === 'Bridge' && styles.selectedRadioButtonText]}>Bridge</Text>
                </TouchableOpacity>
                {/* radio3 */}
                <TouchableOpacity style={[styles.radioButton, selectedOption === 'Drain' && styles.selectedRadioButton,]}
                  onPress={() => handleOptionSelect('Drain')}>
                  <Image source={drain} style={[{height: 50, width: 50}, selectedOption === 'Drain' && styles.selectedRadioButtonImage]}/>
                  <Text style={[styles.radioButtonText, selectedOption === 'Drain' && styles.selectedRadioButtonText]}>Drain</Text>
                </TouchableOpacity>
                {/* radio4 */}
                <TouchableOpacity style={[styles.radioButton, selectedOption === 'Footpath' && styles.selectedRadioButton,]}
                  onPress={() => handleOptionSelect('Footpath')}>
                  <Image source={footpath} style={[{height: 50, width: 50}, selectedOption === 'Footpath' && styles.selectedRadioButtonImage]}/>
                  <Text style={[styles.radioButtonText, selectedOption === 'Footpath' && styles.selectedRadioButtonText]}>Footpath</Text>
                </TouchableOpacity>
                {/* radio5 */}
                <TouchableOpacity style={[styles.radioButton, selectedOption === 'Tunnel' && styles.selectedRadioButton,]}
                  onPress={() => handleOptionSelect('Tunnel')}>
                  <Image source={tunnel} style={[{height: 50, width: 50}, selectedOption === 'Tunnel' && styles.selectedRadioButtonImage]}/>
                  <Text style={[styles.radioButtonText, selectedOption === 'Tunnel' && styles.selectedRadioButtonText]}>Tunnel</Text>
                </TouchableOpacity>
                {/* radio6 */}
                <TouchableOpacity style={[styles.radioButton, selectedOption === 'Others' && styles.selectedRadioButton,]}
                  onPress={() => handleOptionSelect('Others')}>
                  <Image source={others} style={[{height: 50, width: 50}, selectedOption === 'Others' && styles.selectedRadioButtonImage]}/>
                  <Text style={[styles.radioButtonText, selectedOption === 'Others' && styles.selectedRadioButtonText]}>Others</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.line} />

            {/* Issue Type */}
            <View style={[{marginTop: 20}]}>
              <Text style={styles.miniHead}>Issue Type</Text>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select item"
                searchPlaceholder="Search..."
                value={value}
                onChange={item => {
                  setValue(item.value);
                }}
              />
            </View>
            {/* <View style={styles.line} /> */}

            {/* Description */}
            <View style={[{marginTop: 20}]}>
              <Text style={styles.miniHead}>Description</Text>
              <View style={styles.description}><TextInput placeholder='Share your issue description' multiline={true}/></View>
            </View>
            {/* <View style={styles.line} /> */}

            {/* Submit button */}
            <View style={[{marginTop: 30}]}>
              <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>

          </View>

        </KeyboardAwareScrollView>
      </View>


    </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  container: {
    backgroundColor: Colors.BACKGROUND,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 20,
    height: 700,
  },
  closeButton: {
    alignSelf: 'center',
    marginBottom: 8,
    tintColor: Colors.PRIMARY,
    height: 32,
    width: 32
  },
  closeButtonText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  head: {
    fontSize: 22,
    color: Colors.PRIMARY,
    fontWeight: 'bold',
    paddingBottom: 8,
    // alignSelf: 'center'
  },
  content: {
    marginTop: 20
  },
  locationInput: {
    height: 50,
    borderWidth: 0.5,
    borderColor: '#A3A3A3',
    borderRadius: 10,
    paddingLeft: 12,
    flexDirection: 'row',
    gap: 6,
    marginBottom: 10,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.HEADLINE,
    marginBottom: 5,
    marginTop: 25
  },
  miniHead: {
    color: Colors.PRIMARY,
    fontWeight: '500',
    letterSpacing: 0.5
  },
  uploadView: {
    height: 90, 
    width: 90, 
    borderWidth: 1, 
    borderStyle: 'dashed', 
    borderColor: '#A3A3A3',
    borderRadius: 10, 
    justifyContent: 'center',
    marginTop: 10
  },
  uploadImage: {
    height: 40, 
    width: 40, 
    alignSelf: 'center', 
    tintColor: '#A3A3A3'
  },

  // ----------------- radio button ----------------
  radioButton: {
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#A3A3A3',
    borderRadius: 10,
    gap: 10
  },
  selectedRadioButton: {
    backgroundColor: 'rgba(133, 102, 60, 0.7)' // Background color when selected
    // borderColor: Colors.PRIMARY,
    // borderWidth: 2
  },
  selectedRadioButtonImage: {
    tintColor: Colors.WHITE,
  },
  selectedRadioButtonText: {
    color: Colors.WHITE
  },
  radioButtonText: {
    fontSize: 14,
  },

  // -------------------- dropdown -------------------
  dropdown: {
    height: 50,
    borderColor: '#A3A3A3',
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

  // --------------- description --------------
  description: {
    height: 120,
    borderWidth: 0.5,
    borderColor: '#A3A3A3',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
  },

  // --------------- submit button --------------
  submitButton: {
    height: 50,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 18,
    textTransform: 'uppercase',
    letterSpacing: 1.5
  }
});

export default SlideUpView;
