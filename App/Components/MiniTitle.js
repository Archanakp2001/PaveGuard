import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';

import backward from './../../assets/images/backward.png';
import styles from "../Utils/styles";

const MiniTitle = ({ title, navigateTo }) => {
    return (
        <View style={[{paddingTop: 50}]}>
            <View style={styles.miniTitle}>
            <TouchableOpacity onPress={navigateTo}><Image source={backward} style={styles.miniIcon} /></TouchableOpacity>
            <Text style={styles.miniHead}>{title}</Text>
            </View>
            <View style={styles.miniLine} />
        </View>
    );
};

MiniTitle.propTypes = {
    title: PropTypes.string.isRequired,
};


export default MiniTitle;