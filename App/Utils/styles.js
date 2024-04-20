import { StyleSheet } from 'react-native';
import Colors from './Colors';

const styles = StyleSheet.create({
    // -------------- Loading Screen ---------------
    loadingContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
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
      height: 350
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
      width: 400,
      height: 200,
    },

    // ---------------- Common user styles --------------
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.BACKGROUND,
      paddingTop: 50,
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
    miniTitle: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    miniIcon: {
      height: 34,
      width: 34,
      marginLeft: 15,
    },
    miniHead: {
      fontSize: 20,
      color: Colors.PRIMARY,
      fontWeight: 'bold',
      letterSpacing: 1,
      paddingLeft: 20
    },
    miniLine: {
      width: '100%',
      height: 1,
      backgroundColor: Colors.HEADLINE,
      marginVertical: 10,
    },
    miniContainer: {
      flex:1,

    },

    // ---------------- User profile ----------------
    cards: {
      alignItems: 'center',
      marginTop: 30,
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
    }
    
    
  });
  
  export default styles;