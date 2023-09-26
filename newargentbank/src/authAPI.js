import { setToken } from './reduxfeatures/userSlice';

export async function authorisationAPI(credentials) {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
          console.log('credentials',credentials)

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message);
      }
  
      return response.json();

    } catch (error) {

      throw error;
    }
}

  
export async function profileAPI(token) {

  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();      

      return data;
    } else {      

      throw new Error('Échec de la demande de profil');
    }
  } catch (error) {
    throw error;
  }
}



export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await authorisationAPI(credentials);
    console.log('response de loginUser', response);

    if (response.status === 200) {
      dispatch(setToken(response.body.token));

    } else {
      console.error('Login failed');
    }
    return response;
  } catch (error) {
    console.log('looks like a damn mistake');
    throw error;
  }
}


export const updateUserName = async(token, newUsername) => {
  
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({userName: newUsername}),
      

    });

    if(response.status === 200) {
      const data = await response.json();
      console.log("ok la fonction passe dans son ensemble", newUsername)
      console.log('data',data)
      return data
     } 
  } catch (error) {
    console.error("erreur de la mise a jour", error)
    throw error
  }
}