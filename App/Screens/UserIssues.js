import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MainTitle from '../Components/MainTitle';
import place from '../../assets/images/place.png';
import calendar from '../../assets/images/calendar.png';
import alert from '../../assets/images/alert.png';
import styles from '../Utils/styles';
import { API_ROOT } from '../../apiroot';


const UserIssues = () => {
  const [issues, setIssues] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const response = await axios.get(API_ROOT + '/api/complaints/', {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        if (response.data && Array.isArray(response.data.results)) {
          setIssues(response.data.results);
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching issues:", error.message || error);
      }
    };

    fetchIssues();
  }, []);

  const onIssueClick = (issueId) => {
    navigation.navigate('IssueReport', { issueId });
  };

  return (
    <View style={[styles.mainContainer, { paddingBottom: 80 }]}>
      <MainTitle title='Issues' />

      <ScrollView>
        <View style={styles.cards}>
        {issues.length === 0 ? (
            <Text>No issues found.</Text>
          ) : (
            issues.map((issue) => (
              <TouchableOpacity
                key={issue.id}
                style={styles.issues}
                onPress={() => onIssueClick(issue.id)}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.8, borderColor: '#B3B3B3', paddingBottom: 10 }}>
                  <Text style={{ fontWeight: 'bold' }}>{new Date(issue.created_at).toLocaleDateString()}</Text>
                  <Text style={{ fontWeight: 'bold' }}>IN-PROGRESS</Text>
                </View>


                <View style={{ marginTop: 20, gap: 18 }}>
                  
                  <View style={{ flexDirection: 'row', gap: 10 }}>
                    <Image source={place} style={{ height: 24, width: 24 }} />
                    <Text>{issue.location}</Text>
                  </View>

                  <View style={{ flexDirection: 'row', gap: 10 }}>
                    <Image source={alert} style={{ height: 24, width: 24 }} />
                    <Text>{issue.issue_with} - {issue.issue_type}</Text>
                  </View>

                </View>

                
              </TouchableOpacity>
            ))
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default UserIssues;
