import axios from 'axios';
const API_BASE = 'https://news-app-znk9.onrender.com';
// get topheadlines
export const  getNews=async (category='')=>{
const url = category ? `/news?category=${category}` : '/news';
  const response = await axios.get(`${API_BASE}${url}`);
  return response.data;
}
//search news
export const searchNews=async (keyword)=>{
  const response=await axios.get(`${API_BASE}/news/search?q=${keyword}`);
  return response.data;
}