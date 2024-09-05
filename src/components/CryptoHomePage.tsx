import { useEffect, useState } from "react"
import CryptoHomeComponent from "./CryptoHomeComponent"
import axios from "axios"
import { MarketData } from "../tools/interfaces";

const CryptoHomePage = () => {
  const [cryptos, setCryptos] = useState<MarketData[]>([]);

  useEffect(()=>{
    const getCryptos = async () => {
      try {
      const response = await axios.get('https://api.wallex.ir/v1/markets')
      const data  = response.data.result.symbols
      const formattedData: MarketData[] = Object.keys(data).map(key => data[key]);
      const filteredData = formattedData.filter(
        item => item.symbol === "BTCTMN" || item.symbol === "DOGSTMN" || item.symbol === "USDTTMN" ||
        item.symbol === "ETHTMN" || item.symbol === "DOGETMN" || item.symbol === "SOLTMN" || item.symbol ==="NOTTMN"
      );
      setCryptos(filteredData);
      } catch (error){
        console.error('Error fetching crypto data:', error);
      }
    }
    getCryptos()
  },[cryptos])
  return (
    <div>
        <div className=" flex flex-row-reverse gap-3 justify-center">
          {cryptos.map(crypto => <CryptoHomeComponent key={crypto.symbol} crypto={crypto}/>)}
        </div>
    </div>
  )
}

export default CryptoHomePage