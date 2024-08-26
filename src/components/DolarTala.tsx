import axios from "axios";
import { useEffect, useState } from "react";
import { CurrencyRates } from "../tools/interfaces";

const DolarTala = () => {
    const [dolarTala, setDolarTala] = useState<CurrencyRates | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getDolarTala = async () => {
            try {
                const response = await axios.get<CurrencyRates>("https://one-api.ir/price/?token=640504:66cc87985ca70&action=bonbast");
                setDolarTala(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching data');
                setLoading(false);
            }
        };

        getDolarTala();
    }, []);

    if (loading) return <p>یکم صبر کنی میگم ...😎</p>;
    if (error) return <p>{error}</p>;
    const formatNumber = (value: number): string => {
        // تبدیل عدد به رشته
        const valueString = value.toString();
        // استفاده از regex برای جدا کردن سه رقم سه رقم از راست
        return valueString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    return (
        <div>
            <h2 className="text-center mb-3">بی خبر از طلا و دلا نباشی😎</h2>
            <div className="flex justify-around mb-3">
                <p>طلای 18 عیار :</p>
                <p>{dolarTala ? formatNumber(Number(dolarTala.result.gol18))+"  تومان" : "در حال بارگذاری..."}</p> 
            </div>
            <div className="flex justify-around mb-3">
                <p>قیمت سکه تمام :</p>
                <p>{dolarTala ? formatNumber(Number(dolarTala.result.azadi1))+" تومان" : "در حال بارگذاری..."} </p>
            </div>
            <div className="flex justify-around mb-3">
                <p>قیمت دلار :</p>
                <p>{dolarTala ? formatNumber(Number(dolarTala.result.usd1))+ " تومان" : "در حال بارگذاری..."}</p>
            </div>
        </div>
    );
};

export default DolarTala;
