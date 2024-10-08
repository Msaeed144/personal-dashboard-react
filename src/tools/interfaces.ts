export interface Todo {
    id: string;
    text: string;
    isChecked: boolean;
}
export interface TodoPageProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    allTodos: Todo[];
    setAllTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    toggleChecked: (id: string) => void; 
    deleteTodo: (id: string) => void;
}
export interface HomeTodoProps {
    toggleChecked: (id: string) => void; 
    deleteTodo: (id: string) => void;
}
export interface ListItemsProps {
    text: string;
    deleteTodo: () => void;
    isChecked: boolean;
    toggleChecked: () => void;
  }
  export interface SokhanBozorgan {
    author: string;
    author_id:string;
    text:string
  }
  export interface CurrencyRates {
    status: number;
    result: {
      AED: number;
      AFN: number;
      ALL: number;
      AMD: number;
      ANG: number;
      AOA: number;
      ARS: number;
      AUD: number;
      AWG: number;
      AZN: number;
      BAM: number;
      BBD: number;
      BDT: number;
      BGN: number;
      BHD: number;
      BIF: number;
      BMD: number;
      BND: number;
      BOB: number;
      BRL: number;
      BSD: number;
      BTC: number;
      BTN: number;
      BWP: number;
      BYN: number;
      BYR: number;
      BZD: number;
      CAD: number;
      CDF: number;
      CHF: number;
      CLF: number;
      CLP: number;
      CNH: number;
      CNY: number;
      COP: number;
      CRC: number;
      CUC: number;
      CUP: number;
      CVE: number;
      CZK: number;
      DJF: number;
      DKK: number;
      DOP: number;
      DZD: number;
      EGP: number;
      ERN: number;
      ETB: number;
      EUR: number;
      FJD: number;
      FKP: number;
      GBP: number;
      GEL: number;
      GGP: number;
      GHS: number;
      GIP: number;
      GMD: number;
      GNF: number;
      GTQ: number;
      GYD: number;
      HKD: number;
      HNL: number;
      HRK: number;
      HTG: number;
      HUF: number;
      IDR: number;
      ILS: number;
      IMP: number;
      INR: number;
      IQD: number;
      IRR: number;
      ISK: number;
      JEP: number;
      JMD: number;
      JOD: number;
      JPY: number;
      KES: number;
      KGS: number;
      KHR: number;
      KMF: number;
      KPW: number;
      KRW: number;
      KWD: number;
      KYD: number;
      KZT: number;
      LAK: number;
      LBP: number;
      LKR: number;
      LRD: number;
      LSL: number;
      LTL: number;
      LVL: number;
      LYD: number;
      MAD: number;
      MDL: number;
      MGA: number;
      MKD: number;
      MMK: number;
      MNT: number;
      MOP: number;
      MRU: number;
      MUR: number;
      MVR: number;
      MWK: number;
      MXN: number;
      MYR: number;
      MZN: number;
      NAD: number;
      NGN: number;
      NIO: number;
      NOK: number;
      NPR: number;
      NZD: number;
      OMR: number;
      PAB: number;
      PEN: number;
      PGK: number;
      PHP: number;
      PKR: number;
      PLN: number;
      PYG: number;
      QAR: number;
      RON: number;
      RSD: number;
      RUB: number;
      RWF: number;
      SAR: number;
      SBD: number;
      SCR: number;
      SDG: number;
      SEK: number;
      SGD: number;
      SHP: number;
      SLE: number;
      SLL: number;
      SOS: number;
      SRD: number;
      STD: number;
      SVC: number;
      SYP: number;
      SZL: number;
      THB: number;
      TJS: number;
      TMT: number;
      TND: number;
      TOP: number;
      TRY: number;
      TTD: number;
      TWD: number;
      TZS: number;
      UAH: number;
      UGX: number;
      USD: number;
      UYU: number;
      UZS: number;
      VEF: number;
      VES: number;
      VND: number;
      VUV: number;
      WST: number;
      XAF: number;
      XAG: number;
      XAU: number;
      XCD: number;
      XDR: number;
      XOF: number;
      XPF: number;
      YER: number;
      ZAR: number;
      ZMK: number;
      ZMW: number;
      ZWL: number;
      aed1: string;
      aed2: string;
      afn1: string;
      afn2: string;
      amd1: string;
      amd2: string;
      aud1: string;
      aud2: string;
      azadi1: string;
      azadi12: string;
      azadi1_2: string;
      azadi1_22: string;
      azadi1_4: string;
      azadi1_42: string;
      azadi1g: string;
      azadi1g2: string;
      azn1: string;
      azn2: string;
      bhd1: string;
      bhd2: string;
      bitcoin: string;
      bourse: string;
      cad1: string;
      cad2: string;
      chf1: string;
      chf2: string;
      cny1: string;
      cny2: string;
      created: string;
      dkk1: string;
      dkk2: string;
      emami1: string;
      emami12: string;
      eur1: string;
      eur2: string;
      gbp1: string;
      gbp2: string;
      gol18: string;
      hkd1: string;
      hkd2: string;
      inr1: string;
      inr2: string;
      iqd1: string;
      iqd2: string;
      jpy1: string;
      jpy2: string;
      kwd1: string;
      kwd2: string;
      last_modified: string;
      mithqal: string;
      myr1: string;
      myr2: string;
      nok1: string;
      nok2: string;
      omr1: string;
      omr2: string;
      ounce: string;
      qar1: string;
      qar2: string;
      rub1: string;
      rub2: string;
      sar1: string;
      sar2: string;
      sek1: string;
      sek2: string;
      sgd1: string;
      sgd2: string;
      thb1: string;
      thb2: string;
      try1: string;
      try2: string;
      usd1: string;
      usd2: string;
    };
  }
  interface MarketStats {
    bidPrice: string;
    askPrice: string;
    '24h_ch': number;
    '7d_ch': number;
    '24h_volume': string;
    '7d_volume': string;
    '24h_quoteVolume': string;
    '24h_highPrice': string;
    '24h_lowPrice': string;
    lastPrice: string;
    lastQty: string;
    lastTradeSide: string;
    bidVolume: string;
    askVolume: string;
    bidCount: number;
    askCount: number;
    direction: {
      SELL: number;
      BUY: number;
    };
    '24h_tmnVolume': string;
  }
  
  export interface MarketData {
    symbol: string;
    baseAsset: string;
    baseAsset_png_icon: string;
    baseAsset_svg_icon: string;
    baseAssetPrecision: number;
    quoteAsset: string;
    quoteAsset_png_icon: string;
    quoteAsset_svg_icon: string;
    quotePrecision: number;
    faName: string;
    enName: string;
    faBaseAsset: string;
    enBaseAsset: string;
    faQuoteAsset: string;
    enQuoteAsset: string;
    stepSize: number;
    tickSize: number;
    minQty: number;
    minNotional: number;
    stats: MarketStats;
    createdAt: string;
    isNew: boolean;
    isZeroFee: boolean;
  }

  interface Weather  {
  id: number;
  main: string;
  description: string;
  icon: string;
};

interface Main  {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};

interface Wind  {
  speed: number;
  deg: number;
};

interface Clouds  {
  all: number;
};

interface Sys  {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

export interface WeatherData  {
  weather: Weather[];
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
};













export interface DateTimeInfo {
  season: {
    name: string;
  };
  date: {
    year: {
      number: {
        fa: string;
      };
    };
    month: {
      name: string;
    };
    day: {
      number: {
        fa: string;
      };
      events?: {
        holy: {
          text: string;
        };
      };
    };
    weekday: {
      name: string;
    };
  };
}
