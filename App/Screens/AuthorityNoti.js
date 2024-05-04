import React from "react";
import { Text, View, Image } from "react-native";
import styles from "../Utils/styles";
import MainTitle from "../Components/MainTitle";
import place from '../../assets/images/place.png';

const AuthorityNoti = () => {
    return (
        <View style={styles.mainContainer}>

            {/* ----------------- Title ------------------- */}
            <MainTitle title='Notifications'/>

            {/* ------------------- Notifications ------------------------ */}
            <View style={styles.notifications}>
          
                <View style={[{paddingLeft: 10}]}>
                    <View style={[{flexDirection: 'row', borderBottomWidth: 0.5, borderColor: '#B3B3B3' ,width: 320, paddingBottom: 6, marginBottom: 10}]}>
                    <Text style={[{fontWeight: 'bold'}]}>Issue inspected</Text>
                    <Text style={[{paddingLeft: 150}]}>#127648</Text>
                    </View>
                    <View style={[{flexDirection: 'row', gap: 10}]}>
                    <Image source={place} />
                    <Text>Medical College, Kozhikode</Text>
                    </View>
                </View>
                <View>
                    <Image source={menuVertical} style={[{height: 30, width: 30, marginTop: 15, marginLeft: 10}]}/>
                </View>
                
            </View>


        </View>
    );
};

export default AuthorityNoti;