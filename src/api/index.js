import axios from 'axios';

// endpoint: http://localhost:3000/

// VUE_APP_가 붙은 변수는 자동으로 로드한다,

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

function registerUser(userData) {
  return instance.post('/signup', userData);
}

function loginUser(userData) {
  return instance.post('/login', userData);
}

export { registerUser, loginUser };
