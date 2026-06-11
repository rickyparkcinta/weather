export type AppLocale = "en" | "zh-HK";

export const appLocales = ["en", "zh-HK"] as const satisfies readonly AppLocale[];
export const defaultAppLocale: AppLocale = "en";

export type AppCopy = {
  brand: {
    aria: string;
    name: string;
    tagline: string;
  };
  nav: {
    markets: string;
    map: string;
    graph: string;
    signals: string;
    data: string;
    weatherBonds: string;
    pricing: string;
    docs: string;
    health: string;
    ops: string;
    account: string;
  };
  sidebar: {
    openMenu: string;
    closeMenu: string;
    navigation: string;
    language: string;
    languageNames: Record<AppLocale, string>;
  };
  shell: {
    overviewTitle: string;
    overviewBody: string;
    cities: string;
    markets: string;
    signals: string;
    liveFreshness: string;
    researchOnly: string;
    unableToLoadCity: string;
  };
  status: {
    liveData: string;
    liveMode: string;
    liveRecords: string;
  };
  notice: string;
};

export function localizedPath(locale: AppLocale, path: string) {
  if (locale === defaultAppLocale) return path;
  if (path === "/") return `/${locale}`;
  return `/${locale}${path}`;
}

// Route sections that exist under /zh-HK. Anything else (e.g. /ops, /account)
// falls back to the locale root when switching languages.
const zhHkSections = ["admin", "city", "data", "docs", "graph", "markets", "pricing", "signals", "weather-bonds"];

export function switchLocalePath(pathname: string, target: AppLocale): string {
  const current: AppLocale = pathname === "/zh-HK" || pathname.startsWith("/zh-HK/") ? "zh-HK" : "en";
  if (current === target) return pathname;

  if (target === "zh-HK") {
    // The zh-HK locale home is the map view.
    if (pathname === "/" || pathname === "/map") return "/zh-HK";
    const section = pathname.split("/")[1];
    return zhHkSections.includes(section) ? `/zh-HK${pathname}` : "/zh-HK";
  }

  const stripped = pathname.slice("/zh-HK".length);
  // The zh-HK root is the map; its en equivalent lives at /map.
  if (stripped === "" || stripped === "/") return "/map";
  return stripped;
}

export const appCopy = {
  en: {
    brand: {
      aria: "RiWeather home",
      name: "RiWeather",
      tagline: "Odds Analysis Map"
    },
    nav: {
      markets: "Markets",
      map: "Map",
      graph: "Graph",
      signals: "Odds",
      data: "Data",
      weatherBonds: "Weather bonds",
      pricing: "Pricing",
      docs: "Docs",
      health: "Health",
      ops: "Ops",
      account: "Account"
    },
    sidebar: {
      openMenu: "Open menu",
      closeMenu: "Close menu",
      navigation: "Navigation",
      language: "Language",
      languageNames: {
        en: "English",
        "zh-HK": "繁體中文（香港）"
      }
    },
    shell: {
      overviewTitle: "Institutional weather-risk intelligence",
      overviewBody:
        "Forecast probability, market-implied probability, confidence-adjusted gaps, and source freshness for weather desks, investors, insurance, energy, agriculture, and logistics.",
      cities: "Cities",
      markets: "Markets",
      signals: "Signals",
      liveFreshness: "Live freshness",
      researchOnly: "Research only",
      unableToLoadCity: "Unable to load city intelligence."
    },
    status: {
      liveData: "Live data",
      liveMode: "Live mode",
      liveRecords: "Live records"
    },
    notice:
      "Odds analysis compares market-implied probability, estimated fair value, data freshness, and uncertainty for research and paper trading only. It is not financial, gambling, or investment advice. Order routing is not enabled in this build; current views are research and analytics only."
  },
  "zh-HK": {
    brand: {
      aria: "RiWeather 首頁",
      name: "RiWeather",
      tagline: "賠率分析地圖"
    },
    nav: {
      markets: "市場",
      map: "地圖",
      graph: "圖譜",
      signals: "賠率",
      data: "數據",
      weatherBonds: "天氣債券",
      pricing: "價格",
      docs: "文件",
      health: "狀態",
      ops: "營運",
      account: "帳戶"
    },
    sidebar: {
      openMenu: "開啟選單",
      closeMenu: "關閉選單",
      navigation: "導覽",
      language: "語言",
      languageNames: {
        en: "English",
        "zh-HK": "繁體中文（香港）"
      }
    },
    shell: {
      overviewTitle: "機構級天氣風險智能",
      overviewBody:
        "為天氣交易台、投資者、保險、能源、農業及物流團隊比較預報概率、市場隱含概率、信心調整差距及資料新鮮度。",
      cities: "城市",
      markets: "市場",
      signals: "訊號",
      liveFreshness: "即時新鮮度",
      researchOnly: "僅供研究",
      unableToLoadCity: "無法載入城市智能。"
    },
    status: {
      liveData: "即時數據",
      liveMode: "即時模式",
      liveRecords: "即時記錄"
    },
    notice:
      "賠率分析只比較市場隱含概率、估算公允值、資料新鮮度及不確定性，僅供研究及模擬交易用途。這不是金融、博彩或投資建議。此版本未啟用下單功能，目前所有畫面僅提供研究與分析。"
  }
} as const satisfies Record<AppLocale, AppCopy>;
