import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Timeline from 'react-native-timeline-flatlist';

import MiniTitle from '../Components/MiniTitle';
import id from '../../assets/images/id.png';
import date from '../../assets/images/calendar.png';
import alert from '../../assets/images/alert.png';

import styles from '../Utils/styles';
import Colors from '../Utils/Colors';

const IssueReport = () => {
  const navigation = useNavigation();

  const onIconClick = () => {
    navigation.goBack();
  };

  const trackData = [
      {time: '09:00', title: 'Issue sent'},
      {time: '10:45', title: 'Inspected'},
      {time: '12:00', title: 'Pending'},
      {time: '14:00', title: 'In-Progress'},
  ];

  const renderContent = () => (
    <View style={style.issueSummary}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 50 }}>
        {/* Issue id */}
        <View style={{ flexDirection: 'row', gap: 5 }}>
          <Image source={id} style={{ height: 42, width: 42, tintColor: '#B5B5B5' }} />
          <View>
            <Text style={{ color: Colors.PRIMARY }}>Issue ID</Text>
            <Text style={{ fontWeight: 'bold' }}>#8257910</Text>
          </View>
        </View>
        {/* Issue date */}
        <View style={{ flexDirection: 'row', gap: 5 }}>
          <Image source={date} style={{ height: 42, width: 42, tintColor: '#B5B5B5' }} />
          <View>
            <Text style={{ color: Colors.PRIMARY }}>Issue Date</Text>
            <Text style={{ fontWeight: 'bold' }}>26/09/2024</Text>
          </View>
        </View>
        {/* Issue with */}
        <View style={{ flexDirection: 'row', gap: 5 }}>
          <Image source={alert} style={{ height: 42, width: 42, tintColor: '#B5B5B5' }} />
          <View>
            <Text style={{ color: Colors.PRIMARY }}>Issue With</Text>
            <Text style={{ fontWeight: 'bold' }}>Road</Text>
          </View>
        </View>
        {/* Issue type */}
        <View style={{ flexDirection: 'row', gap: 5 }}>
          <Image source={alert} style={{ height: 42, width: 42, tintColor: '#B5B5B5' }} />
          <View>
            <Text style={{ color: Colors.PRIMARY }}>Issue Type</Text>
            <Text style={{ fontWeight: 'bold' }}>Pothole</Text>
          </View>
        </View>
      </View>
      <View style={[styles.line, { width: 340, alignSelf: 'center', marginTop: 30 }]} />

      {/* Problem description */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ color: Colors.PRIMARY, marginBottom: 10, fontSize: 15 }}>Problem Description</Text>
        <Text style={{ lineHeight: 20, textAlign: 'justify' }}>Detailed description of the problem like Lorem Ipsum Emoras.</Text>
      </View>

      {/* Images */}
      <View style={{ marginTop: 30 }}>
        <Text style={{ color: Colors.PRIMARY, marginBottom: 10, fontSize: 15 }}>Images</Text>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <View style={style.summaryImages}><Image style={{ height: 100, width: 100 }} /></View>
          <View style={style.summaryImages}><Image style={{ height: 100, width: 100 }} /></View>
          <View style={style.summaryImages}><Image style={{ height: 100, width: 100 }} /></View>
        </View>
      </View>

      {/* Track the status */}
      <View style={{marginTop: 30}}>
        <Timeline
          data={trackData}
          circleSize={18}
          circleColor='#85663C'
          lineColor='#85663C'
          listViewStyle={{height: 50}}
          timeContainerStyle={{minWidth:52, marginTop: -5}}
          timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', paddingLeft:50, borderRadius:13}}
          descriptionStyle={{color:'gray'}}
          options={{
            style:{paddingTop:5,}
          }}
          isUsingFlatlist={true}
          showTime={false}
        />
      </View>
    </View>
  );

  return (
    <View style={[styles.miniContainer]}>
      {/* Title */}
      <MiniTitle title='Issue Report' navigateTo={onIconClick} />

      <FlatList
        data={[{ key: 'content' }]}
        renderItem={renderContent}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const style = StyleSheet.create({
  issueSummary: {
    width: 360,
    borderWidth: 0.5,
    borderColor: Colors.BORDER,
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: 20,
    padding: 20,
    marginBottom: 50
  },
  summaryImages: {
    height: 100,
    width: 100,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: '#A3A3A3',
  }
});

export default IssueReport;
