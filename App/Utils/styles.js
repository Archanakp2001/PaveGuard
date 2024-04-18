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
      width: '100%',
      height: '100%'
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
      flex:1,
      width: 390,
      height: 1,
      backgroundColor: Colors.HEADLINE,
      marginVertical: 14,
    },
  });
  
  export default styles;