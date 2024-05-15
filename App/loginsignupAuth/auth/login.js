
const login = async (username, password, setLoading, setPasswordError) => {
    const data = {username, password}
    console.log(data)
    const response = await fetch( 'http://192.168.91.139:8000/api-token-auth/', {
      method: 'POST',
     
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    return await response.json();
}
    

export default login;