
const login = async (username, password, setLoading, setPasswordError) => {
    const data = {username, password}
    
    const response = await fetch( '/api-token-auth/', {
      method: 'POST',
     
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    return await response.json();
}
    

export default login;