import axios from 'axios';

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACESS_KEY;

export const unsplashAxios = axios.create({
  baseURL: `https://api.unsplash.com/photos`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});
