import { API_ROOT } from "../../../apiroot";

const signup = async (username, email, password) => {
    const data = {username, email, password};
    
    const response = await fetch( API_ROOT + '/create-user/', {
      method: 'POST',
     
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
  
    return await response.json();

    

    }
    

export default signup;