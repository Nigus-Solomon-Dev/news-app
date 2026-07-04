const axios = require('axios');
const getNews=async(req,res)=>{
  try{
    const category=req.query.category;
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`;
    if(category){
       url += `&category=${category}`;
    }
   const response = await axios.get(url);
    res.json(response.data.articles);
    
  } catch (error) {
    console.log('Error fetching news:', error.message);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
};
// Search news
const searchNews = async (req, res) => {
  try {
    const keyword = req.query.q;
    
    if (!keyword) {
      return res.status(400).json({ error: 'Search keyword is required' });
    }
    
    const url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${process.env.NEWS_API_KEY}`;
    const response = await axios.get(url);
    res.json(response.data.articles);
    
  } catch (error) {
    console.log('Error searching news:', error.message);
    res.status(500).json({ error: 'Failed to search news' });
  }
};

module.exports = { getNews, searchNews };