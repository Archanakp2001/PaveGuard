import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Timeline from 'react-native-timeline-flatlist';
import axios from 'axios';

import MiniTitle from '../Components/MiniTitle';
import idImage from '../../assets/images/id.png';
import dateImage from '../../assets/images/calendar.png';
import alertImage from '../../assets/images/alert.png';
import { API_ROOT } from '../../apiroot';

import styles from '../Utils/styles';
import Colors from '../Utils/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const IssueReport = () => {
  const route = useRoute();
  const { issueId } = route.params;
  const navigation = useNavigation();

  const [issue, setIssue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchIssueData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const response = await axios.get(`${API_ROOT}/api/complaints/${issueId}/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });

        if (response.data) {
          console.log(response.data);
          setIssue(response.data);
          if (response.data.image) {
            setImages([response.data.image]); // Convert single image URL to an array
          }
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (err) {
        setError(err.message || err);
      } finally {
        setLoading(false);
      }
      setShow(!show);
    };

    fetchIssueData();
  }, [issueId]);

  const onIconClick = () => {
    navigation.goBack();
  };

  const trackData = [
    { time: '09:00', title: 'ISSUE SENT' },
    { time: '10:45', title: 'ISSUE INSPECTED' },
    { time: '12:00', title: 'WORK ISSUED' },
    { time: '14:00', title: 'WORK IN-PROGRESS' },
    { time: '15:30', title: 'WORK COMPLETED' },
  ];

  const renderContent = () => {
    if (!issue) {
      return null; // or a placeholder
    }
    
    return (
      
      <View style={style.issueSummary}>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 55, marginBottom: 30 }}>
          {/* Issue ID */}
          <View style={{ flexDirection: 'row', gap: 5 }}>
            <Image source={idImage} style={{ height: 42, width: 42, tintColor: '#B5B5B5' }} />
            <View>
              <Text style={{ color: Colors.PRIMARY }}>Issue ID</Text>
              <Text style={{ fontWeight: 'bold' }}>#{issue.id}</Text>
            </View>
          </View>
          {/* Issue Date */}
          <View style={{ flexDirection: 'row', gap: 5 }}>
            <Image source={dateImage} style={{ height: 42, width: 42, tintColor: '#B5B5B5' }} />
            <View>
              <Text style={{ color: Colors.PRIMARY }}>Issue Date</Text>
              <Text style={{ fontWeight: 'bold' }}>{issue.created_at}</Text>
            </View>
          </View>

        </View>


        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 40 }}>
          {/* Issue With */}
          <View style={{ flexDirection: 'row', gap: 5 }}>
            <Image source={alertImage} style={{ height: 42, width: 42, tintColor: '#B5B5B5' }} />
            <View>
              <Text style={{ color: Colors.PRIMARY }}>Issue With</Text>
              <Text style={{ fontWeight: 'bold' }}>{issue.issue_with}</Text>
            </View>
          </View>
          {/* Issue Type */}
          <View style={{ flexDirection: 'row', gap: 5 }}>
            <Image source={alertImage} style={{ height: 42, width: 42, tintColor: '#B5B5B5' }} />
            <View>
              <Text style={{ color: Colors.PRIMARY }}>Issue Type</Text>
              <Text style={{ fontWeight: 'bold' }}>{issue.issue_type}</Text>
            </View>
          </View>

        </View>
        <View style={[styles.line, { width: 340, alignSelf: 'center', marginTop: 30 }]} />


        {/* Location */}
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: Colors.PRIMARY, marginBottom: 10, fontSize: 15 }}>Location</Text>
          <Text style={{ lineHeight: 20, textAlign: 'justify' }}>{issue.location}</Text>
        </View>
        <View style={[styles.line, { width: 340, alignSelf: 'center', marginTop: 20 }]} />


        {/* Problem Description */}
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: Colors.PRIMARY, marginBottom: 10, fontSize: 15 }}>Problem Description</Text>
          <Text style={{ lineHeight: 20, textAlign: 'justify' }}>{issue.description}</Text>
        </View>
        <View style={[styles.line, { width: 340, alignSelf: 'center', marginTop: 20 }]} />


        {/* Images */}
        <View style={{ marginTop: 30 }}>
          <Text style={{ color: Colors.PRIMARY, marginBottom: 10, fontSize: 15 }}>Images</Text>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            {show && images.map((imageUri, index) => (
              <View key={index}>
                <Image style={{ height: 100, width: 100 }} source={{ uri: imageUri }} />
              </View>
            ))}
          </View>
        </View>

        {/* Track the Status */}
        <View style={{ marginTop: 20 }}>
          <Timeline
            data={trackData}
            circleSize={16}
            circleColor='#998E7F'
            lineColor='#998E7F'
            listViewStyle={{ height: 50 }}
            timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
            timeStyle={{ textAlign: 'center', backgroundColor: '#ff9797', color: 'white', paddingLeft: 50, borderRadius: 13 }}
            descriptionStyle={{ color: 'gray' }}
            options={{
              style: { paddingTop: 15 },
            }}
            isUsingFlatlist={true}
            showTime={false}
          />
        </View>
      </View>
    );
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error fetching issue: {error}</Text>;
  }

  return (
    <View style={[styles.mainContainer]}>
      {/* Title */}
      <MiniTitle title='Issue Report' navigateTo={onIconClick} />

      <FlatList
        data={[{ key: 'content' }]}
        renderItem={({ item }) => renderContent()}
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
    marginBottom: 50,
  },
  summaryImages: {
    height: 100,
    width: 100,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: '#A3A3A3',
  },
});

export default IssueReport;
