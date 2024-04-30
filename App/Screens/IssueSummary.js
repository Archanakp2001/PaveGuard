import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MiniTitle from "../Components/MiniTitle";
import tick from '../../assets/images/tick.png';
import id from '../../assets/images/id.png';
import date from '../../assets/images/calendar.png';
import alert from '../../assets/images/alert.png';

import styles from "../Utils/styles";
import Colors from "../Utils/Colors";

const IssueSummary = () => {

    // ------------- Back to Issues --------------
    const navigation = useNavigation();
    const onIconClick = () => {
        navigation.navigate('User');
    }

    return (
        <View style={[styles.mainContainer, {paddingBottom: 50}]}>
            <ScrollView>

            {/* ---------------------- Title ------------------- */}
            <MiniTitle title='Issue Summary' navigateTo={onIconClick}/>
            

            {/* ----------------------- Thankyou card ---------------------- */}
            <View style={styles.thankyou}>
                <View style={[{height: 50, width: 50, borderRadius: 50, borderWidth: 0.5, borderColor: Colors.PRIMARY, alignSelf: 'center', marginTop: -20, }]}>
                    <Image source={tick} style={[{height: 50, width: 50, tintColor: Colors.PRIMARY}]}/>
                </View>
                <View>
                    <Text style={styles.thankuText}>Thank You !!</Text>
                    <Text style={[styles.thankuContent, {marginTop: 20, color: Colors.BLACK}]}>Your Issue has been submitted successfully!</Text>
                    <Text style={styles.thankuContent}>You will receive further notifications </Text><Text style={[{textAlign: 'center', color: '#5A5A5A'}]}>related to the issue shortly.</Text>
                </View>
            </View>


            {/* ---------------------- Issue summary ---------------------- */}
            <View style={styles.issueSummary}>
                
                <View style={[{flexDirection: 'row', flexWrap: 'wrap', gap: 50}]}>

                    {/* Issue id */}
                    <View style={[{flexDirection:'row', gap: 5}]}>
                        <Image source={id} style={[{height: 42, width: 42, tintColor: '#B5B5B5' }]}/>
                        <View>
                            <Text style={[{color: Colors.PRIMARY}]}>Issue ID</Text>
                            <Text style={[{fontWeight: 'bold'}]}>#8257910</Text>
                        </View>
                    </View>
                    {/* Issue date */}
                    <View style={[{flexDirection:'row', gap: 5}]}>
                        <Image source={date} style={[{height: 42, width: 42, tintColor: '#B5B5B5' }]}/>
                        <View>
                            <Text style={[{color: Colors.PRIMARY}]}>Issue Date</Text>
                            <Text style={[{fontWeight: 'bold'}]}>26/09/2024</Text>
                        </View>
                    </View>
                    {/* Issue with */}
                    <View style={[{flexDirection:'row', gap: 5}]}>
                        <Image source={alert} style={[{height: 42, width: 42, tintColor: '#B5B5B5' }]}/>
                        <View>
                            <Text style={[{color: Colors.PRIMARY}]}>Issue With</Text>
                            <Text style={[{fontWeight: 'bold'}]}>Road</Text>
                        </View>
                    </View>
                    {/* Issue type */}
                    <View style={[{flexDirection:'row', gap: 5}]}>
                        <Image source={alert} style={[{height: 42, width: 42, tintColor: '#B5B5B5' }]}/>
                        <View>
                            <Text style={[{color: Colors.PRIMARY}]}>Issue Type</Text>
                            <Text style={[{fontWeight: 'bold'}]}>Pothole</Text>
                        </View>
                    </View>

                </View>
                <View style={[styles.line, {width: 340, alignSelf: 'center', marginTop: 30}]}/>


                <View style={[{marginTop: 20}]}>
                    <Text style={[{color: Colors.PRIMARY, marginBottom: 10, fontSize: 15}]}>Problem Description</Text>
                    <Text style={[{lineHeight: 20, textAlign: 'justify'}]}>Detailed description of the problem like Lorem Ipsum Emoras.</Text>
                </View>


                <View style={[{marginTop: 30}]}>
                    <Text style={[{color: Colors.PRIMARY, marginBottom: 10, fontSize: 15}]}>Images</Text>
                    <View style={[{flexDirection: 'row', gap: 10}]}>
                        <View style={styles.summaryImages}><Image style={[{height: 100, width: 100}]}/></View>
                        <View style={styles.summaryImages}><Image style={[{height: 100, width: 100}]}/></View>
                        <View style={styles.summaryImages}><Image style={[{height: 100, width: 100}]}/></View>
                    </View>
                </View>



            </View> 
            
            </ScrollView>
        </View>
    )
}

export default IssueSummary;