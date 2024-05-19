
const signup = async (username, email, password) => {
    const data = {username, email, password};
    
    const response = await fetch( 'http://192.168.31.91:8000/create-user/', {
      method: 'POST',
     
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
  
    return await response.json();

    

    }
    

export default signup;