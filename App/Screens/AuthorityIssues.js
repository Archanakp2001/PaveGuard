import React from "react";
import { Text, View } from "react-native";
import styles from "../Utils/styles";
import MainTitle from "../Components/MainTitle";

const AuthorityIssues = () => {
    return (
        <View style={styles.mainContainer}>

            {/* ----------------- Title ------------------- */}
            <MainTitle title='Issues'/>

            <Text>Authority Issues screen</Text>
        </View>
    );
};

export default AuthorityIssues;