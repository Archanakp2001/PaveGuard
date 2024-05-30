import React, { useContext } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "../Utils/styles";
import MainTitle from "../Components/MainTitle";
import place from '../../assets/images/place.png';
import calendar from '../../assets/images/calendar.png';
import menuVertical from '../../assets/images/menuVertical.png';
import { NotificationContext } from "../Contexts/NotificationContext";
import { useNavigation } from "@react-navigation/native";

const AuthorityNoti = () => {

    const navigation = useNavigation();
    const { notifications } = useContext(NotificationContext);

    const handleNotificationPress = (issueId) => {
        navigation.navigate('IssueStatusUpdate', { issueId });
    }; 

    return (
        <View style={styles.mainContainer}>

            {/* ----------------- Title ------------------- */}
            <MainTitle title='Notifications'/>

            {/* ------------------- Notifications ------------------------ */}
            <View style={styles.cards}>
                {notifications.map(notification => (
                    <TouchableOpacity key={notification.id} style={[styles.notifications, ]} onPress={() => handleNotificationPress(notification.issueId)}>
                        <View style={[{ paddingLeft: 10 }]}>
                            <View style={[{ flexDirection: 'row', borderBottomWidth: 0.5, borderColor: '#B3B3B3', width: 320, paddingBottom: 6, marginBottom: 10, justifyContent: 'space-between' }]}>
                                <Text style={[{ fontWeight: 'bold' }]}>{notification.title}</Text>
                                <Text>#{notification.issueId}</Text>
                            </View>
                            <View style={[{ flexDirection: 'row', gap: 10, paddingTop: 6 }]}>
                                <Image source={place} />
                                <Text>{notification.location}</Text>
                            </View>
                            <View style={[{ flexDirection: 'row', gap: 10, paddingTop: 15 }]}>
                                <Image source={calendar} style={{ height: 24, width: 25 }} />
                                <Text>{notification.date}</Text>
                            </View>
                        </View>
                        <View>
                            <Image source={menuVertical} style={[{ height: 30, width: 30, marginLeft: 10 }]} />
                        </View>
                    </TouchableOpacity>
                ))}
            </View>


        </View>
    );
};

export default AuthorityNoti;