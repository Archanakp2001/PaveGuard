import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../Utils/styles";
import Colors from "../Utils/Colors";

import user from '../../assets/images/signup_User.png';
import edit from '../../assets/images/edit.png';

const AuthorityProfile = () => {

    const navigation = useNavigation();
    const onEditClick = () => {
        navigation.navigate('AuthorityEdit')
    }
    return (
        <View style={styles.mainContainer}>

            {/* ----------------- Title ------------------- */}
            <View style={[{backgroundColor: Colors.BACKGROUND, }]}>
                <View style={[{flexDirection:'row', justifyContent:'center'}]}>
                    <View style={[{backgroundColor: Colors.PRIMARY, height: 180, width: 330, borderBottomLeftRadius: 60}]}>
                        <Text style={[{paddingTop: 50,fontSize: 20, color: Colors.WHITE, fontWeight: '500', letterSpacing: 1, alignSelf: 'center', paddingLeft: 80}]}>Profile</Text>
                    </View>
                    <View style={[{backgroundColor: Colors.PRIMARY, height: 240, width: 80}]}></View>
                </View>
                <View style={[{width: 410, height: 60, marginTop: -60, backgroundColor: Colors.BACKGROUND, borderTopRightRadius: 60}]}></View>
            </View>


            {/* ------------------ Authority profile picture ------------------ */}
            <View>
                <Image source={user} style={styles.authoProfileImg}/>
                <Text style={styles.authoName}>Authority Name</Text>
            </View>
            

            {/* ------------------ Editing view ----------------- */}
            <View style={styles.profileEdit}>
                <TouchableOpacity onPress={onEditClick} style={styles.editImg}><Image source={edit} style={{height: 28, width: 28}}/></TouchableOpacity>
                <Text style={styles.editTextInput}>Authority Name</Text>
                <Text style={styles.editTextInput}>Phone No</Text>
                <Text style={styles.editTextInput}>Email id</Text>
                <Text style={styles.editTextInput}>Department</Text>
                <Text style={styles.editTextInput}>Place</Text>
            </View>


        </View>
    );
};

export default AuthorityProfile;