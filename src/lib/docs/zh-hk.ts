import type { DocPageTranslation, DocsCopy, SourceId, SourceLink } from "./content.ts";

export const zhHKSourceLinkTranslations: Partial<Record<SourceId, Partial<SourceLink>>> = {
  "ncei-nwp": { label: "數值天氣預報" },
  "ncei-gfs": { label: "Global Forecast System" },
  "noaa-gfs": { label: "GFS 文件" },
  "nws-observations": { label: "NOAA 觀測系統" },
  "ecmwf-ifs": { label: "Integrated Forecasting System" },
  "ecmwf-ensemble": { label: "ECMWF 集合預報" },
  "ecmwf-ai-ensemble": { label: "ECMWF Ensemble AI 預報投入營運" },
  "wmo-verification": { label: "預報驗證" },
  "open-meteo": { label: "Open-Meteo Forecast API" },
  "polymarket-api": { label: "Polymarket API 文件" },
  "kalshi-api": { label: "Kalshi API" }
};

export const zhHKDocsCopy: DocsCopy = {
  localeName: "繁體中文（香港）",
  metadata: {
    homeTitle: "RiWeather 文件 | 預報市場地圖",
    homeDescription:
      "RiWeather 的技術文件，涵蓋天氣預報模型、資料接入、託管資料庫架構、地圖圖層、預測市場訊號、驗證與信心評分。",
    homeOpenGraphDescription: "RiWeather、預報模型、驗證及市場訊號工作流程的技術文件。",
    notFoundTitle: "文件 | 預報市場地圖",
    pageTitleSuffix: "預報市場地圖",
    pageOpenGraphSuffix: "RiWeather 文件",
    dataSourcesTitle: "資料來源 | 預報市場地圖",
    dataSourcesDescription: "RiWeather 的資料來源透明度說明，涵蓋預報供應商、市場供應商、託管資料庫儲存及資料接入工作。"
  },
  shell: {
    map: "地圖",
    dataSources: "資料來源",
    docsBadge: "RiWeather 文件",
    technicalReference: "技術參考",
    forecastIntelligence: "預報智能",
    marketSignals: "市場訊號",
    documentationMenu: "文件目錄",
    docsHome: "文件首頁",
    referencesHeading: "參考來源",
    previous: "上一頁",
    next: "下一頁",
    localeSwitcherLabel: "文件語言",
    localeOptions: {
      en: "English",
      "zh-HK": "繁體中文（香港）"
    }
  },
  home: {
    title: "RiWeather 技術文件",
    intro:
      "RiWeather 將官方預報模型輸出轉化為結構化的概率、信心與模型-市場差距訊號。系統接入數值天氣預報資料，比較模型運行，量度不確定性，驗證歷史準確度，並把原始天氣預報轉化為可供城市、事件及預測市場研究使用的智能。",
    technicalSummary:
      "超級電腦天氣預報由數值模型產生：模型透過資料同化估計當前大氣狀態，將地球系統切分為三維網格，按物理方程向前推演，並產生確定性及概率預報。AI 系統可透過校準模型輸出、修正偏差、偵測預報不穩定性，以及把集合資訊轉化為可行動概率，改善這個流程。",
    routesHeading: "文件路由",
    diagramsHeading: "參考圖解",
    diagrams: {
      "forecast-pipeline": {
        title: "預報流程",
        steps: ["衛星 / 雷達 / 測站 / 探空氣球", "觀測品質控制", "資料同化", "分析場", "數值模型", "超級電腦", "預報輸出", "AI 後處理", "市場訊號"]
      },
      "ensemble-probability": {
        title: "集合概率",
        steps: ["50 個集合成員", "38 個預測會下雨", "12 個預測不會下雨", "降雨概率 = 76%"]
      },
      "forecast-edge": {
        title: "預報概率差距",
        steps: ["模型概率：72%", "市場概率：58%", "原始差距：+14 點", "信心：0.65", "調整後差距：+9.1 點"]
      }
    }
  },
  groups: {
    "Weather Prediction": "天氣預測",
    "Platform Architecture": "平台架構"
  },
  diagrams: {
    forecastPipeline: {
      steps: [
        { label: "觀測", detail: "衛星、雷達、測站、飛機" },
        { label: "品質控制", detail: "排除延遲、重複或可疑記錄" },
        { label: "同化", detail: "把觀測與背景場融合" },
        { label: "模型運行", detail: "向前積分動力與物理過程" },
        { label: "後處理", detail: "校準概率與信心" },
        { label: "訊號", detail: "比較模型輸出與市場價格" }
      ]
    },
    ensembleProbability: {
      memberForecastsEvent: "成員預測事件發生",
      memberDoesNotForecastEvent: "成員未預測事件發生",
      caption: "每個方格代表一個集合成員。填色方格表示套用測站、時間窗及門檻映射後符合事件規則。",
      eventProbability: "事件概率",
      countLabel: "29 / 40",
      description: "概率先按成員數量計算，再按驗證歷史作校準。"
    },
    forecastEdge: {
      rows: [
        { label: "模型概率", value: 74, color: "bg-emerald-300" },
        { label: "市場概率", value: 59, color: "bg-cyan-300" },
        { label: "信心", value: 68, color: "bg-amber-300" }
      ],
      adjustedEdge: "調整後差距"
    },
    assimilationCycle: {
      nodes: ["背景預報", "觀測", "品質控制", "分析場", "預報模型", "短期預報"],
      finalDetail: "作為下一個循環的背景場。",
      defaultDetail: "把受約束的狀態資訊傳遞至下一步。"
    },
    modelMarketSignal: {
      stages: [
        ["預報資料", "供應商運行、有效時間、變數、單位"],
        ["事件映射", "市場規則、城市、測站、門檻、時間窗"],
        ["概率", "模型概率加上信心與品質旗標"],
        ["市場資料", "最佳買/賣價、中間價、流動性、陳舊資料檢查"],
        ["綜合訊號", "分歧、調整後差距及解釋狀態"]
      ]
    }
  },
  dataSources: {
    title: "資料來源",
    intro: "此應用程式是資料展示與智能介面。訊號會解釋預報模型分歧、市場隱含概率、資料新鮮度及不確定性。它們只供研究使用，並非交易建議。",
    transparencyHeading: "透明度說明",
    notes: [
      "資料可能因供應商更新節奏、機械人故障、託管資料庫複寫或 Vercel 快取行為而延遲。",
      "預報模型輸出屬概率性質，不同模型或運行之間可以有分歧。",
      "市場資料反映成交價格與訂單簿，而非已驗證事實。",
      "市場存取、展示及交易可能受當地法律或供應商規則限制。"
    ],
    sources: [
      {
        name: "managed Postgres",
        body: "主要應用程式資料庫。Vercel app 會從託管資料庫讀取已標準化的城市、預報、市場、歷史及綜合訊號記錄。"
      },
      {
        name: "每小時代理機械人",
        body: "由營運者擁有的外部程序。它會擷取官方/公開 API，標準化記錄，並以 INGESTION_SECRET 呼叫受保護的資料接入路由。"
      },
      {
        name: "預報供應商",
        body: "支援的適配器目標包括 Windy API、NOAA/NCEP NOMADS GFS、ECMWF Open Data 及 Open-Meteo。正式資料接入應遵守各供應商的署名及使用條款。"
      },
      {
        name: "預測市場供應商",
        body: "支援的適配器目標包括 Kalshi 官方 API 及 Polymarket 官方 API。市場可用性及交易權限可能因司法管轄區而異。"
      }
    ]
  }
};

