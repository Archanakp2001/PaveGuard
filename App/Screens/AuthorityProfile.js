import React from "react";
import { Text, View } from "react-native";
import MainTitle from "../Components/MainTitle";
import styles from "../Utils/styles";

const AuthorityProfile = () => {
    return (
        <View style={styles.mainContainer}>

            {/* ----------------- Title ------------------- */}
            <MainTitle title='Profile'/>

            <Text>Authority Profile screen</Text>
        </View>
    );
};

export default AuthorityProfile;