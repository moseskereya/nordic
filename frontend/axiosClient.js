import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const axiosClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api'
});

axiosClient.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('ACCESS_TOKEN');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { response } = error;
    if (response && response.status === 401) {
      await AsyncStorage.removeItem('ACCESS_TOKEN');
    } else if (response && response.status === 404) {
      return Promise.reject({ component: <NotFoundScreen /> });
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
