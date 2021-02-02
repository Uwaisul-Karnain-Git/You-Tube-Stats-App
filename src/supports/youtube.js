import axios from 'axios';

const key = 'AIzaSyBBbjqAj15fSe-FtX5h4IklT9prpa6h-FQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet, statistics',
        key: key
    }
  });
  