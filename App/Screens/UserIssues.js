import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainTitle from '../Components/MainTitle';
import place from '../../assets/images/place.png';
import calendar from '../../assets/images/calendar.png';
import alert from '../../assets/images/alert.png';
import styles from '../Utils/styles';
import { API_ROOT } from '../../apiroot';

const UserIssues = () => {
  const [issues, setIssues] = useState([]);
  const isFocused = useIsFocused(); // Hook to check if the screen is focused
  const navigation = useNavigation();
  const [deleteTimeout, setDeleteTimeout] = useState(null);

  const fetchIssues = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await axios.get(API_ROOT + '/api/complaints/?user_specific=true', {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      if (response.data && Array.isArray(response.data.results)) {
        // Reverse the order of issues array to show recent issues first
        const reversedIssues = response.data.results.reverse();
        setIssues(reversedIssues);
        // console.log(reversedIssues);
      } else {
        console.error("Unexpected response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching issues:", error.message || error);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, [isFocused]); // Fetch data when the screen is focused or refreshed

  const onIssueClick = (issueId) => {
      navigation.navigate('IssueReport', { issueId });
  };

  const startDeleteTimer = (issueId) => {
    const timeout = setTimeout(() => {
      handleDeleteConfirmation(issueId);
    }, 200); // Adjust the duration as needed
    setDeleteTimeout(timeout);
  };

  const cancelDeleteTimer = () => {
    if (deleteTimeout) {
      clearTimeout(deleteTimeout);
      setDeleteTimeout(null);
    }
  };

  const handleDeleteConfirmation = (issueId) => {
    Alert.alert(
      'Delete Issue',
      'Are you sure you want to delete this issue?',
      [
        { text: 'Cancel', style: 'cancel', onPress: cancelDeleteTimer },
        { text: 'Delete', onPress: () => onDeleteIssue(issueId) },
      ],
      { cancelable: true }
    );
  };

  const onDeleteIssue = async (issueId) => {
    try {
      const token = await AsyncStorage.getItem('token');
      await axios.delete(`${API_ROOT}/api/complaints/${issueId}/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      // Refresh issues after deletion
      fetchIssues();
    } catch (error) {
      console.error("Error deleting issue:", error.message || error);
    }
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
                onPress={() => onIssueClick(issue.id)}
                onPressIn={() => startDeleteTimer(issue.id)}
                onPressOut={cancelDeleteTimer}
                activeOpacity={0.8}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.8, borderColor: '#B3B3B3', paddingBottom: 10 }}>
                  <Text style={{ fontWeight: 'bold' }}>{new Date(issue.created_at).toLocaleDateString()}</Text>
                  <Text style={{ fontWeight: 'bold' }}>{issue.status.toUpperCase()}</Text>
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
