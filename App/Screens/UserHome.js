import React, {useState} from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import SearchBar from '../Components/SearchBar.js';
import AutoComplete from '../Components/AutoComplete.js';
import styles from '../Utils/styles';
import Colors from '../Utils/Colors.js';
import ImageCarousel from '../Components/ImageCarousel.js';
import SlideUpView from '../Components/SlideUpView.js';

navigator.geolocation = require('react-native-geolocation-service');

const UserHome = () => {

  const handleSearch = (location) => {
    console.log(location);
  };
  
  const [isSlideUpVisible, setIsSlideUpVisible] = useState(false);

  return (
    
    <View style={[styles.mainContainer, {paddingBottom: 100}]}>
      <ScrollView keyboardShouldPersistTaps='always'>

      <View style={[{height: 550}]}>

        {/* --------------------- Searchbar --------------------- */}
        {/* <SearchBar onSearch={handleSearch}/> */}
        <AutoComplete />

        {/* ------------------------ Map ------------------------ */}
        <View style={[{flex: 1}]}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker
              coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
              title="Marker Title"
              description="Marker Description"
            />
          </MapView>
        </View>
      
      </View>

      {/* ------------------- Post issue -------------------- */}
      <TouchableOpacity style={[{alignItems: 'center'}]} onPress={() => setIsSlideUpVisible(true)}>
        <View style={styles.issueButton}>
          <Text style={[{color: Colors.WHITE, fontSize: 18}]}>+  Report an Issue</Text>
        </View>
      </TouchableOpacity>
      <SlideUpView
        isVisible={isSlideUpVisible}
        onClose={() => setIsSlideUpVisible(false)}
      />
        
      {/* --------------------- About section ----------------- */}
      <View style={[{marginHorizontal: 30, marginTop: 30}]}>
        <Text style={[{color: Colors.PRIMARY, fontSize: 20, fontWeight: '600', marginBottom: 8}]}>About</Text>
        <Text style={[{color: Colors.TEXT, lineHeight: 20, textAlign: 'justify'}]}>PaveGuard is an Infrastructure Maintenance App that allows citizens to report road damage and navigate easily. 
        There is an option for users to report issues.
        The user may also provide a brief description of the problem, such as potholes, cracks, or road debris. 
        The report is confirmed once it has been submitted, and the authority may contact the user with an update on the status of the repair.
        </Text>
      </View>

      {/* --------------------- Gallery section ----------------- */}
      <View style={[{marginHorizontal: 30, marginTop: 50}]}>
        <Text style={[{color: Colors.PRIMARY, fontSize: 20, fontWeight: '600', marginBottom: 10}]}>Gallery</Text>
        <ImageCarousel />
      </View>

    </ScrollView>

    </View>
    
  );
};

export default UserHome;