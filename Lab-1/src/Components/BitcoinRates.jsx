import { useState,useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];
function BitcoinRates() {

  const [currency, setCurrency] = useState(currencies[0]);
  const [activity,setActivity]=useState("");
  

  useEffect(() => {
    console.log('BitCoin Data');
    let ignore=false;//tracker for information is true from fetch

    fetch(
      `https:api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=`+currency
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        console.log(json.bitcoin);
        
        if (ignore===false){
        let currentBitcoin = json.bitcoin;
        let currentKey = Object.keys(currentBitcoin)[0];
        console.log(json.bitcoin[currentKey])
          setActivity(json.bitcoin[currentKey]);
        }
      });

      return()=>{
        ignore=true;
        console.log('cleanup effect');}

  }, [currency]);



  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <div>
      <h3>BitCoin Value</h3>
      {activity}
      </div>
    </div>
  );
}

export default BitcoinRates;
