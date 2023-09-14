
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
      method: 'POST', // Utilisez la méthode GET pour obtenir le profil de l'utilisateur
      headers: {
        Authorization: `Bearer ${token}`, // Utilisez l'en-tête d'autorisation avec le jeton (Bearer Token)
      },
    });

    if (response.ok) {
      const data = await response.json();      
      console.log('voici les data de profileAPI', data)

      return data;
    } else {      
      console.log(response.status, token)

      throw new Error('Échec de la demande de profil');
    }
  } catch (error) {
    throw error;
  }
}
