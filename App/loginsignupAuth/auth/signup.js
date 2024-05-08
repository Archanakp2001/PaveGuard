
const signup = async (username, email, phone, place, panchayath, password, confPassword, setLoading, setPasswordError) => {
    const data = {username, email, phone, place, panchayath, password, confPassword }
    
    const response = await fetch( '/create-user/', {
      method: 'POST',
     
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
  
    return await response.json();
    }
    

export default signup;