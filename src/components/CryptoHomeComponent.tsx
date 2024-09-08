import { MarketData } from "../tools/interfaces"
import { englishToPersian } from "replace-persian-number";
import { Tooltip } from "@mui/material";

export interface CryptoHomeComponentProps {
  crypto: MarketData;
}

const CryptoHomeComponent: React.FC<CryptoHomeComponentProps>  = ({crypto}) => {
  const formatNumber = (value: number): string => {
    // تبدیل عدد به رشته
    const valueString = value.toString();
    // استفاده از regex برای جدا کردن سه رقم سه رقم از راست
    return valueString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
  return (
    <Tooltip className=" cursor-pointer" title={`درصد تغییرات  ${crypto.stats["24h_ch"]}`} placement="top" arrow enterDelay={200} leaveDelay={100}>
      <div className=" border border-[#b37cff] shadow-md p-4 text-center rounded-md">
        <div className="flex items-center gap-3">
          <div>
            <p className=" text-[12px] text-secondcol">{crypto.baseAsset}/TMN</p>
            <p className=" text-[12px] text-secondcolhov">{crypto.faBaseAsset}/تومان</p>
            </div>
          <div>
            <img className="w-9" src={crypto.baseAsset_png_icon} alt="" />
          </div>
        </div>
        <div>
          <div className=" text-sm mt-2">
            <p>آخرین قیمت :</p>
            <p>{englishToPersian(String(formatNumber(Math.round(Number(crypto.stats.lastPrice)))))}</p>
          </div>
        </div>
      </div>
    </Tooltip>
  )
}

export default CryptoHomeComponent