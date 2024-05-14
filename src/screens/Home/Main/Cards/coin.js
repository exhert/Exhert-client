import axios from "axios";

let getLive ;
const getData = async () => {
    const headers = {
      "Content-Type": "application/json",
      "Accept":"application/json, text/plain, /",
    };
  
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false';
  
    await axios.get(url, {headers})
    .then(res => {
      getLive = res.data
      return JSON.stringify(getLive);
      console.log(getLive);
    }).catch(error => console.log(error));
  
}

setTimeout(() => {
    getData()
}, 40000);

export default getData;