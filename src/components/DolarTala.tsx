import axios from "axios";
import { useEffect, useState } from "react";
import { CurrencyRates } from "../tools/interfaces";
import { englishToPersian } from "replace-persian-number";

const DolarTala = () => {
    const [dolarTala, setDolarTala] = useState<CurrencyRates | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getDolarTala = async () => {
            try {
                const response = await axios.get<CurrencyRates>("https://one-api.ir/price/?token=640504:66d94f859e0be&action=bonbast");
                setDolarTala(response.data);
                setLoading(false);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                setError('یه مشکلی برامون پیش اومده یکم دیگه دوباره امتحان کن');
                setLoading(false);
            }
        };

        getDolarTala();
    }, []);

    if (loading) return (
    <div className=" text-[#60B7FF]">
            <h2 className="text-[#60B7FF] text-center mb-3">بی خبر از طلا و دلا نباشی😎</h2>
            <p>یکم صبر کنی میگم ...😎</p>
    </div>
    )
    if (error) return <p>{error}</p>;
    const formatNumber = (value: number): string => {
        // تبدیل عدد به رشته
        const valueString = value.toString();
        // استفاده از regex برای جدا کردن سه رقم سه رقم از راست
        return valueString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    return (
        <div className=" overflow-hidden">
            <h2 className="text-center mb-3 text-[#60B7FF] text-xm md:text-sm">بی خبر از طلا و دلا نباشی😎</h2>
            <div>
                <div className="flex justify-around mb-3 text-sm">
                    <p>طلای <span>{englishToPersian("18")}</span> عیار :</p>
                    <p>{dolarTala ? englishToPersian(formatNumber(Number(dolarTala.result.gol18)))+"  تومان" : "در حال بارگذاری..."}</p>
                </div>
                <div className="flex justify-around mb-3 text-sm">
                    <p> دلار :</p>
                    <p>{dolarTala ? englishToPersian(formatNumber(Number(dolarTala.result.usd2)))+"  تومان" : "در حال بارگذاری..."}</p>
                </div>
                <div className="flex justify-around mb-3 text-sm">
                    <p>سکه تمام :</p>
                    <p>{dolarTala ? englishToPersian(formatNumber(Number(dolarTala.result.azadi1)))+"  تومان" : "در حال بارگذاری..."}</p>
                </div>
            </div>
        </div>
    );
};

export default DolarTala;
