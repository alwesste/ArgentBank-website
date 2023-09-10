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
  
