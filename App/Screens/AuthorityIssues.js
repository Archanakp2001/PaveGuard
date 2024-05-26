import React, { useState, useEffect } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import styles from "../Utils/styles";

import MainTitle from "../Components/MainTitle";
import place from '../../assets/images/place.png';
import calendar from '../../assets/images/calendar.png';
import { useIsFocused, useNavigation } from "@react-navigation/native";
import axios from "axios";
import { API_ROOT } from "../../apiroot";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthorityIssues = () => {
    const [issues, setIssues] = useState([]);
    const isFocused = useIsFocused(); // Hook to check if the screen is focused
    const navigation = useNavigation();


    // ------------------ fetch all user issues -------------------
    const fetchIssues = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await axios.get(API_ROOT + '/api/complaints/?user_specific=false', {
                headers: {
                    Authorization: `Token ${token}`, // Include the token in the headers
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


    // ------------- handle issue click -----------------
    const onIssueClick = (issueId) => {
        navigation.navigate('IssueStatusUpdate', { issueId });
    };

    return (
        <View style={styles.mainContainer}>

            {/* ----------------- Title ------------------- */}
            <MainTitle title='Issues' />

            {/* ----------------- Issues ------------------ */}
            <ScrollView>
                <View style={[styles.cards, {marginBottom: 80}]}>
                    {issues.map((issue) => (
                        <TouchableOpacity key={issue.id} style={styles.issues} activeOpacity={0.8} onPress={() => onIssueClick(issue.id)}>
                            <View style={[{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.8, borderColor: '#B3B3B3', paddingBottom: 10 }]}>
                                <Text style={[{ fontWeight: 'bold' }]}>#{issue.id}</Text>
                                <Text style={[{ fontWeight: 'bold' }]}>{issue.status.toUpperCase()}</Text>
                            </View>
                            <View style={[{ marginTop: 20, gap: 18 }]}>
                                <View style={[{ flexDirection: 'row', gap: 10 }]}><Image source={place} /><Text>{issue.location}</Text></View>
                                <View style={[{ flexDirection: 'row', gap: 10 }]}><Image source={calendar} style={[{ height: 24, width: 24 }]} /><Text>{new Date(issue.created_at).toLocaleDateString()}</Text></View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

        </View>
    );
};

export default AuthorityIssues;
