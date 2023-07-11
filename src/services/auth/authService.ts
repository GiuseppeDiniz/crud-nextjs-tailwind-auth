export const authService = {
  async login({ login, password }: { login: string; password: string }) {
    return await fetch('http://localhost:4000/api/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        login,
        password
      })  
    })
    .then(async (response) => {
      if(!response.ok) throw new Error('invalid');
      const body = response.json();
      console.log(body);
    })
  }
};
