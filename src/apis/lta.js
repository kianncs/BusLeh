import Axios from 'axios';

// const KEY = 'bhuGt2pYQOyl4X5xwj+VgQ==';

export default Axios.create({
   baseURL: 'https://cors-anywhere.herokuapp.com/http://datamall2.mytransport.sg/',
   headers: {
     'AccountKey': process.env.REACT_APP_LTA_API_KEY,
     'accept': 'application/json',
   }
});