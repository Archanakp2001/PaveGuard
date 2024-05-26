import React from "react";
import { Text, View } from "react-native";
import styles from "../Utils/styles";
import Colors from "../Utils/Colors";
import MainTitle from "../Components/MainTitle";

const AuthorityHome = () => {
    return (
        <View style={styles.mainContainer}>

            {/* ------------------- main title ---------------------- */}
            <View style={[{backgroundColor: Colors.BACKGROUND, }]}>
                <View style={[{flexDirection:'row', justifyContent:'center'}]}>
                    <View style={[{backgroundColor: Colors.PRIMARY, height: 120, width: 330, borderBottomLeftRadius: 60}]}>
                        <Text style={[{paddingTop: 60, paddingLeft: 60, fontSize: 20, color: Colors.WHITE, fontWeight: '500', letterSpacing: 1, textAlign: 'center'}]}>Welcome Username !!</Text>
                    </View>
                    <View style={[{backgroundColor: Colors.PRIMARY, height: 180, width: 80}]}></View>
                </View>
                <View style={[{width: 410, height: 60, marginTop: -60, backgroundColor: Colors.BACKGROUND, borderTopRightRadius: 60}]}></View>
            </View>


        </View>
    );
};

export default AuthorityHome;