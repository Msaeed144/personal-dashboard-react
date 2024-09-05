import axios from "axios";
import { useEffect, useState } from "react"
import { WeatherData } from "../tools/interfaces";
import { englishToPersian } from "replace-persian-number";

const Weather = () => {
    const citys = [
        "اراک",
        "اردبیل",
        "ارومیه",
        "اصفهان",
        "اهواز",
        "ایلام",
        "بجنورد",
        "بندرعباس",
        "بوشهر",
        "بیرجند",
        "تبریز",
        "تهران",
        "خرم آباد",
        "رشت",
        "زاهدان",
        "زنجان",
        "ساری",
        "سمنان",
        "سنندج",
        "شهرکرد",
        "شیراز",
        "قزوین",
        "قم",
        "کرج",
        "کرمان",
        "کرمانشاه",
        "مشهد",
        "همدان",
        "یاسوج",
        "یزد",
    ]
    const [ city , setCity ] = useState<string>("تهران")
    const [data, setData] = useState<WeatherData | null>(null);
    const cityHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCity(event.target.value);  // مقدار انتخاب شده را تنظیم می‌کند
      };
      useEffect(() => {
        const getWeather = async () => {
          try {
            const result = await axios.get(
              `https://one-api.ir/weather/?token=640504:66d94f859e0be&action=current&city=${city}`
            );
            setData(result.data.result);  // ذخیره داده‌ها در حالت
            console.log(data);
          } catch (error) {
            console.error("Error fetching weather data", error);
          }
        };


        getWeather();
      }, [city]);
  return (
    <div className="flex flex-col mt-4">
        <div className=" flex justify-center items-center mt-2 gap-3">
            <h4>وضعیت آب و هوای شهر : </h4>
            <select name="" id="" className=" text-secondcolhov bg-transparent border py-1 px-2 rounded-xl" value={city} onChange={cityHandler}>
                {citys.map(city=><option key={city} value={city}>{city}</option>)}
            </select>
        </div> 
        <div className=" flex justify-center items-center">
            <div className=" flex flex-col gap-3 mt-2">
                <p>دمای هوا {englishToPersian(String(data?.main.temp))} درجه سانتی گراد و </p>
                <p>در حال حاضر {data?.weather[0].description} است</p>
            </div>
            <div>
                <img className="w-[8rem]" src={`https://one-api.ir/weather/?token=640504:66d94f859e0be&action=icon&id=${data?.weather[0].icon}`} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Weather