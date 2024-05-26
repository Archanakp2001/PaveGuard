import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import MiniTitle from "../Components/MiniTitle";
import tick from '../../assets/images/tick.png';
import id from '../../assets/images/id.png';
import date from '../../assets/images/calendar.png';
import alert from '../../assets/images/alert.png';

import Colors from "../Utils/Colors";

const IssueSummary = () => {

    const route = useRoute();
    const { issueId, issueDate, issueWith, issueType, location, description, images } = route.params;

    // ------------- Back to Issues --------------
    const navigation = useNavigation();
    const onIconClick = () => {
        navigation.goBack();
    }

    return (
        <View style={[style.mainContainer, {paddingBottom: 50}]}>
            <ScrollView>

            {/* ---------------------- Title ------------------- */}
            <MiniTitle title='Issue Summary' navigateTo={onIconClick}/>
            

            {/* ----------------------- Thankyou card ---------------------- */}
            <View style={style.thankyou}>
                <View style={[{height: 50, width: 50, borderRadius: 50, borderWidth: 0.5, borderColor: Colors.PRIMARY, alignSelf: 'center', marginTop: -20, }]}>
                    <Image source={tick} style={[{height: 50, width: 50, tintColor: Colors.PRIMARY}]}/>
                </View>
                <View>
                    <Text style={style.thankuText}>Thank You !!</Text>
                    <Text style={[style.thankuContent, {marginTop: 20, color: Colors.BLACK}]}>Your Issue has been submitted successfully!</Text>
                    <Text style={style.thankuContent}>You will receive further notifications </Text><Text style={[{textAlign: 'center', color: '#5A5A5A'}]}>related to the issue shortly.</Text>
                </View>
            </View>


            {/* ---------------------- Issue summary ---------------------- */}
            <View style={style.issueSummary}>
                
                <View style={[{flexDirection: 'row', flexWrap: 'wrap', gap: 56}]}>
                    {/* Issue id */}
                    <View style={[{flexDirection:'row', gap: 5}]}>
                        <Image source={id} style={[{height: 42, width: 42, tintColor: '#B5B5B5' }]}/>
                        <View>
                            <Text style={[{color: Colors.PRIMARY}]}>Issue ID</Text>
                            <Text style={[{fontWeight: 'bold'}]}>#{issueId}</Text>
                        </View>
                    </View>
                    {/* Issue date */}
                    <View style={[{flexDirection:'row', gap: 5}]}>
                        <Image source={date} style={[{height: 42, width: 42, tintColor: '#B5B5B5' }]}/>
                        <View>
                            <Text style={[{color: Colors.PRIMARY}]}>Issue Date</Text>
                            <Text style={[{fontWeight: 'bold'}]}>{issueDate}</Text>
                        </View>
                    </View>

                </View>

                <View style={[{flexDirection: 'row', flexWrap: 'wrap', gap: 40, marginTop: 30}]}>
                    {/* Issue with */}
                    <View style={[{flexDirection:'row', gap: 5}]}>
                        <Image source={alert} style={[{height: 42, width: 42, tintColor: '#B5B5B5' }]}/>
                        <View>
                            <Text style={[{color: Colors.PRIMARY}]}>Issue With</Text>
                            <Text style={[{fontWeight: 'bold'}]}>{issueWith}</Text>
                        </View>
                    </View>
                    {/* Issue type */}
                    <View style={[{flexDirection:'row', gap: 5}]}>
                        <Image source={alert} style={[{height: 42, width: 42, tintColor: '#B5B5B5' }]}/>
                        <View>
                            <Text style={[{color: Colors.PRIMARY}]}>Issue Type</Text>
                            <Text style={[{fontWeight: 'bold'}]}>{issueType}</Text>
                        </View>
                    </View>

                </View>
                <View style={style.line}/>


                {/* -------------- Location ------------------ */}
                <View style={[{marginTop: 20}]}>
                    <Text style={[{color: Colors.PRIMARY, marginBottom: 5, fontSize: 15}]}>Location</Text>
                    <Text style={[{lineHeight: 20, textAlign: 'justify'}]}>{location}</Text>
                </View>
                <View style={style.line}/>

                {/* ---------------- Description ------------------- */}
                <View style={[{marginTop: 20}]}>
                    <Text style={[{color: Colors.PRIMARY, marginBottom: 5, fontSize: 15}]}>Problem Description</Text>
                    <Text style={[{lineHeight: 20, textAlign: 'justify'}]}>{description}</Text>
                </View>
                <View style={style.line}/>


                {/* ------------------- Images ------------------ */}
                <View style={[{marginTop: 20}]}>
                    <Text style={[{color: Colors.PRIMARY, marginBottom: 10, fontSize: 15}]}>Images</Text>
                    <View style={[{flexDirection: 'row', gap: 10}]}>
                    {images.map((imageUri, index) => (
                        <View key={index}>
                            <Image source={{ uri: imageUri }} style={[{height: 100, width: 100, borderRadius: 8}]}/>
                        </View>
                    ))}
                    </View>
                </View>



            </View> 
            
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    thankyou: {
        height: 190,
        width: 360,
        borderRadius: 15,
        alignSelf: 'center',
        marginTop: 30, 
        backgroundColor: 'rgba(133, 102, 60, 0.3)'
      },
      thankuText: {
        fontSize: 20,
        color: Colors.PRIMARY,
        fontWeight: '500',
        alignSelf: 'center',
        marginTop: 10
      },
      thankuContent: {
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 8,
        color: '#5A5A5A'
      },
      issueSummary: {
        width: 360,
        borderWidth: 0.5,
        borderColor: Colors.BORDER,
        borderRadius: 15,
        alignSelf: 'center',
        marginTop: 20,
        padding: 20
      },
      line: {
        width: 340,
        height: 1,
        backgroundColor: Colors.HEADLINE,
        marginVertical: 14,
        alignSelf: 'center', 
        marginTop: 15
      },
      
})
export default IssueSummary;