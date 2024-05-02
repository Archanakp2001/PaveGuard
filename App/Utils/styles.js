import { StyleSheet } from 'react-native';
import Colors from './Colors';
import IssueSummary from '../Screens/IssueSummary';

const styles = StyleSheet.create({
    // -------------- Loading Screen ---------------
    loadingContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: Colors.BACKGROUND,
    },

    // ------------------ Sign In Screen --------------------
    maincontainer: {
      margin: 0,
      backgroundColor: Colors.BACKGROUND,
      alignItems:'center',
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: Colors.BACKGROUND,
      alignItems:'center',
      justifyContent: 'center',
      paddingTop: 30,
      paddingBottom: 120
    },
    imgcontainer: {
      height: 350,
    },
    formcontainer: {
      marginTop: 50
    },
    input :{
      flexDirection: 'row', 
      marginTop: 30,
      borderColor: Colors.BORDER,
      borderWidth: 0.4,
      width: 340,
      height: 50,
      borderRadius: 15,
    },
    inputicon: {
      marginTop: 12,
      marginLeft: 10,
      height: 24,
      width: 24,
    },
    textinput: {
      padding: 10,
      width: 340,
      height: 50,
      letterSpacing: 1,
      fontSize: 16,
      
    },
    text: {
      color: Colors.TEXT,
    },
    button: {
      backgroundColor: Colors.PRIMARY,
      height: 50,
      borderRadius: 15,
      padding: 10,
      marginTop: 30
    },
    buttonText: {
      color: Colors.WHITE,
      textAlign: 'center',
      fontSize: 20,
      letterSpacing: 3,
      fontWeight: '500',
    },

    // ------------- SignUp Popup window -----------------
    modalContainer: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalContent: {
      backgroundColor: Colors.BACKGROUND,
      height: 320,
      width: 340, 
      padding: 20,
      borderRadius: 15,
      alignItems: 'center',
      elevation: 10
    },
    popupText: {
      color: Colors.PRIMARY,
      fontWeight: 'bold',
      fontSize: 22,
      marginTop: 10
    },
    categoryContainer: {
      marginTop: 50,
      flexDirection: 'row',
      gap: 30,
    },
    category: {
      alignItems: 'center'
    },
    categoryIcon: {
      width: 130,
      height: 130,
      borderWidth: 0.2,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },
    categoryText: {
      marginTop: 6,
      color: Colors.TEXT,
    },
    closeButton: {
      marginBottom: 4,
    },

    // ----------------- User Sign up ------------------
    title : {
      flex: 1,
      marginTop: 25,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    },
    titleHead: {
      fontSize: 22,
      color: Colors.PRIMARY,
      fontWeight: 'bold',
      letterSpacing: 1,
    },
    line: {
      width: 390,
      height: 1,
      backgroundColor: Colors.HEADLINE,
      marginVertical: 14,
    },

    // ----------- User Home --------------
    map: {
      flex: 1,
      zIndex: 0
    },
    mapSearch: {
      width: 330,
      height: 40,
      borderRadius: 12,
      padding: 10,
      backgroundColor: Colors.WHITE,
      elevation: 5,
      flexDirection:'row'
    },
    issueButton:{
      height: 50,
      width: 200,
      backgroundColor: 'rgba(133, 102, 60, 0.8)',
      borderRadius: 18,
      marginTop: -24,
      alignItems: 'center',
      justifyContent: 'center',
      
    },

    // ---------------- Common user styles --------------
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.BACKGROUND,
      // paddingTop: 50,
    },
    mainHead: {
      fontSize: 22,
      color: Colors.PRIMARY,
      fontWeight: 'bold',
      letterSpacing: 1,
      paddingLeft: 20
    },
    mainLine: {
      width: '100%',
      height: 1,
      backgroundColor: Colors.HEADLINE,
      marginVertical: 14,
    },
    
    miniContainer: {
      flex:1,

    },

    // ---------------- User profile ----------------
    cards: {
      alignItems: 'center',
      marginTop: 10,
    },
    profileCard: {
      height: 60,
      width: 360,
      backgroundColor: Colors.BACKGROUND,
      borderRadius: 15,
      elevation: 6,
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 30
    },
    cardTitle: {
      flex: 1,
      fontSize: 18,
      color: Colors.PRIMARY,
      letterSpacing: 0.8,
      paddingLeft: 20,
      fontWeight: '500'
    },
    cardIcon: {
      height: 40,
      width: 40,
      tintColor: Colors.PRIMARY,
      marginRight: 10
    },
    
    // ----------------- Edit Profile -----------------
    editInput: {
      borderBottomWidth: 0.2,
      width: 350,
      height: 50,
      borderColor: Colors.TEXT,
      color: Colors.TEXT,
      letterSpacing: 1,
      marginBottom: 30
    },

    // ----------------- Feedbacks ----------------------
    feedbacks: {
      height: 100,
      width: 360,
      backgroundColor: Colors.CARD,
      // elevation: 3,
      marginTop: 20,
      borderRadius: 15,
      paddingVertical: 20,
      paddingHorizontal: 20,
    },
    newFeed : {
      width: 320,
      borderWidth: 0.2,
      borderColor: Colors.BORDER,
      borderRadius: 10,
      padding: 20,
    },

    // --------------------- Settings -----------------------
    settings: {
     flexDirection: 'row',
     alignItems: 'center',
     width: 360,
    //  justifyContent: 'space-between',
     borderBottomWidth: 0.3,
     paddingBottom: 10,
     marginTop: 20
    },

    // ----------------- Notifications --------------------
    notifications: {
      marginBottom: 30,
      backgroundColor: Colors.BACKGROUND,
      elevation: 3,
      borderRadius: 15,
      width: 380,
      height: 80, 
      padding: 10,
      flexDirection: 'row', 
      justifyContent: 'center',
      
    }, 

    // ----------------- Issues ----------------------
    issues: {
      backgroundColor: Colors.BACKGROUND,
      elevation: 4,
      width: 380,
      height: 140,
      borderRadius: 15,
      paddingVertical: 10, 
      paddingHorizontal: 15, 
      marginBottom: 20
    },

    // -------------- Issue Summary ----------------
    
    
  });
  
  export default styles;