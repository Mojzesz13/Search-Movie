import axios from 'axios';

const KEY = 'AIzaSyB4IfwprZDViZsiSco35uWQJI1oAH_5Vhs';

export default axios.create({
  method: 'get',
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY,
  },
});
