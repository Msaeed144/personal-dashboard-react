import Notif from "../assets/notif.svg";
import User from "../assets/user.svg";
import { Link } from "react-router-dom";
import Home from "../assets/home.svg";
import Chart from "../assets/chart.svg";
import Bag from "../assets/bag.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { MarketData } from "../tools/interfaces";
import CryptoPageComponent from "../components/CryptoPageComponent";
function CryptoPage() {
  const [cryptos, setCryptos] = useState<MarketData[]>([]);
  const [filteredCrypt, setFilteredCrypt] = useState<MarketData[]>([]);
  const [payment, setPayment] = useState("TMN");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<string>("default");
  useEffect(() => {
    const getCryptos = async () => {
      try {
        const response = await axios.get("https://api.wallex.ir/v1/markets");
        const data = response.data.result.symbols;
        const formattedData: MarketData[] = Object.keys(data).map(
          (key) => data[key]
        );
        setCryptos(formattedData);
      } catch (err) {
        console.error("Error fetching crypto data:", err);
      }
    };
    getCryptos();
  }, [cryptos]);
  useEffect(() => {
    const filteredData = cryptos.filter((data) => data.quoteAsset === payment);

    let sortedData = sortCryptos(filteredData, sortOrder);

    if (search) {
      const searchLowerCase = search.toLowerCase();
      sortedData = sortedData.filter(
        (data) =>
          data.faBaseAsset.toLowerCase().includes(searchLowerCase) ||
          data.baseAsset.toLowerCase().includes(searchLowerCase)
      );
    }

    setFilteredCrypt(sortedData);
  }, [payment, search, sortOrder, cryptos]);

  const sortCryptos = (cryptos: MarketData[], order: string) => {
    let sortedCryptos = [...cryptos];

    switch (order) {
      case "cheapest":
        sortedCryptos.sort(
          (a, b) =>
            Number(a.stats["24h_lowPrice"]) - Number(b.stats["24h_lowPrice"])
        );
        break;
      case "expensive":
        sortedCryptos.sort(
          (a, b) =>
            Number(b.stats["24h_highPrice"]) - Number(a.stats["24h_highPrice"])
        );
        break;
      case "mostProfit":
        sortedCryptos.sort(
          (a, b) => Number(b.stats["24h_ch"]) - Number(a.stats["24h_ch"])
        );
        break;
      case "leastProfit":
        sortedCryptos.sort(
          (a, b) => Number(a.stats["24h_ch"]) - Number(b.stats["24h_ch"])
        );
        break;
      default:
        break;
    }

    return sortedCryptos;
  };
  return (
    <div className="w-full h-full">
      <div className=" h-[5%] w-[90%] rounded-xl flex justify-between items-center ms-12 my-8">
        <div className="flex gap-4 items-center">
          <div className=" w-7 border rounded-full p-1 cursor-pointer">
            <img src={Notif} alt="" />
          </div>
          <div className=" w-7 border rounded-full p-1 cursor-pointer">
            <img src={User} alt="" />
          </div>
          <div className="hidden md:flex cursor-pointer">
            <input
              type="text"
              name=""
              id=""
              className=" relative bg-transparent border border-secondcol rounded-lg p-1 ps-3"
              placeholder="دنبال چی می گردی"
            />
          </div>
        </div>
        <div className="md:hidden flex gap-3">
          <Link to="/" className="">
            <div className=" border rounded-full p-1">
              <img className="w-5" src={Home} alt="" />
            </div>
          </Link>
          <Link to="/todo-page" className="">
            <div className=" border rounded-full p-1">
              <img className="w-5" src={Bag} alt="" />
            </div>
          </Link>
          <Link to="/crypto" className="">
            <div className=" border rounded-full p-1">
              <img className="w-5" src={Chart} alt="" />
            </div>
          </Link>
        </div>
      </div>
      <div className="w-[90%] h-full  rounded-xl bg-opacity-15 border border-purple-300 shadow-4xl mx-auto">
        <div className="p-2">
          <div className="my-2 flex gap-4">
            <input
              type="text"
              name=""
              id=""
              placeholder="جستجو..."
              className="w-1/2 md:w-1/4 relative bg-transparent border border-secondcol rounded-lg p-1 ps-3 text-secondcol"
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              name=""
              id=""
              value={payment}
              className="bg-transparent text-secondcol border border-secondcol rounded-md px-2"
              onChange={(e) => setPayment(e.target.value)}
            >
              <option value="TMN">تومان</option>
              <option value="USDT">دلار</option>
            </select>
          </div>
          <div className="flex gap-2 text-white">
            <p>مرتب سازی بر اساس :</p>
            <select className="md:hidden bg-transparent text-secondcol border-secondcol rounded-md px-2 border" name="" id="" value={sortOrder} onChange={e=>setSortOrder(e.target.value)}>
              <option value="default">پیشفرض</option>
              <option value="cheapest">ارزانترین</option>
              <option value="expensive">گران ترین</option>
              <option value="mostProfit">بیشترین سود</option>
              <option value="leastProfit">کمترین سود</option>

            </select>
            <div className="md:flex gap-3 hidden">
              <span
                className={`hover:text-red-600 hover:cursor-pointer ${
                  sortOrder === "default" ? "text-red-600" : ""
                }`}
                onClick={() => setSortOrder("default")}
              >
                پیشفرض
              </span>
              <span
                className={`hover:text-red-600 hover:cursor-pointer ${
                  sortOrder === "cheapest" ? "text-red-600" : ""
                }`}
                onClick={() => setSortOrder("cheapest")}
              >
                ارزان ترین
              </span>
              <span
                className={`hover:text-red-600 hover:cursor-pointer ${
                  sortOrder === "expensive" ? "text-red-600" : ""
                }`}
                onClick={() => setSortOrder("expensive")}
              >
                گران ترین
              </span>
              <span
                className={`hover:text-red-600 hover:cursor-pointer ${
                  sortOrder === "mostProfit" ? "text-red-600" : ""
                }`}
                onClick={() => setSortOrder("mostProfit")}
              >
                بیشترین سود
              </span>
              <span
                className={`hover:text-red-600 hover:cursor-pointer ${
                  sortOrder === "leastProfit" ? "text-red-600" : ""
                }`}
                onClick={() => setSortOrder("leastProfit")}
              >
                کمترین سود
              </span>
            </div>
          </div>
        </div>
        <hr className="w-5/6 mx-auto" />
        <div className=" grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8 p-3">
          {filteredCrypt.map((crypto) => (
            <CryptoPageComponent key={crypto.symbol} crypto={crypto} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CryptoPage;
