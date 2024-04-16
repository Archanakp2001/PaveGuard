import React from "react";
import { Text, View, ActivityIndicator } from "react-native";

import styles from "../Utils/styles";
import Colors from "../Utils/Colors";

export default function LoadingScreen() {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={[{fontSize: 26},{color: Colors.PRIMARY}]}>PaveGuard</Text>
        </View>
    )
}