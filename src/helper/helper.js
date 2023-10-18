import axios from "axios";


export const apiClient=axios.create(
    {
        baseURL:'http://localhost:8090'
    }
);


export async function registerUser(credentials){
  try {
    console.log(credentials);
    const { data , status } = await apiClient.post(`/users/register`,credentials);

    console.log(status);
    console.log(data);

    if (status===201) {
         const msg="User "+data.username+" Created With Id :"+data.userId;
         console.log("Done : "+msg);
         return Promise.resolve(msg)

    }
    else {
         const msg="Failed to Create User "+data.username;
         console.error("Error : "+msg);
         return Promise.reject(msg)

    }

  }catch(error) {
  
    return Promise.reject(error.response.data.message)
  }
}

export async function authenticateUser(username){
    try {
        const { data , status } = await apiClient.get(`/users/${username}`)
console.log(status);
console.log(data);

if(status===200){
    console.log(data.username);
    const msg="User "+data.username+" Found With Id :"+data.userId;
         console.log("Done : "+msg);
         return Promise.resolve(data)
}

    }catch(error){
        console.log(error.response);
        
        return Promise.reject(error.response.data.message)
    }
}



export async function verifyPassword( username, password ){
    console.log("Verify Password :"+username+":"+password)
    try {
        if(username){
           const headers={Authorization: 'Basic ' +window.btoa(username + ":" + password)}
           console.log(headers)
          const { data , status } = await apiClient.get('/auth/basic',
           { headers: { Authorization: 'Basic ' + window.btoa(username + ":" + password),'Content-Type': 'application/json'} })
           console.log("Main :"+status)
           console.log(data)

            return Promise.resolve({data:data,auth:window.btoa(username + ":" + password)} ); 
          
        }
    } catch (error) {
        console.log("Exception:")
        console.log(error)
       return Promise.reject("Invalid Password Auth Failed")
    }
}