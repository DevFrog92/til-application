import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';

// endpoint: http://localhost:3000/

// VUE_APP_가 붙은 변수는 자동으로 로드한다,

function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });

  return setInterceptors(instance);
}

const instance = createInstance();

// 회원가입 api
function registerUser(userData) {
  return instance.post('signup', userData);
}

// 로그인 api
function loginUser(userData) {
  return instance.post('login', userData);
}

// 학습 노크 데이터를 조회하는 api
function fetchPosts() {
  return instance.get('posts');
}

function createPost(postData) {
  return instance.post('posts', postData);
}

export { registerUser, loginUser, fetchPosts, createPost };
