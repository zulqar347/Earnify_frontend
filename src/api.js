import axios from 'axios'


const is_development = import.meta.env.MODE === 'development'
const myURL = is_development? import.meta.env.VITE_API_URL_LOCAL : import.meta.env.VITE_API_URL_DEPLOY 
const api = axios.create({
    baseURL: myURL,
    headers :{
        "Content-Type": "application/json"
    }
})

api.interceptors.request.use((config)=>{
    const token = localStorage.getItem("access_token")
    if (token){
        config.headers.Authorization= `Bearer ${token}`
    }
    return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle Unauthorized (e.g., logout)
      console.warn("Unauthorized! Redirecting to login...");
    }
    return Promise.reject(error);
  }
);

export default api
// export const getUserProfile  = ()=>{api.get("/users/profile/")}