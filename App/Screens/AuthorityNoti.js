import React from "react";
import { Text, View, Image } from "react-native";
import styles from "../Utils/styles";
import MainTitle from "../Components/MainTitle";
import place from '../../assets/images/place.png';
import calendar from '../../assets/images/calendar.png';
import menuVertical from '../../assets/images/menuVertical.png';

const AuthorityNoti = () => {
    return (
        <View style={styles.mainContainer}>

            {/* ----------------- Title ------------------- */}
            <MainTitle title='Notifications'/>

            {/* ------------------- Notifications ------------------------ */}
            <View style={styles.cards}>

                <View style={[styles.notifications, {height: 130}]}>
            
                    <View style={[{paddingLeft: 10}]}>
                        <View style={[{flexDirection: 'row', borderBottomWidth: 0.5, borderColor: '#B3B3B3' ,width: 320, paddingBottom: 6, marginBottom: 10}]}>
                            <Text style={[{fontWeight: 'bold'}]}>New Issue Reported</Text>
                            <Text style={[{paddingLeft: 120}]}>#127648</Text>
                        </View>
                        <View style={[{flexDirection: 'row', gap: 10, paddingTop: 10}]}>
                            <Image source={place} />
                            <Text>Medical College, Kozhikode</Text>
                        </View>
                        <View style={[{flexDirection: 'row', gap: 10, paddingTop: 15}]}>
                            <Image source={calendar}  style={{height: 24, width: 25}}/>
                            <Text>25/06/2023</Text>
                        </View>
                    </View>
                    <View>
                        <Image source={menuVertical} style={[{height: 30, width: 30, marginLeft: 10}]}/>
                    </View>
                    
                </View>

            </View>


        </View>
    );
};

export default AuthorityNoti;