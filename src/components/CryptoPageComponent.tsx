import { englishToPersian } from "replace-persian-number"
import { CryptoHomeComponentProps } from "./CryptoHomeComponent"
import { minusHandler } from "../tools/functions"
// import { englishToPersian } from "replace-persian-number";

const CryptoPageComponent: React.FC<CryptoHomeComponentProps> = ({crypto}) => {
  return (
    <div className="  bg-[rgb(134,139,147)]  rounded-md p-2 bg-opacity-15 border border-purple-300 shadow-4xl">
        <div className="flex justify-around">
            <div className="text-sm text-center">
                <div>
                    <span className="text-gray-300 text-opacity-50">{crypto.quoteAsset}</span>
                    <span>/{crypto.baseAsset}</span>
                </div>
                <div>
                    <span>{crypto.faBaseAsset}/</span>
                    <span className="text-gray-300 text-opacity-50">{crypto.faQuoteAsset}</span>
                </div>
            </div>
            <div>
                <img src={crypto.baseAsset_png_icon} className="w-8 rounded-full" alt="" />
            </div>
        </div>
        <div className="text-center text-gray-300 text-sm">
            <span>آخرین قیمت: </span>
            <span>{ englishToPersian(String((Number(crypto.stats.lastPrice).toFixed(1))))}</span>
        </div>
        <div className="text-center text-gray-300 text-sm mt-2">
            <span>حجم معاملات روز گذشته:  </span>
            <span>{englishToPersian(String((Number(crypto.stats["24h_tmnVolume"]).toFixed(1))))}</span>
        </div>
        <div className="text-center text-sm">
            <span className="text-secondcol">درصد تغییر: </span>
            <span className={`${crypto.stats["24h_ch"]>=0 ? "text-green-600":"text-red-600"}`}>{englishToPersian(minusHandler(crypto.stats["24h_ch"]))}</span>
        </div>
    </div>
  )
}

export default CryptoPageComponent