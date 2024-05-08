import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "../Utils/styles";
import MiniTitle from "../Components/MiniTitle";
import { useNavigation } from "@react-navigation/native";

const AuthorityEdit = () => {

    // ------------ title ------------
    const navigation = useNavigation();
    const onIconClick = () => {
        navigation.navigate('AuthorityProfile')
    }

    // ----------- submit -------------
    const onSubmit = () => {
        navigation.navigate('AuthorityProfile')
    }
    return (
        <View style={styles.mainContainer}>

            {/* ------------------- Title ------------------ */}
            <MiniTitle title="Edit Profile" navigateTo={onIconClick}/>


            {/* ------------------- Edit profile inputs ------------------- */}
            <View style={[{alignItems: 'center', marginTop: 30}]}>
                <TextInput style={styles.editInput}>Authority Name</TextInput>
                <TextInput style={styles.editInput}>Phone No</TextInput>
                <TextInput style={styles.editInput}>Email id</TextInput>
                <TextInput style={styles.editInput}>Department</TextInput>
                <TextInput style={styles.editInput}>Place</TextInput>
            </View>


            {/* ------------------- Submit button -------------------- */}
            <TouchableOpacity onPress={onSubmit} style={[{alignItems: 'center'}]}>
                <View style={[styles.button, {width: 350, marginTop: 20}]}>
                    <Text style={[styles.buttonText, {letterSpacing: 2, fontSize: 18}]}>SUBMIT</Text>
                </View>
            </TouchableOpacity>

        </View>
    );
};

export default AuthorityEdit;