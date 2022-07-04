import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';

// endpoint: http://localhost:3000/

// VUE_APP_가 붙은 변수는 자동으로 로드한다,

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });

  return setInterceptors(instance);
}

export const instance = createInstance();
export const posts = createInstanceWithAuth('posts');

export {};
