import { API_ROOT } from "../../../apiroot"
import AsyncStorage from "@react-native-async-storage/async-storage"

const login = async (username, password, setLoading, setPasswordError) => {
    
    const data = {username, password}
    console.log(data)

    const response = await fetch(  API_ROOT + '/api-token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    
    const result = await response.json();
    if (response.ok) {
      await AsyncStorage.setItem('token', result.token);
    }

    return result;
}
    

export default login;