export const zhHKDocTranslations = [
  {
    slug: "weather-prediction-overview",
    title: "天氣預測概覽",
    shortTitle: "概覽",
    description: "從觀測到概率天氣與市場智能的端到端預報鏈。",
    keywords: ["天氣預測", "NWP", "預報流程", "預報智能", "RiWeather"],
    sections: [
      {
        title: "現代預報",
        blocks: [
          {
            text: "現代天氣預測是對地球系統的計算模擬。預報中心會收集大氣觀測，估計當前大氣狀態，並在高效能運算系統上讓數值模型向前推演。"
          },
          {
            text: "Numerical Weather Prediction（NWP，數值天氣預報）運用當前觀測、物理方程、數值方法及模型參數化，預報溫度、降水、氣壓、風、濕度、雲量、海洋狀態及其他變數。正式的天氣智能產品應把模型輸出視為多種可能未來大氣狀態的結構化估計。"
          },
          {
            title: "預報流程",
            description: "平台由原始觀測系統到決策級預報與市場訊號的流程。"
          }
        ]
      },
      {
        title: "基本預報流程",
        blocks: [
          {
            steps: [
              "來自衛星、雷達、測站、飛機、探空氣球、船舶及浮標的觀測",
              "按時效、重複、物理一致性及儀器誤差進行品質控制",
              "把資料同化為完整的初始大氣狀態",
              "在三維網格上進行數值模型積分",
              "跨多個預報時效與集合成員進行超級電腦運算",
              "確定性及集合預報產品",
              "後處理、偏差修正及概率提取",
              "以觀測及已解決事件作驗證",
              "供地圖、儀表板、警示及市場比較使用的決策訊號"
            ]
          },
          {
            title: "核心學科",
            columns: ["學科", "角色", "平台輸出"],
            rows: [
              ["大氣物理", "描述空氣、水、熱量、氣壓及動量如何演變。", "天氣變數、事件門檻及物理限制。"],
              ["高效能運算", "以足夠速度運行全球模擬，使其具備營運價值。", "新鮮模型循環、集合成員及網格化預報場。"],
              ["統計與 AI", "修正偏差、估計不確定性，並把預報轉化為概率。", "信心評分、校準概率及訊號解釋。"]
            ]
          },
          {
            title: "平台目標",
            text: "目標不只是展示預報，而是把預報模型輸出轉化為概率、信心、風險及透明的訊號脈絡。"
          }
        ]
      }
    ]
  },
  {
    slug: "supercomputers-and-weather-models",
    title: "超級電腦與天氣模型",
    shortTitle: "超級電腦",
    description: "營運天氣預測為何依賴高效能運算及快速預報循環。",
    keywords: ["天氣超級電腦", "GFS", "預報循環", "高效能運算", "營運預報"],
    sections: [
      {
        title: "為何需要超級電腦",
        blocks: [
          {
            text: "天氣模型的計算成本很高，因為它們要在整個地球範圍內以三維方式模擬大氣，並經常跨越大量垂直層、預報時效及集合成員。"
          },
          {
            title: "全球模型會計算",
            items: [
              "風的移動、氣壓梯度及水汽輸送。",
              "輻射、雲形成、降水、湍流及地表摩擦。",
              "陸氣、海氣、冰、雪及土壤過程。",
              "邊界條件、模型強迫及耦合地球系統交互作用。",
              "跨確定性及集合預報系統的多個預報時效。"
            ]
          },
          {
            title: "營運價值",
            description: "預報循環有截止時間。即使輸出非常準確，若到達太遲，營運價值也會有限。"
          }
        ]
      },
      {
        title: "預報循環工作量",
        blocks: [
          {
            columns: ["工作量", "描述", "產品含義"],
            rows: [
              ["資料接入", "從衛星、測站、雷達、飛機、浮標、船舶、探空氣球及模型 feed 拉取觀測。", "追蹤供應商、接入時間及原始來源識別碼。"],
              ["品質控制", "移除延遲、重複、物理上不一致或明顯錯誤的記錄。", "在概率旁顯示資料品質旗標。"],
              ["資料同化", "把觀測與上一個模型背景場結合。", "分開記錄分析時間及運行時間。"],
              ["預報積分", "讓物理方程向前推演。", "保留有效時間、提前時間、模型、循環及變數中繼資料。"],
              ["集合生成", "運行受擾動版本的預報以估計不確定性。", "儲存成員數、事件數、平均值、離散度及百分位數。"],
              ["後處理", "把原始模型輸出轉化為已校準產品及事件概率。", "對校準模型與標準化邏輯作版本管理。"],
              ["發布", "把資料發布到 API、圖表、應用程式及下游系統。", "在 UI 顯示資料新鮮度及來源。"]
            ]
          },
          {
            title: "雲端伺服器邊界",
            text: "一般網頁伺服器可以提供預報資料，但通常不能以具競爭力的解析度、頻率及可靠性運行完整全球營運模型。應用程式應接入官方預報輸出，而不是假裝取代全球預報中心。"
          }
        ]
      }
    ]
  },
  {
    slug: "observing-the-atmosphere",
    title: "觀測大氣",
    shortTitle: "觀測",
    description: "衛星、測站、雷達、探空氣球、飛機、船舶及海洋感測器如何初始化預報模型。",
    keywords: ["天氣觀測", "衛星資料", "雷達", "ASOS", "預報初始化"],
    sections: [
      {
        title: "量測來源",
        blocks: [
          {
            text: "模型要預測未來，必須先估計現在。天氣觀測為這個估計提供原始證據，但觀測本身並不完整，且有雜訊、分布亦不均。"
          },
          {
            columns: ["來源", "量測內容", "常見品質問題"],
            rows: [
              ["衛星", "雲、溫度垂直剖面、水汽、海面溫度、大氣運動及輻射。", "反演不確定性、雲污染、軌道空檔及延遲。"],
              ["天氣測站", "地面溫度、氣壓、風、濕度及降水。", "儀器曝露、在地選址、缺漏資料及維護漂移。"],
              ["雷達", "降水強度、風暴結構、水凝物類型及速度。", "波束遮蔽、亮帶、衰減及距離效應。"],
              ["探空氣球", "溫度、風、濕度及氣壓的垂直剖面。", "發放頻率疏落、漂移及感測器反應時間。"],
              ["飛機", "高空溫度、風，有時包括濕度。", "航線集中及空間覆蓋不均。"],
              ["海洋浮標與船舶", "海平面氣壓、浪、海面溫度及海上風。", "覆蓋疏落、平台運動及回報延遲。"],
              ["遙測感測器", "輻射、水分、氣溶膠、大氣成分及邊界層結構。", "校準、代表性及反演假設。"]
            ]
          }
        ]
      },
      {
        title: "觀測問題",
        blocks: [
          {
            text: "大氣並沒有被完整觀測。偏遠海洋、極地、稀疏地面測站、儀器誤差、延遲報告、衛星反演不確定性及垂直解析度限制，都會留下缺口。因此預報模型是從估計開始，而不是從完美量測開始。"
          },
          {
            title: "平台應追蹤的項目",
            items: [
              "觀測來源、時間戳、供應商及接入時間戳。",
              "測站或網格位置、海拔，以及與地圖城市或市場事件的距離。",
              "品質控制狀態、缺漏欄位及疑似離群值。",
              "該觀測適合用於驗證、同化脈絡，還是只作展示。"
            ]
          },
          {
            title: "為何需要同化",
            text: "預報中心不能簡單量度整個大氣。它們會從不完整且有雜訊的證據估計完整物理狀態，再以該狀態作為預報起點。"
          }
        ]
      }
    ]
  },
  {
    slug: "data-assimilation",
    title: "資料同化",
    shortTitle: "資料同化",
    description: "模型如何把觀測與上一個預報結合，建立初始大氣狀態。",
    keywords: ["資料同化", "分析場", "背景預報", "觀測算子", "變分同化"],
    sections: [
      {
        title: "分析場",
        blocks: [
          {
            text: "資料同化把觀測與近期短期預報結合，產生對當前大氣的最佳估計。這個估計稱為分析場。"
          },
          {
            title: "資料同化循環",
            description: "每個循環產生一個分析場，之後所得預報會成為下一個循環的背景場。"
          },
          {
            title: "大氣狀態向量",
            description: "即使觀測不完整，模型仍需要完整狀態向量。"
          },
          {
            columns: ["變數", "意思"],
            rows: [
              ["T", "溫度"],
              ["p", "氣壓"],
              ["u", "東西向風分量"],
              ["v", "南北向風分量"],
              ["w", "垂直風分量"],
              ["q", "比濕"],
              ["\\rho", "空氣密度"],
              ["c", "雲水"],
              ["r", "雨水"],
              ["s", "雪"],
              ["i", "冰"]
            ]
          }
        ]
      },
      {
        title: "變分目標",
        blocks: [
          {
            title: "目標函數",
            description: "第一項懲罰與背景預報的距離，第二項懲罰與觀測的不匹配。"
          },
          {
            columns: ["符號", "意思"],
            rows: [
              ["J(x)", "需要最小化的成本函數。"],
              ["x", "正在估計的大氣狀態。"],
              ["x_b", "來自上一個短期預報的背景狀態。"],
              ["B", "背景誤差協方差。"],
              ["y", "觀測向量。"],
              ["H(x)", "把模型狀態映射至可觀測數值的觀測算子。"],
              ["R", "觀測誤差協方差。"]
            ]
          },
          {
            title: "連續分析循環",
            steps: ["00 UTC 分析", "00 UTC 起報預報", "06 UTC 的背景場", "新觀測", "06 UTC 分析"]
          },
          {
            title: "白話版本",
            text: "尋找一個既接近上一個預報、又接近新觀測，並按各輸入可信度加權的大氣狀態。"
          }
        ]
      },
      {
        title: "最佳分析更新",
        description: "最小化變分成本等同於一個線性更新，按背景與觀測的相對信心把兩者融合。",
        blocks: [
          {
            title: "分析更新",
            description: "分析場會按創新量把背景場推近觀測；創新量是觀測值與模擬值之間的差異。"
          },
          {
            title: "Kalman 增益",
            description: "增益會按背景誤差相對於總誤差的大小加權修正，因此雜訊較大的觀測對分析場的影響較小。"
          },
          {
            title: "分析誤差協方差",
            description: "同化觀測會降低背景不確定性，為下一個預報產生更有信心的初始狀態。"
          },
          {
            title: "四維變分成本",
            description: "4D-Var 會把模型軌跡擬合到同化時間窗內分布的觀測，而不只是單一分析時間。"
          }
        ]
      }
    ]
  },
  {
    slug: "numerical-weather-prediction",
    title: "數值天氣預報",
    shortTitle: "數值模型",
    description: "模型如何透過物理方程及數值時間步，把大氣狀態向前推進。",
    keywords: ["數值天氣預報", "大氣方程", "預報更新", "模型趨勢", "混沌"],
    sections: [
      {
        title: "預報積分",
        blocks: [
          {
            text: "數值天氣預報運用數學方程模擬大氣如何隨時間變化。模型由分析場開始，計算物理趨勢，再透過大量小時間步推進狀態。"
          },
          {
            title: "營運模型會近似",
            items: ["動量、質量、能量及水分守恆。", "空氣密度、氣壓及溫度的狀態方程。", "輻射傳輸、雲微物理、湍流及地表交換。", "陸地、海洋、冰及邊界交互作用。"]
          },
          {
            title: "狀態向量",
            description: "確切向量因模型而異，但原則相同：追蹤大氣及相連地表系統。"
          },
          {
            title: "代表性狀態變數",
            columns: ["變數", "意思"],
            rows: [
              ["T", "溫度"],
              ["p", "氣壓"],
              ["u", "東西向風分量"],
              ["v", "南北向風分量"],
              ["w", "垂直風分量"],
              ["q", "比濕"],
              ["\\rho", "空氣密度"],
              ["c", "雲水"],
              ["r", "雨水"],
              ["s", "雪"],
              ["i", "冰"]
            ]
          }
        ]
      },
      {
        title: "預報更新方程",
        blocks: [
          {
            title: "時間步模型更新",
            description: "F(X_t) 是由模型動力及物理計算出的物理趨勢。"
          },
          {
            columns: ["符號", "意思"],
            rows: [
              ["X_t", "當前大氣狀態。"],
              ["X_{t + Delta t}", "一個時間步之後的未來大氣狀態。"],
              ["Delta t", "模型時間步。"],
              ["F(X_t)", "由模型計算的物理趨勢。"]
            ]
          },
          {
            title: "平流",
            description: "大部分大氣趨勢都由輸送主導：一個場在本地改變，是因為風把它帶過來，再加上任何源項或匯項。"
          },
          {
            title: "Leapfrog 時間格式",
            description: "常見的中心格式，在時間上具二階精度，通常會配合濾波器抑制計算模態。"
          },
          {
            text: "這就是數值預報的核心思想：計算趨勢、向前踏步、重複，並發布所得預報場，同時保留足夠中繼資料以知道是哪次模型運行產生它們。"
          }
        ]
      },
      {
        title: "為何小誤差會增長",
        blocks: [
          {
            text: "天氣是混沌系統。初始條件中的微小誤差可能增長成很大的預報差異，尤其是在快速移動風暴、對流爆發、熱帶系統及銳利鋒面轉換期間。"
          },
          {
            title: "理想化誤差增長",
            description: "增長率 lambda 會隨天氣型態及尺度而變。"
          },
          {
            title: "提前時間解讀",
            columns: ["提前時間", "典型解讀"],
            rows: [
              ["0-24 小時", "細節高且受觀測強烈約束，但對流誤差仍可能很大。"],
              ["2-5 日", "綜觀尺度型態通常比本地極端更可靠。"],
              ["6-10 日", "不確定性大幅增加；集合離散度變得核心。"],
              ["10 日以上", "主要是型態指引，而非精確本地預測。"]
            ]
          }
        ]
      }
    ]
  },
  {
    slug: "model-physics",
    title: "模型物理",
    shortTitle: "模型物理",
    description: "天氣模型中直接表示或透過參數化表示的物理過程。",
    keywords: ["模型物理", "參數化", "動量方程", "靜力平衡", "水分趨勢"],
    sections: [
      {
        title: "核心物理方程",
        blocks: [
          {
            text: "模型物理表示會影響大氣的過程。有些過程可由模型網格直接解析；較細小或複雜的過程則透過參數化方案近似。"
          },
          {
            title: "狀態方程",
            description: "氣壓、密度及溫度由乾空氣的理想氣體關係連繫。"
          },
          {
            title: "動量方程",
            description: "風會因氣壓梯度力、Coriolis 力、重力、摩擦及湍流混合而改變。"
          },
          {
            title: "質量連續",
            description: "這會強制質量守恆。"
          },
          {
            title: "靜力平衡",
            description: "這是描述氣壓如何隨高度下降的實用近似。"
          },
          {
            title: "水分趨勢",
            description: "比濕會因蒸發、凝結及其他源項或匯項而改變。"
          },
          {
            title: "熱力能量方程",
            description: "溫度會因絕熱壓縮，以及來自輻射、凝結及混合的非絕熱加熱 Q 而演變。"
          },
          {
            title: "位溫",
            description: "位溫在乾絕熱運動下守恆，因此是穩定度分析中自然的垂直座標。"
          },
          {
            title: "Clausius-Clapeyron 關係",
            description: "飽和水汽壓大致隨溫度呈指數上升，因此較暖空氣可容納更多水分，並可能產生更強降水。"
          },
          {
            title: "地轉平衡",
            description: "在遠離地面及赤道的位置，大尺度風大約是氣壓梯度力與 Coriolis 力之間的平衡。"
          }
        ]
      },
      {
        title: "參數化過程",
        blocks: [
          {
            columns: ["過程", "難點", "訊號含義"],
            rows: [
              ["深對流", "雷暴通常比全球模型網格格點更細小。", "本地降水概率可能在不同運行之間急劇改變。"],
              ["雲微物理", "雲滴、冰晶、霰及雪花在極細尺度上互動。", "相態及降水類型預報需要謹慎的信心標籤。"],
              ["湍流", "小渦旋低於網格尺度。", "陣風及邊界層時間點可能不確定。"],
              ["輻射", "吸收與放射會因雲、氣體、氣溶膠及地表而異。", "溫度及雲偏差修正應按區域驗證。"],
              ["地表交換", "熱與水分通量會因植被、土壤、雪、水體及城市表面而異。", "城市級校準很重要，尤其是海岸及山區附近。"]
            ]
          },
          {
            title: "模型為何分歧",
            items: [
              "不同網格結構及動力核心。",
              "不同資料同化系統及觀測使用方式。",
              "不同雲、對流、邊界層及陸面方案。",
              "不同海洋耦合、後處理及校準選擇。"
            ]
          },
          {
            title: "多模型價值",
            text: "不同模型可以共享同一批宏觀觀測，但因網格、物理、同化選擇及後處理而分歧。因此，多模型比較應是第一級訊號輸入。"
          }
        ]
      }
    ]
  },
  {
    slug: "grid-resolution-and-time-stepping",
    title: "網格解析度與時間步",
    shortTitle: "網格 + 時間步",
    description: "網格距離、垂直層及穩定時間步如何塑造預報準確度與成本。",
    keywords: ["網格解析度", "時間步", "CFL 條件", "預報成本", "空間導數"],
    sections: [
      {
        title: "解析度取捨",
        blocks: [
          {
            text: "天氣模型會把大氣切分為網格格點。較小的網格距離可以表示更細緻的天氣結構，但需要更多計算，通常亦需要更短時間步。"
          },
          {
            title: "空間導數",
            description: "數值模型使用跨網格點的差分來近似連續導數。"
          },
          {
            title: "網格點擴展",
            description: "水平網格距離減半，未計時間步成本前，水平格點大約已增加四倍。"
          },
          {
            columns: ["較小網格距離", "較大網格距離"],
            rows: [
              ["更多本地細節。", "較少本地細節。"],
              ["更好表示地形、海岸線及降水結構。", "地形較平滑，事件映射較粗略。"],
              ["運行與儲存成本更高。", "運行與發布成本較低。"],
              ["通常需要較小時間步。", "通常可使用較大時間步。"]
            ]
          }
        ]
      },
      {
        title: "時間步穩定性",
        blocks: [
          {
            title: "向前時間步",
            description: "模型把狀態由一個時間層更新到下一個時間層。"
          },
          {
            title: "CFL 穩定條件",
            description: "為確保數值穩定，資訊在單一時間步內不應跨越太遠的網格距離。"
          },
          {
            columns: ["符號", "意思"],
            rows: [
              ["C", "Courant 數。"],
              ["u", "代表性風速或波速。"],
              ["Delta t", "時間步。"],
              ["Delta x", "網格距離。"]
            ]
          },
          {
            title: "擴散穩定性",
            description: "顯式擴散與混合方案會對時間步施加自身限制；當網格距離縮小時，限制往往更嚴格。"
          },
          {
            title: "最短可解析波長",
            description: "網格無法表示小於兩個網格長度的特徵，因此次網格過程必須參數化，而不是直接解析。"
          },
          {
            title: "產品含義",
            text: "當使用者比較預報時，應可看到解析度、提前時間、模型循環及更新頻率。較高解析度不會自動代表較高預報技術。"
          }
        ]
      }
    ]
  },
  {
    slug: "ensemble-forecasting",
    title: "集合預報",
    shortTitle: "集合",
    description: "多個預報成員如何產生事件概率、離散度及不確定性估計。",
    keywords: ["集合預報", "集合平均", "集合離散度", "事件概率", "概率預報"],
    sections: [
      {
        title: "集合概念",
        blocks: [
          {
            text: "確定性預報提供一個可能未來。集合預報則透過擾動初始條件、物理或模型假設，提供多個可能未來。"
          },
          {
            title: "集合概率",
            description: "事件概率按符合事件規則的成員比例計算，再按驗證歷史校準。"
          },
          {
            title: "降雨概率例子",
            steps: ["50 個集合成員", "38 個預測有可量度降雨", "12 個預測無可量度降雨", "降雨概率 = 38 / 50 = 76%"]
          }
        ]
      },
      {
        title: "平均、離散度與概率",
        blocks: [
          {
            title: "集合平均",
            description: "所有成員預報的平均值。"
          },
          {
            title: "集合離散度",
            description: "量度成員之間分歧的指標。"
          },
          {
            title: "事件概率",
            description: "符合事件規則的成員比例。"
          },
          {
            title: "離散度-技術關係",
            description: "在校準良好的集合中，成員平均變異會匹配集合平均的均方誤差，因此離散度可作為預期誤差的可用代理。"
          },
          {
            title: "連續排序概率分數",
            description: "CRPS 比較完整預報分布 F 與觀測結果 o，獎勵既尖銳又保持校準的預報。"
          },
          {
            columns: ["符號", "意思"],
            rows: [
              ["x_bar", "集合平均。"],
              ["sigma", "集合離散度。"],
              ["N", "集合成員數。"],
              ["n_E", "預測事件 E 的成員數。"],
              ["P(E)", "事件 E 的概率。"]
            ]
          },
          {
            title: "市場相關性",
            text: "預測市場需要概率，而不只是確定性數值。集合可表達可量度降雨概率、門檻概率、無事件概率及信心，形式上可與市場隱含概率比較。"
          }
        ]
      }
    ]
  },
  {
    slug: "forecast-uncertainty",
    title: "預報不確定性",
    shortTitle: "不確定性",
    description: "波動、模型分歧、提前時間及驗證如何塑造信心評分。",
    keywords: ["預報不確定性", "信心評分", "模型分歧", "預報波動", "運行間波動"],
    sections: [
      {
        title: "不確定性來源",
        blocks: [
          {
            text: "預報不確定性量度系統應對某個預報有多大信心。當當前大氣觀測不足、模型物理只是近似、事件尺度很小，或近期模型運行不穩定時，不確定性會上升。"
          },
          {
            columns: ["來源", "描述", "UI 處理"],
            rows: [
              ["初始條件不確定性", "當前大氣並未被完美觀測。", "顯示信心隨提前時間衰減。"],
              ["模型不確定性", "物理方程及參數化都是近似。", "比較多個模型家族。"],
              ["參數化不確定性", "雲、對流、湍流及輻射均被近似。", "標記對流及本地降水型態。"],
              ["邊界不確定性", "海洋、陸地、冰及地表狀態可能不完善。", "追蹤上游邊界及地表中繼資料。"],
              ["尺度不確定性", "本地現象可能小於網格解析度。", "避免過度精確的城市級說法。"],
              ["型態不確定性", "部分大氣型態本質上更難預測。", "如可行，使用歷史型態驗證。"]
            ]
          }
        ]
      },
      {
        title: "信心評分",
        blocks: [
          {
            title: "預報波動",
            description: "運行間波動量度近期模型循環之間預報改變多少。"
          },
          {
            title: "模型分歧",
            description: "跨模型分歧量度供應商或模型家族之間偏離多少。"
          },
          {
            title: "信心評分",
            description: "實用的信心評分可結合集合一致性、多模型一致性、歷史技術、波動及分歧。"
          },
          {
            title: "誤差飽和增長",
            description: "預報誤差起初快速增長，之後在長提前時間可預報性流失時，逐步趨向氣候學上限。"
          },
          {
            title: "Logistic 信心映射",
            description: "原始不確定性量度 U 可透過已校準 logistic 函數映射為 0 至 1 的有界信心。"
          },
          {
            columns: ["信心狀態", "產品解讀"],
            rows: [
              ["高", "模型一致、集合離散度低，且近期運行穩定。"],
              ["中", "存在一些不確定性，但主要訊號一致。"],
              ["低", "模型分歧，或預報正快速改變。"],
              ["非常低", "避免強烈判斷，並顯示較寬概率區間。"]
            ]
          },
          {
            title: "產品意思",
            text: "高信心評分代表系統看到穩定且有良好支持的預報。它並不保證事件會發生。"
          }
        ]
      }
    ]
  },
  {
    slug: "ai-weather-models",
    title: "AI 天氣模型",
    shortTitle: "AI 模型",
    description: "AI 可在天氣預測哪些環節提供幫助，以及物理、驗證與護欄仍然重要的原因。",
    keywords: ["AI 天氣模型", "預報校準", "偏差修正", "混合預報", "AI 集合"],
    sections: [
      {
        title: "物理模型與 AI 模型",
        blocks: [
          {
            text: "AI 天氣系統從歷史模型輸出及觀測中學習大氣型態。訓練完成後，它們可快速產生預報，並越來越常與基於物理的模型並用，用於校準、後處理及快速概率指引。"
          },
          {
            columns: ["系統類型", "優點", "限制"],
            rows: [
              ["基於物理的 NWP", "建基於物理方程、營運同化及科學約束。", "運行成本高，且在未解析尺度上仍是近似。"],
              ["AI 預報模型", "推論快速、可學習型態、修正偏差，並具備降尺度潛力。", "高度依賴訓練資料、校準及型態覆蓋。"],
              ["混合系統", "結合物理輸出、觀測、集合、驗證歷史及學習式校準。", "驗證及監控更複雜。"]
            ]
          },
          {
            title: "AI 可改善",
            items: [
              "偏差修正及本地校準。",
              "降尺度及後處理。",
              "快速預報生成及臨近預報。",
              "型態識別、型態分類及極端事件偵測。",
              "集合校準及預報產品摘要。"
            ]
          }
        ]
      },
      {
        title: "調整與護欄",
        blocks: [
          {
            title: "AI 預報調整",
            description: "最終修正後預報可把原始 NWP 輸出與 AI 修正模型結合，並使用本地特徵及近期誤差脈絡。"
          },
          {
            title: "近期偏差",
            description: "偏差修正應按城市、變數、提前時間、季節及型態分開驗證。"
          },
          {
            title: "偏差修正預報",
            description: "從原始模型估計扣除近期系統性誤差。"
          },
          {
            title: "緯度加權訓練損失",
            description: "資料驅動天氣模型會最小化網格誤差，並對每個格點加權，使高緯度格點不會主導損失。"
          },
          {
            title: "緯度權重",
            description: "權重與網格格點面積成比例；越接近兩極，面積會按緯度餘弦縮小。"
          },
          {
            title: "距平相關係數",
            description: "ACC 量度預報捕捉相對氣候態 c 的偏離有多好，是 AI 與物理模型都常用的主要頭條指標。"
          },
          {
            title: "護欄",
            text: "AI 輸出在影響面向市場的訊號前，應先與官方模型場、集合離散度、觀測品質及歷史驗證比較。"
          }
        ]
      }
    ]
  },
  {
    slug: "model-verification",
    title: "模型驗證",
    shortTitle: "驗證",
    description: "如何以誤差指標、概率分數及技術分數量度預報品質。",
    keywords: ["預報驗證", "MAE", "RMSE", "Brier score", "技術分數", "預報校準"],
    sections: [
      {
        title: "為何驗證重要",
        blocks: [
          {
            text: "驗證會把預報輸出與實際發生的情況比較。沒有驗證，平台無法知道哪些模型、預報時效、變數或城市可靠。"
          },
          {
            title: "RiWeather 平台應追蹤",
            items: [
              "按城市、變數、提前時間及季節判斷哪個模型最佳。",
              "哪些模型在特定天氣型態下表現最佳。",
              "模型近期運行是改善還是退化。",
              "概率預報是否校準良好。",
              "面向市場的訊號過往是否能解釋真實模型-市場分歧。"
            ]
          },
          {
            columns: ["問題", "指標類型"],
            rows: [
              ["預報與觀測值相差多遠？", "MAE 及 RMSE。"],
              ["模型是否系統性偏暖、偏濕或偏大風？", "偏差指標。"],
              ["事件概率是否校準？", "Brier score 及可靠度診斷。"],
              ["模型是否勝過基準？", "相對氣候學、持續性或另一模型的技術分數。"]
            ]
          }
        ]
      },
      {
        title: "核心指標",
        blocks: [
          { title: "平均絕對誤差" },
          { title: "均方根誤差" },
          { title: "偏差" },
          { title: "Brier Score", description: "二元概率預報的 Brier score 越低越好。" },
          {
            title: "預報技術分數",
            description: "正分代表模型勝過參考預報。"
          },
          {
            title: "距平相關係數",
            description: "預報與觀測相對氣候態 c 的距平相關；高於約 0.6 通常被視為有用。"
          },
          {
            title: "連續排序概率分數",
            description: "絕對誤差的分布式推廣；對確定性預報而言會退化為 MAE。"
          },
          {
            title: "Brier 技術分數",
            description: "把 Brier score 表達為相對於氣候學等參考的技術；正值代表優於基準。"
          },
          {
            title: "Brier score 分解",
            description: "Brier score 可分解為可靠度、解析度及只取決於事件基準率的不可約不確定性項。"
          },
          {
            title: "驗證表",
            columns: ["指標", "最適合"],
            rows: [
              ["MAE", "平均絕對誤差。"],
              ["RMSE", "懲罰大型失誤。"],
              ["Bias", "偵測系統性高估或低估。"],
              ["Brier Score", "二元概率預報。"],
              ["Brier Skill Score", "相對基準的概率技術。"],
              ["ACC", "相對氣候態的大尺度型態技術。"],
              ["Reliability curve", "概率校準。"],
              ["ROC-AUC", "事件辨識能力。"],
              ["CRPS", "完整概率分布。"]
            ]
          }
        ]
      }
    ]
  },
  {
    slug: "weather-data-pipeline",
    title: "天氣資料管線",
    shortTitle: "資料管線",
    description: "面向正式環境的管線，用於接入官方預報、市場、訊號及驗證資料。",
    keywords: ["天氣資料管線", "預報資料庫", "託管資料庫架構", "預報資料接入", "市場訊號"],
    sections: [
      {
        title: "建議管線",
        blocks: [
          {
            text: "正式 RiWeather 系統應把預報視為結構化時間序列資料。收集、標準化、儲存、訊號計算、驗證及展示應分成不同層。"
          },
          {
            title: "預報資料管線",
            description: "清晰管線會把供應商細節留在 UI 元件之外，並令來源資料新鮮度可稽核。"
          },
          {
            steps: [
              "官方模型 API 及公開供應商 feed",
              "排程資料接入工作",
              "原始預報封存及來源追溯",
              "標準化及 schema 驗證",
              "位置與市場事件映射",
              "模型比較及概率提取",
              "以觀測及已解決事件作驗證",
              "訊號生成及 API 發布",
              "在地圖及文件介面作前端可視化"
            ]
          },
          {
            title: "必要預報中繼資料",
            columns: ["欄位", "例子", "用途"],
            rows: [
              ["model", "gfs, ecmwf, icon, hrrr", "識別預報模型家族。"],
              ["run_time", "2026-06-06T00:00:00Z", "識別模型循環。"],
              ["valid_time", "2026-06-07T12:00:00Z", "識別預報適用時間。"],
              ["lead_time_hours", "36", "支援按預報時效計算信心衰減及驗證。"],
              ["variable", "precipitation_probability", "命名已標準化的天氣變數。"],
              ["value", "0.72", "儲存已標準化的數值預報值。"],
              ["unit", "probability", "避免單位不匹配。"],
              ["lat, lon, city", "37.5665, 126.9780, Seoul", "把網格模型輸出連接至城市展示。"],
              ["source", "official_api", "保留可追溯性及供應商署名。"]
            ]
          }
        ]
      },
      {
        title: "標準資料接入合約",
        description: "正式應用程式接收已標準化的供應商運行，而不是面向瀏覽器的供應商專用 payload。供應商擷取可放在每小時機械人或日後伺服器 adapter，但寫入路徑保持一致。",
        blocks: [
          { title: "ProviderAdapter" },
          { title: "核心 TypeScript 記錄" },
          {
            title: "必要 request headers",
            columns: ["Header", "必須", "備註"],
            rows: [
              ["Authorization", "是", "必須是 `Bearer ${INGESTION_SECRET}`。Bearer 憑證缺失或無效會回傳 401。"],
              ["Content-Type", "是", "使用 `application/json`；無效 JSON 會回傳 400。"],
              ["Idempotency-Key", "可選", "穩定運行 key；body 的 `idempotencyKey` 會優先於 header。"]
            ]
          },
          { title: "POST /api/ingest/run request body 例子" },
          { title: "Request 例子" },
          { title: "成功 response" },
          { title: "冪等重播 response" },
          { title: "錯誤 response 例子" },
          {
            title: "運行處理",
            columns: ["關注點", "實作方式"],
            rows: [
              ["驗證", "所有資料接入路由都需要 Authorization: Bearer INGESTION_SECRET。"],
              ["冪等性", "路由接受 Idempotency-Key header 或 body idempotencyKey，並把它儲存在供應商運行記錄。"],
              ["供應商運行日誌", "provider_run_logs 會記錄供應商 ID、類型、adapter 版本、擷取時間、陳舊門檻、狀態、數量、錯誤及 metadata。"],
              ["陳舊資料", "如果 fetchedAt 加 staleAfterMinutes 已經早於當前時間，寫入仍可完成，但運行及受影響訊號會標記為 stale。"],
              ["失敗", "擷取、標準化或寫入例外會把 provider_run_logs 及 ingestion_runs 標記為 failed，並保留可供營運者閱讀的錯誤。"]
            ]
          },
          {
            title: "驗證規則",
            columns: ["範圍", "規則"],
            rows: [
              ["Provider", "`providerId` 及 `adapterVersion` 是必要字串；`providerType` 必須是 weather、market 或 observation。"],
              ["新鮮度", "`fetchedAt` 如存在必須是 ISO datetime；`staleAfterMinutes` 必須是最多 14 日的正整數。"],
              ["預報記錄", "必須包含 `citySlug`、`provider`、`model`、`runTime`、`forecastTime`、`variable`、`value` 及 `unit`。"],
              ["市場記錄", "必須包含 `provider`、`providerEventId` 及 `title`；probability、bid、ask 如存在必須是 0 至 1。"],
              ["訊號記錄", "狀態應為 aligned、watch、divergent、stale、unavailable 或 high_uncertainty。相容舊狀態會在展示前映射。"],
              ["陳舊寫入", "如果運行已陳舊，`provider_run_logs.status` 及受影響訊號的 `freshness_status`/`status` 會寫成 stale。"]
            ]
          },
          {
            title: "Adapter 邊界",
            text: "供應商專用憑證及原始 API 細節應留在 provider adapters 或每小時機械人。應用程式 runtime 儲存已標準化記錄，並提供標準 API 輸出。"
          }
        ]
      },
      {
        title: "標準儲存與地圖輸出",
        description: "database schema 儲存已標準化記錄；地圖 API 則發布預報、市場及訊號圖層，並包含信心、新鮮度、概率差距及訊號狀態欄位。",
        blocks: [
          {
            title: "標準化寫入目標",
            columns: ["資料表", "用途"],
            rows: [
              ["provider_run_logs", "稽核供應商 adapter 運行、冪等 key、狀態、新鮮度、數量、錯誤及 metadata。"],
              ["ingestion_runs", "保留 sync 及 ingestion 操作的相容運行歷史。"],
              ["cities", "儲存標準城市身份、座標、時區、國家 metadata 及地圖重要度。"],
              ["forecast_runs", "儲存 provider、model、run_time、source_url、status 及運行 metadata。"],
              ["forecast_points", "按城市儲存預報變數，包括 provider、model、run time、forecast time、value、unit、confidence 及 raw audit data。"],
              ["market_events", "儲存已標準化的 Kalshi、Polymarket 或日後市場事件，包括概率、買/賣價、流動性、狀態、標籤、城市連結及結算詳情。"],
              ["market_timeseries", "按 market event 及 timestamp 儲存市場概率快照。"],
              ["city_market_links", "把已標準化市場事件連接到一個或多個城市。"],
              ["combined_signals", "儲存模型概率、市場概率、分歧、原始差距、調整後差距、信心、新鮮度狀態、訊號狀態及解釋。"]
            ]
          },
          { title: "GET /api/map-layers" },
          {
            title: "圖層屬性",
            columns: ["圖層", "核心屬性"],
            rows: [
              ["預報", "provider、model、variable、value、unit、confidence、freshness、forecastTime、runTime。"],
              ["市場", "provider、providerEventId、title、probability、bid、ask、liquidity、volume、status、freshness。"],
              ["訊號", "modelProbability、marketProbability、disagreement、rawEdge、adjustedEdge、confidence、freshness、state、explanation。"]
            ]
          },
          {
            title: "營運規則",
            text: "把原始供應商細節留在 UI 元件之外。UI 會透過伺服器資料載入器及標準地圖圖層路由消費已標準化的領域記錄。"
          }
        ]
      }
    ]
  },
  {
    slug: "prediction-market-weather-signals",
    title: "預測市場天氣訊號",
    shortTitle: "預測市場",
    description: "如何在不提供交易建議的前提下，比較模型概率與市場隱含概率。",
    keywords: ["預測市場天氣", "市場隱含概率", "預報差距", "天氣訊號", "Polymarket", "Kalshi"],
    sections: [
      {
        title: "模型-市場比較",
        blocks: [
          {
            text: "當天氣預報被轉化為概率並與市場隱含概率比較時，便可用於市場智能。有用的產品訊號是透明解釋分歧，而不是交易指令。"
          },
          {
            title: "非交易建議",
            text: "訊號會解釋預報模型分歧、市場隱含概率、資料新鮮度及不確定性。它們只供研究使用，並非交易建議。"
          },
          {
            title: "模型到市場訊號流程",
            description: "市場訊號只應在事件映射、預報概率、市場流動性及資料新鮮度檢查完成後才存在。"
          },
          {
            title: "市場隱含概率",
            description: "對簡單二元合約而言，在考慮費用、價差及流動性前，價格可作為概率代理。"
          },
          {
            title: "原始概率差距",
            description: "正值代表模型概率高於市場隱含概率。"
          }
        ]
      },
      {
        title: "風險調整訊號",
        blocks: [
          {
            title: "預報概率差距",
            description: "信心會把原始分歧轉化為較保守的解釋性分數。"
          },
          {
            title: "信心調整差距",
            description: "C 是 0 至 1 的信心評分。"
          },
          {
            title: "淨診斷差距",
            description: "此公式是診斷框架，並非交易指令。"
          },
          {
            title: "市場中間價概率",
            description: "使用中間價可在計算任何差距前，降低買賣差價過闊所造成的偏差。"
          },
          {
            title: "校準 log loss",
            description: "Log loss 會把模型與市場概率同已實現結果比較，並重罰信心高但錯誤的概率。"
          },
          {
            title: "訊號門檻",
            description: "門檻應保守，並取決於資料品質、市場流動性及驗證歷史。"
          },
          {
            title: "示意 Kelly 比例",
            description: "只用作說明模型概率與價格之間的理論關係。它不會出現在主要 UI，也不是建議。"
          },
          {
            title: "變數、單位及假設",
            columns: ["符號", "單位", "意思"],
            rows: [
              ["P_model", "0 至 1 概率", "經事件時間窗及城市/測站映射後的預報模型事件概率。"],
              ["P_market", "0 至 1 概率", "由價格或買賣中間價得出的市場隱含概率。"],
              ["G_raw", "概率點", "模型概率減市場隱含概率的有符號差距。"],
              ["G_adj", "概率點", "G_raw 乘以信心 C。"],
              ["G_net", "概率點", "扣除費用、價差/滑點及風險緩衝後的 G_adj。"],
              ["C", "0 至 1 分數", "來自預報一致性、新鮮度及驗證背景的信心。"],
              ["p_i", "0 至 1 概率", "第 i 個已驗證事件的預報概率。"],
              ["o_i", "0 或 1", "第 i 個已驗證事件的結果。"]
            ]
          },
          {
            title: "訊號狀態",
            columns: ["訊號", "意思"],
            rows: [
              ["Aligned", "模型概率與市場概率接近。"],
              ["Watch", "差異小或中等，或信心未夠強。"],
              ["Divergent", "模型-市場差異大，且信心與資料品質可接受。"],
              ["Stale", "市場或預報資料太舊，不能比較。"],
              ["Unavailable", "缺少模型、市場或映射資料。"],
              ["High uncertainty", "預報不確定性、定義風險或流動性風險太高，不適合顯示強烈分歧語言。"]
            ]
          }
        ]
      },
      {
        title: "天氣特定市場風險",
        blocks: [
          {
            columns: ["風險", "描述", "緩解"],
            rows: [
              ["定義風險", "市場結算準則可能不同於氣象變數。", "儲存事件規則映射及結算來源細節。"],
              ["測站風險", "官方天氣測站未必代表全城市狀況。", "把每個事件映射到實際測站或結算來源。"],
              ["時間風險", "事件時間窗可能與模型時間步不一致。", "謹慎插值，並揭示有效時間假設。"],
              ["修訂風險", "預報可因新模型運行而急劇轉變。", "使用運行間波動及資料新鮮度標籤。"],
              ["流動性風險", "薄弱市場可扭曲隱含概率。", "檢查買/賣差價、深度、成交量及陳舊快照。"],
              ["結算風險", "市場規則可能使用特定資料來源。", "顯示市場供應商及結算方法。"]
            ]
          },
          {
            title: "必要語言",
            text: "訊號會解釋預報模型分歧、市場隱含概率、資料新鮮度及不確定性。它們只供研究使用，並非交易建議。"
          }
        ]
      }
    ]
  },
  {
    slug: "formulas",
    title: "預報模型公式參考",
    shortTitle: "公式參考",
    description: "涵蓋大氣方程、數值方法、資料同化、集合、驗證及市場訊號數學的技術參考。",
    keywords: ["天氣公式", "大氣方程", "集合公式", "驗證指標", "市場差距公式"],
    sections: [
      {
        title: "大氣方程",
        blocks: [
          { title: "狀態方程" },
          { title: "動量" },
          { title: "質量連續" },
          { title: "靜力平衡" },
          { title: "熱力趨勢" },
          { title: "水分趨勢" },
          { title: "位溫" },
          { title: "Clausius-Clapeyron" },
          { title: "地轉平衡" }
        ]
      },
      {
        title: "數值方法",
        blocks: [
          { title: "向前時間步" },
          { title: "Leapfrog 格式" },
          { title: "平流" },
          { title: "空間導數" },
          { title: "CFL 條件" },
          { title: "擴散穩定性" },
          { title: "計算擴展" }
        ]
      },
      {
        title: "資料同化",
        blocks: [
          { title: "變分目標" },
          { title: "分析更新" },
          { title: "Kalman 增益" },
          { title: "分析誤差協方差" },
          { title: "4D-Var 成本" }
        ]
      },
      {
        title: "集合",
        blocks: [
          { title: "集合平均" },
          { title: "集合離散度" },
          { title: "事件概率" },
          { title: "百分位預報" },
          { title: "離散度-技術" },
          { title: "CRPS" }
        ]
      },
      {
        title: "驗證指標",
        blocks: [
          { title: "MAE" },
          { title: "RMSE" },
          { title: "Bias" },
          { title: "Brier Score" },
          { title: "Brier Skill Score" },
          { title: "ACC" },
          { title: "Skill Score" }
        ]
      },
      {
        title: "市場差距公式",
        blocks: [
          { title: "市場隱含概率" },
          { title: "市場中間價概率" },
          { title: "原始概率差距" },
          { title: "信心調整差距" },
          { title: "淨診斷差距" },
          { title: "信心評分" },
          { title: "校準 log loss" },
          { title: "訊號門檻" },
          { title: "示意 Kelly 比例" },
          {
            title: "非建議邊界",
            text: "訊號會解釋預報模型分歧、市場隱含概率、資料新鮮度及不確定性。它們只供研究使用，並非交易建議。"
          }
        ]
      }
    ]
  },
  {
    slug: "glossary",
    title: "詞彙表",
    shortTitle: "詞彙表",
    description: "平台各處使用的天氣、模型、驗證及市場術語定義。",
    keywords: ["RiWeather 詞彙表", "預報術語", "NWP 詞彙表", "市場訊號詞彙表"],
    sections: [
      {
        title: "核心術語",
        blocks: [
          {
            columns: ["術語", "定義"],
            rows: [
              ["分析場", "資料同化後對當前地球系統狀態的最佳估計。"],
              ["背景場", "資料同化中用作起始估計的上一個短期預報。"],
              ["偏差", "系統性模型誤差。"],
              ["邊界條件", "影響模型的外部條件，例如海面溫度或區域模型的側邊輸入。"],
              ["CFL 條件", "連繫波速、網格距離及時間步的穩定性規則。"],
              ["信心評分", "對預報訊號可靠程度的綜合估計。"],
              ["資料同化", "把觀測與模型預報及誤差估計結合的過程。"],
              ["確定性預報", "單一預報情境。"],
              ["動力核心", "天氣模型中求解大氣運動方程的部分。"],
              ["集合", "用於估計不確定性的多個相關預報。"],
              ["集合平均", "集合成員的平均值。"],
              ["集合離散度", "集合成員之間分歧的量度。"],
              ["預報循環", "由資料接入到輸出的完整預報系統運行。"],
              ["預報提前時間", "模型初始化時間與預報有效時間之間的時間。"],
              ["預報驗證", "把預報輸出與觀測真值比較。"],
              ["GFS", "NOAA/NCEP Global Forecast System。"],
              ["網格距離", "模型網格點之間的距離。"],
              ["初始條件", "大氣的起始狀態。"],
              ["市場概率", "由預測市場價格推斷出的概率代理。"],
              ["模型-市場差距", "模型估計概率與市場隱含概率之間的差異。"],
              ["NWP", "Numerical Weather Prediction。"],
              ["參數化", "對次網格物理過程的近似。"],
              ["物理方案", "表示輻射、雲、湍流、地表交換或其他物理過程的模型元件。"],
              ["後處理", "對原始模型輸出作統計或 AI 修正。"],
              ["降水概率", "達到指定門檻的降水估計機會。"],
              ["再分析", "使用模型及觀測重建歷史大氣。"],
              ["運行間波動", "模型循環之間預報輸出的改變。"],
              ["技術分數", "相對基準預報的表現。"],
              ["超級電腦", "用於運行營運模型的高效能運算系統。"],
              ["驗證指標", "用於評估預報準確度的定量分數。"]
            ]
          }
        ]
      }
    ]
  },
] satisfies DocPageTranslation[];
