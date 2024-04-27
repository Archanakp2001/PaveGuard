import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import MainTitle from '../Components/MainTitle';
import place from '../../assets/images/place.png';
import calendar from '../../assets/images/calendar.png';
import styles from '../Utils/styles';

const UserIssues = () => {
  return (
    <View style={[styles.mainContainer,{paddingBottom: 80}]}>
      
      {/* ----------------- Title ------------------- */}
      <MainTitle title='Issues'/>

      <ScrollView>
      {/* ----------------- Issues ------------------ */}
      <View style={styles.cards}>

        <View style={styles.issues}>
          <View style={[{flexDirection:'row', justifyContent: 'space-between', borderBottomWidth: 0.8, borderColor: '#B3B3B3', paddingBottom: 10}]}>
            <Text style={[{fontWeight: 'bold'}]}>#863497</Text>
            <Text style={[{fontWeight: 'bold'}]}>IN-PROGRESS</Text>
          </View>
          <View style={[{marginTop: 20, gap: 18}]}>
            <View style={[{flexDirection: 'row', gap: 10}]}><Image source={place} /><Text>Medical College, Kozhikode</Text></View>
            <View style={[{flexDirection: 'row', gap: 10}]}><Image source={calendar} style={[{height: 24, width: 24}]}/><Text>25/09/2023</Text></View>
          </View>
        </View>

        <View style={styles.issues}>
          <View style={[{flexDirection:'row', justifyContent: 'space-between', borderBottomWidth: 0.8, borderColor: '#B3B3B3', paddingBottom: 10}]}>
            <Text style={[{fontWeight: 'bold'}]}>#863497</Text>
            <Text style={[{fontWeight: 'bold'}]}>IN-PROGRESS</Text>
          </View>
          <View style={[{marginTop: 20, gap: 18}]}>
            <View style={[{flexDirection: 'row', gap: 10}]}><Image source={place} /><Text>Medical College, Kozhikode</Text></View>
            <View style={[{flexDirection: 'row', gap: 10}]}><Image source={calendar} style={[{height: 24, width: 24}]}/><Text>25/09/2023</Text></View>
          </View>
        </View>

        <View style={styles.issues}>
          <View style={[{flexDirection:'row', justifyContent: 'space-between', borderBottomWidth: 0.8, borderColor: '#B3B3B3', paddingBottom: 10}]}>
            <Text style={[{fontWeight: 'bold'}]}>#863497</Text>
            <Text style={[{fontWeight: 'bold'}]}>IN-PROGRESS</Text>
          </View>
          <View style={[{marginTop: 20, gap: 18}]}>
            <View style={[{flexDirection: 'row', gap: 10}]}><Image source={place} /><Text>Medical College, Kozhikode</Text></View>
            <View style={[{flexDirection: 'row', gap: 10}]}><Image source={calendar} style={[{height: 24, width: 24}]}/><Text>25/09/2023</Text></View>
          </View>
        </View>

        <View style={styles.issues}>
          <View style={[{flexDirection:'row', justifyContent: 'space-between', borderBottomWidth: 0.8, borderColor: '#B3B3B3', paddingBottom: 10}]}>
            <Text style={[{fontWeight: 'bold'}]}>#863497</Text>
            <Text style={[{fontWeight: 'bold'}]}>IN-PROGRESS</Text>
          </View>
          <View style={[{marginTop: 20, gap: 18}]}>
            <View style={[{flexDirection: 'row', gap: 10}]}><Image source={place} /><Text>Medical College, Kozhikode</Text></View>
            <View style={[{flexDirection: 'row', gap: 10}]}><Image source={calendar} style={[{height: 24, width: 24}]}/><Text>25/09/2023</Text></View>
          </View>
        </View>

        <View style={styles.issues}>
          <View style={[{flexDirection:'row', justifyContent: 'space-between', borderBottomWidth: 0.8, borderColor: '#B3B3B3', paddingBottom: 10}]}>
            <Text style={[{fontWeight: 'bold'}]}>#863497</Text>
            <Text style={[{fontWeight: 'bold'}]}>IN-PROGRESS</Text>
          </View>
          <View style={[{marginTop: 20, gap: 18}]}>
            <View style={[{flexDirection: 'row', gap: 10}]}><Image source={place} /><Text>Medical College, Kozhikode</Text></View>
            <View style={[{flexDirection: 'row', gap: 10}]}><Image source={calendar} style={[{height: 24, width: 24}]}/><Text>25/09/2023</Text></View>
          </View>
        </View>

      </View>
      </ScrollView>

    </View>
    
  );
};

export default UserIssues;