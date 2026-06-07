import { zhHKDocTranslations, zhHKDocsCopy, zhHKSourceLinkTranslations } from "./zh-hk.ts";
import {
  formulaCategoryTitles,
  getFormulaById,
  getFormulasByCategory,
  type FormulaCategory,
  type FormulaId
} from "./formulas";

export type SourceId =
  | "ncei-nwp"
  | "ncei-gfs"
  | "noaa-gfs"
  | "nws-observations"
  | "ecmwf-ifs"
  | "ecmwf-ensemble"
  | "ecmwf-ai-ensemble"
  | "wmo-verification"
  | "open-meteo"
  | "polymarket-api"
  | "kalshi-api";

export type DiagramVariant =
  | "forecast-pipeline"
  | "ensemble-probability"
  | "forecast-edge"
  | "data-assimilation-cycle"
  | "model-market-signal-flow";

export type DocBlock =
  | { kind: "lead"; text: string }
  | { kind: "paragraph"; text: string }
  | { kind: "list"; title?: string; items: string[] }
  | { kind: "flow"; title?: string; steps: string[] }
  | { kind: "table"; title?: string; columns: string[]; rows: string[][] }
  | { kind: "formula"; title?: string; expression: string; description?: string }
  | { kind: "callout"; title: string; text: string }
  | { kind: "code"; title?: string; language?: string; code: string }
  | { kind: "diagram"; title?: string; description?: string; variant: DiagramVariant };

export type DocSection = {
  title: string;
  description?: string;
  blocks: DocBlock[];
};

export type DocPage = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  group: "Weather Prediction" | "Platform Architecture";
  keywords: string[];
  references?: SourceId[];
  sections: DocSection[];
};

export type DocsLocale = "en" | "zh-HK";

export type SourceLink = { label: string; href: string; publisher: string };

export type DocBlockTranslation = {
  title?: string;
  text?: string;
  description?: string;
  items?: string[];
  steps?: string[];
  columns?: string[];
  rows?: string[][];
};

export type DocSectionTranslation = {
  title: string;
  description?: string;
  blocks: DocBlockTranslation[];
};

export type DocPageTranslation = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  keywords: string[];
  sections: DocSectionTranslation[];
};

export type DocsSidebarGroup = {
  title: string;
  pages: Pick<DocPage, "slug" | "title" | "shortTitle" | "description">[];
};

export type DocsCopy = {
  localeName: string;
  metadata: {
    homeTitle: string;
    homeDescription: string;
    homeOpenGraphDescription: string;
    notFoundTitle: string;
    pageTitleSuffix: string;
    pageOpenGraphSuffix: string;
    dataSourcesTitle: string;
    dataSourcesDescription: string;
  };
  shell: {
    map: string;
    dataSources: string;
    docsBadge: string;
    technicalReference: string;
    forecastIntelligence: string;
    marketSignals: string;
    documentationMenu: string;
    docsHome: string;
    referencesHeading: string;
    previous: string;
    next: string;
    localeSwitcherLabel: string;
    localeOptions: Record<DocsLocale, string>;
  };
  home: {
    title: string;
    intro: string;
    technicalSummary: string;
    routesHeading: string;
    diagramsHeading: string;
    diagrams: Record<"forecast-pipeline" | "ensemble-probability" | "forecast-edge", { title: string; steps: string[] }>;
  };
  groups: Record<DocPage["group"], string>;
  diagrams: {
    forecastPipeline: { steps: { label: string; detail: string }[] };
    ensembleProbability: {
      memberForecastsEvent: string;
      memberDoesNotForecastEvent: string;
      caption: string;
      eventProbability: string;
      countLabel: string;
      description: string;
    };
    forecastEdge: {
      rows: { label: string; value: number; color: string }[];
      adjustedEdge: string;
    };
    assimilationCycle: {
      nodes: string[];
      finalDetail: string;
      defaultDetail: string;
    };
    modelMarketSignal: {
      stages: [string, string][];
    };
  };
  dataSources: {
    title: string;
    intro: string;
    transparencyHeading: string;
    notes: string[];
    sources: { name: string; body: string }[];
  };
};

export const docsLocales = ["en", "zh-HK"] as const satisfies readonly DocsLocale[];
export const defaultDocsLocale: DocsLocale = "en";

export const sourceLinks: Record<SourceId, SourceLink> = {
  "ncei-nwp": {
    label: "Numerical Weather Prediction",
    href: "https://www.ncei.noaa.gov/products/weather-climate-models/numerical-weather-prediction",
    publisher: "NOAA NCEI"
  },
  "ncei-gfs": {
    label: "Global Forecast System",
    href: "https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast",
    publisher: "NOAA NCEI"
  },
  "noaa-gfs": {
    label: "GFS Documentation",
    href: "https://www.emc.ncep.noaa.gov/emc/pages/numerical_forecast_systems/gfs.php",
    publisher: "NOAA NCEP EMC"
  },
  "nws-observations": {
    label: "NOAA Observation Systems",
    href: "https://www.weather.gov/about/observation-equipment",
    publisher: "National Weather Service"
  },
  "ecmwf-ifs": {
    label: "Integrated Forecasting System",
    href: "https://www.ecmwf.int/en/forecasts/documentation-and-support/changes-ecmwf-model",
    publisher: "ECMWF"
  },
  "ecmwf-ensemble": {
    label: "Ensemble forecasts at ECMWF",
    href: "https://www.ecmwf.int/en/about/media-centre/media-resources/tim-palmer-festschrift/Ensemble-forecasts-at-ECMWF-in-the-presence-and-future",
    publisher: "ECMWF"
  },
  "ecmwf-ai-ensemble": {
    label: "Ensemble AI forecasts become operational",
    href: "https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ensemble-ai-forecasts-become-operational",
    publisher: "ECMWF"
  },
  "wmo-verification": {
    label: "Forecast Verifications",
    href: "https://community.wmo.int/site/knowledge-hub/programmes-and-initiatives/wmo-integrated-processing-and-prediction-system-wipps/forecast-verifications",
    publisher: "WMO"
  },
  "open-meteo": {
    label: "Open-Meteo Forecast API",
    href: "https://open-meteo.com/en/docs",
    publisher: "Open-Meteo"
  },
  "polymarket-api": {
    label: "Polymarket API Documentation",
    href: "https://docs.polymarket.com/api-reference",
    publisher: "Polymarket"
  },
  "kalshi-api": {
    label: "Kalshi API",
    href: "https://help.kalshi.com/kalshi-api",
    publisher: "Kalshi"
  }
};

export const docsIntro =
  "RiWeather transforms official forecast-model output into structured probability, confidence, and model-market gap signals. It ingests numerical weather prediction data, compares model runs, measures uncertainty, verifies historical accuracy, and converts raw weather forecasts into research-grade intelligence for cities, events, and prediction markets.";

export const technicalSummary =
  "Supercomputer weather forecasts are generated by numerical models that estimate the current atmosphere through data assimilation, divide the Earth system into a three-dimensional grid, solve physical equations forward in time, and produce deterministic and probabilistic forecasts. AI systems can improve this process by calibrating model output, correcting bias, detecting forecast instability, and translating ensemble information into auditable probabilities.";

const noAdviceText =
  "Signals explain forecast-model disagreement, market-implied probability, data freshness, and uncertainty. They are for research only and are not trading advice.";

function formulaBlock(
  id: FormulaId,
  overrides: Partial<Pick<Extract<DocBlock, { kind: "formula" }>, "title" | "description">> = {}
): Extract<DocBlock, { kind: "formula" }> {
  const formula = getFormulaById(id);
  return {
    kind: "formula",
    title: overrides.title ?? formula.title,
    expression: formula.latex,
    description: overrides.description ?? formula.plainEnglish
  };
}

function formulaBlocksByCategory(category: FormulaCategory): Extract<DocBlock, { kind: "formula" }>[] {
  return getFormulasByCategory(category).map((formula) => formulaBlock(formula.id));
}

const commonAtmosphericVariables = [
  ["T", "Temperature"],
  ["p", "Pressure"],
  ["u", "East-west wind component"],
  ["v", "North-south wind component"],
  ["w", "Vertical wind component"],
  ["q", "Specific humidity"],
  ["\\rho", "Air density"],
  ["c", "Cloud water"],
  ["r", "Rain water"],
  ["s", "Snow"],
  ["i", "Ice"]
];

export const docs: DocPage[] = [
  {
    slug: "weather-prediction-overview",
    title: "Weather Prediction Overview",
    shortTitle: "Overview",
    description: "The end-to-end forecast chain, from observations to probabilistic weather and market intelligence.",
    group: "Weather Prediction",
    keywords: ["weather prediction", "NWP", "forecast pipeline", "forecast intelligence", "weather AI"],
    references: ["ncei-nwp", "ncei-gfs", "ecmwf-ifs"],
    sections: [
      {
        title: "Modern Forecasting",
        blocks: [
          {
            kind: "lead",
            text: "Modern weather prediction is a computational simulation of the Earth system. Forecast centers collect atmospheric observations, estimate the current atmosphere, and run numerical models forward in time on high-performance computing systems."
          },
          {
            kind: "paragraph",
            text: "Numerical Weather Prediction, or NWP, uses current observations, physical equations, numerical methods, and model parameterizations to forecast temperature, precipitation, pressure, wind, humidity, cloud cover, ocean state, and other variables. A production weather intelligence product should treat model output as a structured estimate of many possible future atmospheric states."
          },
          {
            kind: "diagram",
            title: "Forecast pipeline",
            description: "The platform flow from raw observing systems to research-grade forecast and market signals.",
            variant: "forecast-pipeline"
          }
        ]
      },
      {
        title: "The Basic Forecast Chain",
        blocks: [
          {
            kind: "flow",
            steps: [
              "Observations from satellites, radar, stations, aircraft, balloons, ships, and buoys",
              "Quality control for timeliness, duplication, physical consistency, and instrument error",
              "Data assimilation into a complete initial atmospheric state",
              "Numerical model integration on a three-dimensional grid",
              "Supercomputer execution across many forecast hours and ensemble members",
              "Deterministic and ensemble forecast products",
              "Post-processing, bias correction, and probability extraction",
              "Verification against observations and resolved events",
              "Decision signals for maps, dashboards, alerts, and market comparison"
            ]
          },
          {
            kind: "table",
            title: "Core disciplines",
            columns: ["Discipline", "Role", "Platform output"],
            rows: [
              ["Atmospheric physics", "Describes how air, water, heat, pressure, and momentum evolve.", "Weather variables, event thresholds, and physical constraints."],
              ["High-performance computing", "Runs global simulations fast enough to be operationally useful.", "Fresh model cycles, ensemble members, and gridded forecast fields."],
              ["Statistics and AI", "Corrects bias, estimates uncertainty, and converts forecasts into probabilities.", "Confidence scores, calibrated probabilities, and signal explanations."]
            ]
          },
          {
            kind: "callout",
            title: "Platform objective",
            text: "The goal is not only to display the forecast. The goal is to convert forecast-model output into probability, confidence, risk, and transparent signal context."
          }
        ]
      }
    ]
  },
  {
    slug: "supercomputers-and-weather-models",
    title: "Supercomputers and Weather Models",
    shortTitle: "Supercomputers",
    description: "Why operational weather prediction depends on high-performance computing and fast forecast cycles.",
    group: "Weather Prediction",
    keywords: ["weather supercomputer", "GFS", "forecast cycle", "high performance computing", "operational forecast"],
    references: ["noaa-gfs", "ncei-gfs", "ecmwf-ifs"],
    sections: [
      {
        title: "Why Supercomputers Are Needed",
        blocks: [
          {
            kind: "lead",
            text: "Weather models are computationally expensive because they simulate the atmosphere in three dimensions across the entire Earth, often across many vertical layers, forecast hours, and ensemble members."
          },
          {
            kind: "list",
            title: "A global model calculates",
            items: [
              "Wind movement, pressure gradients, and moisture transport.",
              "Radiation, cloud formation, precipitation, turbulence, and surface friction.",
              "Land-atmosphere, ocean-atmosphere, ice, snow, and soil processes.",
              "Boundary conditions, model forcing, and coupled Earth-system interactions.",
              "Many forecast hours across deterministic and ensemble forecast systems."
            ]
          },
          {
            kind: "formula",
            title: "Operational value",
            expression: "Forecast\\ Value = Accuracy \\times Timeliness",
            description: "A forecast cycle has a deadline. Highly accurate output that arrives too late has limited operational value."
          }
        ]
      },
      {
        title: "Forecast Cycle Workload",
        blocks: [
          {
            kind: "table",
            columns: ["Workload", "Description", "Product implication"],
            rows: [
              ["Data ingest", "Pull observations from satellites, stations, radar, aircraft, buoys, ships, balloons, and model feeds.", "Track provider, ingest time, and raw source identifiers."],
              ["Quality control", "Remove delayed, duplicated, physically inconsistent, or obviously bad records.", "Surface data-quality flags alongside probabilities."],
              ["Data assimilation", "Combine observations with a previous model background state.", "Record analysis time and run time separately."],
              ["Forecast integration", "Run physical equations forward in time.", "Preserve valid time, lead time, model, cycle, and variable metadata."],
              ["Ensemble generation", "Run perturbed versions of the forecast to estimate uncertainty.", "Store member counts, event counts, mean, spread, and percentiles."],
              ["Post-processing", "Convert raw model output into calibrated products and event probabilities.", "Version calibration models and normalization logic."],
              ["Dissemination", "Publish data to APIs, charts, applications, and downstream systems.", "Make freshness and provenance visible in the UI."]
            ]
          },
          {
            kind: "callout",
            title: "Cloud server boundary",
            text: "A normal web server can serve forecast data, but it usually cannot run a full global operational model at competitive resolution, cadence, and reliability. The application should ingest official forecast outputs rather than pretend to replace global forecast centers."
          }
        ]
      }
    ]
  },
  {
    slug: "observing-the-atmosphere",
    title: "Observing the Atmosphere",
    shortTitle: "Observations",
    description: "How satellites, stations, radar, balloons, aircraft, ships, and ocean sensors initialize forecast models.",
    group: "Weather Prediction",
    keywords: ["weather observations", "satellite data", "radar", "ASOS", "forecast initialization"],
    references: ["nws-observations", "ecmwf-ifs"],
    sections: [
      {
        title: "Measurement Sources",
        blocks: [
          {
            kind: "lead",
            text: "Before a model can predict the future, it must estimate the present. Weather observations provide the raw evidence for that estimate, but they are incomplete, noisy, and unevenly distributed."
          },
          {
            kind: "table",
            columns: ["Source", "What it measures", "Common quality issues"],
            rows: [
              ["Satellites", "Clouds, temperature profiles, water vapor, sea surface temperature, atmospheric motion, and radiation.", "Retrieval uncertainty, cloud contamination, orbital gaps, and latency."],
              ["Weather stations", "Surface temperature, pressure, wind, humidity, and precipitation.", "Instrument exposure, local siting, missing data, and maintenance drift."],
              ["Radar", "Precipitation intensity, storm structure, hydrometeor type, and velocity.", "Beam blockage, bright banding, attenuation, and range effects."],
              ["Weather balloons", "Vertical profiles of temperature, wind, humidity, and pressure.", "Sparse launch cadence, drift, and sensor response time."],
              ["Aircraft", "Upper-air temperature, wind, and sometimes humidity.", "Route concentration and uneven spatial coverage."],
              ["Ocean buoys and ships", "Sea-level pressure, waves, sea surface temperature, and marine winds.", "Sparse coverage, platform motion, and reporting delays."],
              ["Remote sensors", "Radiation, moisture, aerosols, atmospheric composition, and boundary-layer structure.", "Calibration, representativeness, and retrieval assumptions."]
            ]
          }
        ]
      },
      {
        title: "The Observation Problem",
        blocks: [
          {
            kind: "paragraph",
            text: "The atmosphere is not fully observed. Remote oceans, polar regions, sparse ground stations, instrument errors, delayed reports, satellite retrieval uncertainty, and vertical resolution limits all leave gaps. A forecast model therefore starts from an estimate rather than a perfect measurement."
          },
          {
            kind: "list",
            title: "What the platform should track",
            items: [
              "Observation source, timestamp, provider, and ingest timestamp.",
              "Station or grid location, elevation, and distance to the mapped city or market event.",
              "Quality-control status, missing fields, and suspected outliers.",
              "Whether the observation is suitable for verification, assimilation context, or display only."
            ]
          },
          {
            kind: "callout",
            title: "Why assimilation exists",
            text: "Forecast centers cannot simply measure the whole atmosphere. They estimate a complete physical state from incomplete and noisy evidence, then use that state as the starting point for the forecast."
          }
        ]
      }
    ]
  },
  {
    slug: "data-assimilation",
    title: "Data Assimilation",
    shortTitle: "Data Assimilation",
    description: "How models combine observations with a previous forecast to create the initial atmospheric state.",
    group: "Weather Prediction",
    keywords: ["data assimilation", "analysis state", "background forecast", "observation operator", "variational assimilation"],
    references: ["ecmwf-ifs", "ncei-nwp"],
    sections: [
      {
        title: "The Analysis State",
        blocks: [
          {
            kind: "lead",
            text: "Data assimilation combines observations with a recent short-range forecast to produce the best estimate of the current atmosphere. That estimate is called the analysis."
          },
          {
            kind: "diagram",
            title: "Data assimilation cycle",
            description: "Each cycle produces an analysis, then the resulting forecast becomes the background for the next cycle.",
            variant: "data-assimilation-cycle"
          },
          {
            kind: "formula",
            title: "Atmospheric state vector",
            expression: "\\mathbf{x} = [T, p, u, v, w, q, \\rho, c, r, s, i]",
            description: "The model needs a complete state vector even though observations are incomplete."
          },
          {
            kind: "table",
            columns: ["Variable", "Meaning"],
            rows: commonAtmosphericVariables
          }
        ]
      },
      {
        title: "Variational Objective",
        blocks: [
          {
            kind: "formula",
            title: "Objective function",
            expression: "J(x) = (x - x_b)^T B^{-1}(x - x_b) + (y - H(x))^T R^{-1}(y - H(x))",
            description: "The first term penalizes distance from the background forecast. The second term penalizes mismatch with observations."
          },
          {
            kind: "table",
            columns: ["Symbol", "Meaning"],
            rows: [
              ["J(x)", "Cost function to minimize."],
              ["x", "Atmospheric state being estimated."],
              ["x_b", "Background state from a previous short-range forecast."],
              ["B", "Background error covariance."],
              ["y", "Observation vector."],
              ["H(x)", "Observation operator that maps model state to observable values."],
              ["R", "Observation error covariance."]
            ]
          },
          {
            kind: "flow",
            title: "Continuous analysis cycle",
            steps: ["Analysis at 00 UTC", "Forecast from 00 UTC", "Background for 06 UTC", "New observations", "Analysis at 06 UTC"]
          },
          {
            kind: "callout",
            title: "Plain-English version",
            text: "Find the atmospheric state that is close to the previous forecast, close to the new observations, and weighted by how much each input is trusted."
          }
        ]
      },
      {
        title: "Optimal Analysis Update",
        description: "Minimizing the variational cost is equivalent to a linear update that blends the background and observations by their relative confidence.",
        blocks: [
          {
            kind: "formula",
            title: "Analysis update",
            expression: "x_a = x_b + K(y - H(x_b))",
            description: "The analysis nudges the background toward observations in proportion to the innovation, the difference between observed and simulated values."
          },
          {
            kind: "formula",
            title: "Kalman gain",
            expression: "K = BH^T\\left(HBH^T + R\\right)^{-1}",
            description: "The gain weights the correction by background error relative to total error, so noisier observations move the analysis less."
          },
          {
            kind: "formula",
            title: "Analysis error covariance",
            expression: "A = (I - KH)B",
            description: "Assimilating observations reduces the background uncertainty, producing a more confident initial state for the next forecast."
          },
          {
            kind: "formula",
            title: "Four-dimensional variational cost",
            expression: "J(x_0) = \\frac{1}{2}(x_0 - x_b)^T B^{-1}(x_0 - x_b) + \\frac{1}{2}\\sum_{k=0}^{K}(y_k - H_k(x_k))^T R_k^{-1}(y_k - H_k(x_k))",
            description: "4D-Var fits a model trajectory to observations spread across an assimilation window, not just a single analysis time."
          }
        ]
      }
    ]
  },
  {
    slug: "numerical-weather-prediction",
    title: "Numerical Weather Prediction",
    shortTitle: "Numerical Models",
    description: "How models move the atmospheric state forward through physical equations and numerical time steps.",
    group: "Weather Prediction",
    keywords: ["numerical weather prediction", "atmospheric equations", "forecast update", "model tendency", "chaos"],
    references: ["ncei-nwp", "noaa-gfs", "ecmwf-ifs"],
    sections: [
      {
        title: "Forecast Integration",
        blocks: [
          {
            kind: "lead",
            text: "Numerical Weather Prediction uses mathematical equations to simulate how the atmosphere changes over time. A model starts with the analysis state, calculates physical tendencies, then advances that state through many small time steps."
          },
          {
            kind: "list",
            title: "Operational models approximate",
            items: [
              "Conservation of momentum, mass, energy, and moisture.",
              "Equation of state for air density, pressure, and temperature.",
              "Radiation transfer, cloud microphysics, turbulence, and surface exchange.",
              "Land, ocean, ice, and boundary interactions."
            ]
          },
          {
            kind: "formula",
            title: "State vector",
            expression: "X = (T, p, u, v, w, q, \\rho, c, r, s, i)",
            description: "The exact vector differs by model, but the principle is the same: track the atmosphere and connected surface systems."
          },
          {
            kind: "table",
            title: "Representative state variables",
            columns: ["Variable", "Meaning"],
            rows: commonAtmosphericVariables
          }
        ]
      },
      {
        title: "Forecast Update Equation",
        blocks: [
          {
            kind: "formula",
            title: "Time-stepped model update",
            expression: "X_{t + \\Delta t} = X_t + \\Delta t \\cdot F(X_t)",
            description: "F(X_t) is the physical tendency calculated by model dynamics and physics."
          },
          {
            kind: "table",
            columns: ["Symbol", "Meaning"],
            rows: [
              ["X_t", "Current atmospheric state."],
              ["X_{t + Delta t}", "Future atmospheric state after one time step."],
              ["Delta t", "Model time step."],
              ["F(X_t)", "Physical tendency calculated by the model."]
            ]
          },
          {
            kind: "formula",
            title: "Advection",
            expression: "\\frac{\\partial \\phi}{\\partial t} = -\\vec{V} \\cdot \\nabla \\phi + S_\\phi",
            description: "Most atmospheric tendencies are dominated by transport: a field changes locally because the wind carries it, plus any source or sink."
          },
          {
            kind: "formula",
            title: "Leapfrog time scheme",
            expression: "X^{n+1} = X^{n-1} + 2\\Delta t\\, F(X^n)",
            description: "A common centered scheme that is second-order accurate in time, typically combined with a filter to suppress the computational mode."
          },
          {
            kind: "paragraph",
            text: "This is the core idea of numerical prediction: calculate tendencies, step forward, repeat, and publish the resulting forecast fields with enough metadata to know which model run produced them."
          }
        ]
      },
      {
        title: "Why Small Errors Grow",
        blocks: [
          {
            kind: "paragraph",
            text: "Weather is chaotic. Tiny errors in initial conditions can grow into large forecast differences, especially during fast-moving storms, convective outbreaks, tropical systems, and sharp frontal transitions."
          },
          {
            kind: "formula",
            title: "Idealized error growth",
            expression: "\\epsilon(t) \\approx \\epsilon(0)e^{\\lambda t}",
            description: "The growth rate lambda varies by weather regime and scale."
          },
          {
            kind: "table",
            title: "Lead-time interpretation",
            columns: ["Lead time", "Typical interpretation"],
            rows: [
              ["0-24 hours", "High detail and strong observational control, but convective errors can still be large."],
              ["2-5 days", "Synoptic-scale patterns are usually more reliable than local extremes."],
              ["6-10 days", "Uncertainty grows substantially; ensemble spread becomes central."],
              ["10+ days", "Mostly pattern guidance rather than precise local prediction."]
            ]
          }
        ]
      }
    ]
  },
  {
    slug: "model-physics",
    title: "Model Physics",
    shortTitle: "Model Physics",
    description: "The physical processes represented directly or through parameterizations in weather models.",
    group: "Weather Prediction",
    keywords: ["model physics", "parameterization", "momentum equation", "hydrostatic balance", "moisture tendency"],
    references: ["ecmwf-ifs", "noaa-gfs"],
    sections: [
      {
        title: "Core Physical Equations",
        blocks: [
          {
            kind: "lead",
            text: "Model physics represents processes that affect the atmosphere. Some processes are resolved directly by the model grid. Smaller or more complex processes are approximated through parameterization schemes."
          },
          {
            kind: "formula",
            title: "Equation of state",
            expression: "p = \\rho R_d T",
            description: "Pressure, density, and temperature are linked by the ideal gas relationship for dry air."
          },
          {
            kind: "formula",
            title: "Momentum equation",
            expression: "\\frac{D\\vec{V}}{Dt} = -\\frac{1}{\\rho}\\nabla p - 2\\vec{\\Omega} \\times \\vec{V} + \\vec{g} + \\vec{F}",
            description: "Wind changes through pressure-gradient force, Coriolis force, gravity, friction, and turbulent mixing."
          },
          {
            kind: "formula",
            title: "Mass continuity",
            expression: "\\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot (\\rho \\vec{V}) = 0",
            description: "This enforces conservation of mass."
          },
          {
            kind: "formula",
            title: "Hydrostatic balance",
            expression: "\\frac{\\partial p}{\\partial z} = -\\rho g",
            description: "A useful approximation for how pressure decreases with height."
          },
          {
            kind: "formula",
            title: "Moisture tendency",
            expression: "\\frac{Dq}{Dt} = E - C + S_q",
            description: "Specific humidity changes through evaporation, condensation, and additional source or sink terms."
          },
          {
            kind: "formula",
            title: "Thermodynamic energy equation",
            expression: "c_p\\frac{DT}{Dt} - \\frac{1}{\\rho}\\frac{Dp}{Dt} = Q",
            description: "Temperature evolves through adiabatic compression and diabatic heating Q from radiation, condensation, and mixing."
          },
          {
            kind: "formula",
            title: "Potential temperature",
            expression: "\\theta = T\\left(\\frac{p_0}{p}\\right)^{R_d/c_p}",
            description: "Potential temperature is conserved under dry adiabatic motion, which makes it a natural vertical coordinate for stability analysis."
          },
          {
            kind: "formula",
            title: "Clausius-Clapeyron relation",
            expression: "\\frac{d e_s}{dT} = \\frac{L_v\\, e_s}{R_v T^2}",
            description: "Saturation vapor pressure rises roughly exponentially with temperature, so warmer air holds more moisture and can produce heavier precipitation."
          },
          {
            kind: "formula",
            title: "Geostrophic balance",
            expression: "\\vec{V}_g = \\frac{1}{\\rho f}\\,\\hat{k} \\times \\nabla p",
            description: "Away from the surface and the equator, large-scale wind is approximately the balance between pressure-gradient and Coriolis forces."
          }
        ]
      },
      {
        title: "Parameterized Processes",
        blocks: [
          {
            kind: "table",
            columns: ["Process", "Why it is difficult", "Signal implication"],
            rows: [
              ["Deep convection", "Thunderstorms are often smaller than global model grid cells.", "Local precipitation probabilities can change sharply between runs."],
              ["Cloud microphysics", "Droplets, ice crystals, graupel, and snowflakes interact at tiny scales.", "Phase and precipitation-type forecasts need careful confidence labels."],
              ["Turbulence", "Small eddies are below grid scale.", "Wind gusts and boundary-layer timing can be uncertain."],
              ["Radiation", "Absorption and emission vary by cloud, gas, aerosol, and surface.", "Temperature and cloud-bias corrections should be verified by region."],
              ["Surface exchange", "Heat and moisture flux vary by vegetation, soil, snow, water, and urban surfaces.", "City-level calibration matters, especially near coasts and mountains."]
            ]
          },
          {
            kind: "list",
            title: "Why models disagree",
            items: [
              "Different grid structures and dynamical cores.",
              "Different data assimilation systems and observation usage.",
              "Different cloud, convection, boundary-layer, and land-surface schemes.",
              "Different ocean coupling, post-processing, and calibration choices."
            ]
          },
          {
            kind: "callout",
            title: "Multi-model value",
            text: "Different models can share the same broad observations but diverge because of grids, physics, assimilation choices, and post-processing. Multi-model comparison is therefore a first-class signal input."
          }
        ]
      }
    ]
  },
  {
    slug: "grid-resolution-and-time-stepping",
    title: "Grid Resolution and Time Stepping",
    shortTitle: "Grid + Time Steps",
    description: "How grid spacing, vertical layers, and stable time steps shape forecast accuracy and cost.",
    group: "Weather Prediction",
    keywords: ["grid resolution", "time stepping", "CFL condition", "forecast cost", "spatial derivative"],
    references: ["ncei-nwp", "noaa-gfs"],
    sections: [
      {
        title: "Resolution Tradeoffs",
        blocks: [
          {
            kind: "lead",
            text: "Weather models divide the atmosphere into grid cells. Smaller grid spacing can represent finer weather structure, but it requires much more computation and usually shorter time steps."
          },
          {
            kind: "formula",
            title: "Spatial derivative",
            expression: "\\frac{\\partial T}{\\partial x} \\approx \\frac{T_{i+1} - T_i}{\\Delta x}",
            description: "Numerical models approximate continuous derivatives using differences across grid points."
          },
          {
            kind: "formula",
            title: "Grid point scaling",
            expression: "Grid\\ Points \\approx \\frac{Earth\\ Area}{(\\Delta x)^2} \\times Vertical\\ Layers",
            description: "Halving horizontal grid spacing can roughly quadruple horizontal grid cells before time-step costs are considered."
          },
          {
            kind: "table",
            columns: ["Smaller grid spacing", "Larger grid spacing"],
            rows: [
              ["More local detail.", "Less local detail."],
              ["Better terrain, coastline, and precipitation structure.", "Smoother terrain and coarser event mapping."],
              ["More expensive to run and store.", "Cheaper to run and disseminate."],
              ["Usually requires smaller time steps.", "Can often use larger time steps."]
            ]
          }
        ]
      },
      {
        title: "Time Step Stability",
        blocks: [
          {
            kind: "formula",
            title: "Forward time step",
            expression: "X^{n+1} = X^n + \\Delta t \\cdot F(X^n)",
            description: "The model updates the state from one time level to the next."
          },
          {
            kind: "formula",
            title: "CFL stability condition",
            expression: "C = \\frac{u\\Delta t}{\\Delta x} \\le 1",
            description: "For numerical stability, information should not move too far across the grid during a single time step."
          },
          {
            kind: "table",
            columns: ["Symbol", "Meaning"],
            rows: [
              ["C", "Courant number."],
              ["u", "Representative wind or wave speed."],
              ["Delta t", "Time step."],
              ["Delta x", "Grid spacing."]
            ]
          },
          {
            kind: "formula",
            title: "Diffusive stability",
            expression: "\\frac{\\kappa\\,\\Delta t}{(\\Delta x)^2} \\le \\frac{1}{2}",
            description: "Explicit diffusion and mixing schemes impose their own, often stricter, limit on the time step as grid spacing shrinks."
          },
          {
            kind: "formula",
            title: "Shortest resolvable wave",
            expression: "\\lambda_{min} = 2\\,\\Delta x",
            description: "A grid cannot represent features smaller than two grid lengths, so sub-grid processes must be parameterized rather than resolved."
          },
          {
            kind: "callout",
            title: "Product implication",
            text: "Resolution, lead time, model cycle, and update cadence should be visible when users compare forecasts. Higher resolution does not automatically mean higher forecast skill."
          }
        ]
      }
    ]
  },
  {
    slug: "ensemble-forecasting",
    title: "Ensemble Forecasting",
    shortTitle: "Ensembles",
    description: "How many forecast members produce event probabilities, spread, and uncertainty estimates.",
    group: "Weather Prediction",
    keywords: ["ensemble forecasting", "ensemble mean", "ensemble spread", "event probability", "probabilistic forecast"],
    references: ["ecmwf-ensemble", "ecmwf-ai-ensemble", "wmo-verification"],
    sections: [
      {
        title: "Ensemble Concept",
        blocks: [
          {
            kind: "lead",
            text: "A deterministic forecast gives one possible future. An ensemble forecast gives many possible futures by perturbing initial conditions, physics, or model assumptions."
          },
          {
            kind: "diagram",
            title: "Ensemble probability",
            description: "Event probability is counted from the share of members satisfying the event rule, then calibrated against verification history.",
            variant: "ensemble-probability"
          },
          {
            kind: "flow",
            title: "Example rain probability",
            steps: ["50 ensemble members", "38 predict measurable rain", "12 predict no measurable rain", "Rain probability = 38 / 50 = 76%"]
          }
        ]
      },
      {
        title: "Mean, Spread, and Probability",
        blocks: [
          {
            kind: "formula",
            title: "Ensemble mean",
            expression: "\\bar{x} = \\frac{1}{N}\\sum_{i=1}^{N} x_i",
            description: "The average forecast across members."
          },
          {
            kind: "formula",
            title: "Ensemble spread",
            expression: "\\sigma = \\sqrt{\\frac{1}{N-1}\\sum_{i=1}^{N}(x_i - \\bar{x})^2}",
            description: "A measure of member disagreement."
          },
          {
            kind: "formula",
            title: "Event probability",
            expression: "P(E) = \\frac{n_E}{N}",
            description: "The fraction of members that satisfy the event rule."
          },
          {
            kind: "formula",
            title: "Spread-skill relationship",
            expression: "\\langle \\sigma^2 \\rangle \\approx \\langle (\\bar{x} - o)^2 \\rangle",
            description: "In a well-calibrated ensemble, the average variance of the members matches the mean squared error of the ensemble mean, so spread is a usable proxy for expected error."
          },
          {
            kind: "formula",
            title: "Continuous ranked probability score",
            expression: "\\mathrm{CRPS} = \\int_{-\\infty}^{\\infty}\\left(F(x) - \\mathbf{1}\\{x \\ge o\\}\\right)^2 dx",
            description: "CRPS compares the full forecast distribution F against the observed outcome o, rewarding sharp forecasts that stay calibrated."
          },
          {
            kind: "table",
            title: "Variables, units, and assumptions",
            columns: ["Symbol", "Unit", "Meaning"],
            rows: [
              ["x_bar", "Same as variable x", "Ensemble mean."],
              ["sigma", "Same as variable x", "Ensemble spread."],
              ["N", "Count", "Number of ensemble members after quality control."],
              ["n_E", "Count", "Number of members forecasting event E under the same event rule."],
              ["P(E)", "0 to 1 probability", "Probability of event E before calibration adjustments."]
            ]
          },
          {
            kind: "callout",
            title: "Market relevance",
            text: "Prediction markets need probabilities, not only deterministic values. Ensembles can express measurable-rain probability, threshold probability, no-event probability, and confidence in a form that can be compared with market-implied probability."
          }
        ]
      }
    ]
  },
  {
    slug: "forecast-uncertainty",
    title: "Forecast Uncertainty",
    shortTitle: "Uncertainty",
    description: "How volatility, model disagreement, lead time, and verification shape confidence scores.",
    group: "Weather Prediction",
    keywords: ["forecast uncertainty", "confidence score", "model disagreement", "forecast volatility", "run-to-run volatility"],
    references: ["ecmwf-ensemble", "wmo-verification"],
    sections: [
      {
        title: "Sources of Uncertainty",
        blocks: [
          {
            kind: "lead",
            text: "Forecast uncertainty measures how confident the system should be in a forecast. It grows when the current atmosphere is poorly observed, the model physics are approximate, the event is small scale, or recent model runs are unstable."
          },
          {
            kind: "table",
            columns: ["Source", "Description", "UI treatment"],
            rows: [
              ["Initial-condition uncertainty", "The current atmosphere is not perfectly observed.", "Show confidence decay with lead time."],
              ["Model uncertainty", "Physical equations and parameterizations are approximations.", "Compare multiple model families."],
              ["Parameterization uncertainty", "Clouds, convection, turbulence, and radiation are approximated.", "Flag convective and local-precipitation regimes."],
              ["Boundary uncertainty", "Ocean, land, ice, and surface states may be imperfect.", "Track upstream boundary and surface metadata."],
              ["Scale uncertainty", "Local phenomena may be smaller than grid resolution.", "Do not make overprecise city-level claims."],
              ["Regime uncertainty", "Some atmospheric patterns are inherently harder to predict.", "Use historical regime verification where available."]
            ]
          }
        ]
      },
      {
        title: "Confidence Scoring",
        blocks: [
          {
            kind: "formula",
            title: "Forecast volatility",
            expression: "V = |x_{run,t} - x_{run,t-1}|",
            description: "Run-to-run volatility measures how much the forecast changed between recent model cycles."
          },
          {
            kind: "formula",
            title: "Model disagreement",
            expression: "D = \\sqrt{\\frac{1}{M-1}\\sum_{j=1}^{M}(m_j - \\bar{m})^2}",
            description: "Cross-model disagreement measures how much provider or model families diverge."
          },
          {
            kind: "formula",
            title: "Confidence score",
            expression: "C = \\mathrm{clamp}(w_1A_e + w_2A_m + w_3S_h - w_4V - w_5D,\\ 0,\\ 1)",
            description: "A practical confidence score can combine ensemble agreement, multi-model agreement, historical skill, volatility, and disagreement."
          },
          {
            kind: "formula",
            title: "Error saturation growth",
            expression: "\\epsilon(t) = \\epsilon_\\infty\\left(1 - e^{-t/\\tau}\\right)",
            description: "Forecast error grows quickly at first, then saturates toward a climatological ceiling as predictability is lost at long lead times."
          },
          {
            kind: "formula",
            title: "Logistic confidence mapping",
            expression: "C = \\frac{1}{1 + e^{-(a - bU)}}",
            description: "A raw uncertainty measure U can be mapped to a bounded 0-to-1 confidence with a calibrated logistic function."
          },
          {
            kind: "table",
            columns: ["Confidence state", "Product interpretation"],
            rows: [
              ["High", "Models agree, ensemble spread is low, and recent runs are stable."],
              ["Medium", "Some uncertainty exists, but the primary signal is coherent."],
              ["Low", "Models disagree or the forecast is changing rapidly."],
              ["Very low", "Use restrained claims and show wide probability bands."]
            ]
          },
          {
            kind: "callout",
            title: "Product meaning",
            text: "A high confidence score means the system sees a stable, well-supported forecast. It is not a guarantee that the event will occur."
          }
        ]
      }
    ]
  },
  {
    slug: "ai-weather-models",
    title: "AI Weather Models",
    shortTitle: "AI Models",
    description: "Where AI can help weather prediction and where physics, verification, and guardrails still matter.",
    group: "Weather Prediction",
    keywords: ["AI weather models", "forecast calibration", "bias correction", "hybrid forecast", "AI ensemble"],
    references: ["ecmwf-ai-ensemble", "ecmwf-ifs", "wmo-verification"],
    sections: [
      {
        title: "Physics Models vs AI Models",
        blocks: [
          {
            kind: "lead",
            text: "AI weather systems learn atmospheric patterns from historical model output and observations. They can generate forecasts quickly once trained and are increasingly used alongside physics-based models for calibration, post-processing, and fast probabilistic guidance."
          },
          {
            kind: "table",
            columns: ["System type", "Strength", "Limitation"],
            rows: [
              ["Physics-based NWP", "Grounded in physical equations, operational assimilation, and scientific constraints.", "Expensive to run and still approximate at unresolved scales."],
              ["AI forecast model", "Fast inference, pattern learning, bias correction, and downscaling potential.", "Depends heavily on training data, calibration, and regime coverage."],
              ["Hybrid system", "Combines physics output, observations, ensembles, verification history, and learned calibration.", "More complex to validate and monitor."]
            ]
          },
          {
            kind: "list",
            title: "AI can improve",
            items: [
              "Bias correction and local calibration.",
              "Downscaling and post-processing.",
              "Fast forecast generation and nowcasting.",
              "Pattern recognition, regime classification, and extreme-event detection.",
              "Ensemble calibration and forecast-product summarization."
            ]
          }
        ]
      },
      {
        title: "Adjustment and Guardrails",
        blocks: [
          {
            kind: "formula",
            title: "AI forecast adjustment",
            expression: "\\hat{y} = f_{nwp}(x) + g_{ai}(x, z)",
            description: "The final corrected forecast can combine raw NWP output with an AI correction model using local features and recent error context."
          },
          {
            kind: "formula",
            title: "Recent bias",
            expression: "Bias_{recent} = \\frac{1}{N}\\sum_{i=1}^{N}(y_{model,i} - y_{obs,i})",
            description: "Bias correction should be verified separately by city, variable, lead time, season, and regime."
          },
          {
            kind: "formula",
            title: "Bias-corrected forecast",
            expression: "\\hat{y} = y_{model} - Bias_{recent}",
            description: "Subtract recent systematic error from the raw model estimate."
          },
          {
            kind: "formula",
            title: "Latitude-weighted training loss",
            expression: "\\mathcal{L} = \\frac{1}{N}\\sum_{i=1}^{N} w(\\phi_i)\\left(\\hat{y}_i - y_i\\right)^2",
            description: "Data-driven weather models minimize a gridded error that weights each cell so that high-latitude grid points do not dominate the loss."
          },
          {
            kind: "formula",
            title: "Latitude weight",
            expression: "w(\\phi) = \\frac{\\cos\\phi}{\\frac{1}{N_\\phi}\\sum_{j} \\cos\\phi_j}",
            description: "The weight is proportional to grid-cell area, which shrinks toward the poles as the cosine of latitude."
          },
          {
            kind: "formula",
            title: "Anomaly correlation coefficient",
            expression: "\\mathrm{ACC} = \\frac{\\sum_i w_i (f_i - c_i)(o_i - c_i)}{\\sqrt{\\sum_i w_i (f_i - c_i)^2 \\, \\sum_i w_i (o_i - c_i)^2}}",
            description: "ACC measures how well the forecast captures departures from climatology c, and is a primary headline metric for AI and physics models alike."
          },
          {
            kind: "callout",
            title: "Guardrail",
            text: "AI outputs should be compared against official model fields, ensemble spread, observation quality, and historical verification before they influence market-facing signals."
          }
        ]
      }
    ]
  },
  {
    slug: "model-verification",
    title: "Model Verification",
    shortTitle: "Verification",
    description: "How forecast quality is measured with error metrics, probability scores, and skill scores.",
    group: "Weather Prediction",
    keywords: ["forecast verification", "MAE", "RMSE", "Brier score", "skill score", "forecast calibration"],
    references: ["wmo-verification", "ncei-nwp"],
    sections: [
      {
        title: "Why Verification Matters",
        blocks: [
          {
            kind: "lead",
            text: "Verification compares forecast output with what actually happened. Without verification, a platform cannot know which models, horizons, variables, or cities are reliable."
          },
          {
            kind: "list",
            title: "A weather AI platform should track",
            items: [
              "Which model is best by city, variable, lead time, and season.",
              "Which model performs best in specific weather regimes.",
              "Whether a model is improving or degrading over recent runs.",
              "Whether probability forecasts are well calibrated.",
              "Whether market-facing signals historically explained real model-market disagreement."
            ]
          },
          {
            kind: "table",
            columns: ["Question", "Metric type"],
            rows: [
              ["How far was the forecast from the observed value?", "MAE and RMSE."],
              ["Was the model systematically too warm, wet, or windy?", "Bias metrics."],
              ["Were event probabilities calibrated?", "Brier score and reliability diagnostics."],
              ["Did the model beat a baseline?", "Skill score against climatology, persistence, or another model."]
            ]
          }
        ]
      },
      {
        title: "Core Metrics",
        blocks: [
          { kind: "formula", title: "Mean Absolute Error", expression: "MAE = \\frac{1}{N}\\sum_{i=1}^{N}|f_i - o_i|" },
          { kind: "formula", title: "Root Mean Square Error", expression: "RMSE = \\sqrt{\\frac{1}{N}\\sum_{i=1}^{N}(f_i - o_i)^2}" },
          { kind: "formula", title: "Bias", expression: "Bias = \\frac{1}{N}\\sum_{i=1}^{N}(f_i - o_i)" },
          { kind: "formula", title: "Brier Score", expression: "BS = \\frac{1}{N}\\sum_{i=1}^{N}(p_i - o_i)^2", description: "Lower Brier score is better for binary probability forecasts." },
          {
            kind: "formula",
            title: "Forecast skill score",
            expression: "Skill = 1 - \\frac{Score_{model}}{Score_{reference}}",
            description: "A positive score means the model beats the reference forecast."
          },
          {
            kind: "formula",
            title: "Anomaly correlation coefficient",
            expression: "\\mathrm{ACC} = \\frac{\\sum_i (f_i - c_i)(o_i - c_i)}{\\sqrt{\\sum_i (f_i - c_i)^2 \\, \\sum_i (o_i - c_i)^2}}",
            description: "Correlation between forecast and observed anomalies relative to climatology c; values above about 0.6 are often treated as useful."
          },
          {
            kind: "formula",
            title: "Continuous ranked probability score",
            expression: "\\mathrm{CRPS} = \\int_{-\\infty}^{\\infty}\\left(F(x) - \\mathbf{1}\\{x \\ge o\\}\\right)^2 dx",
            description: "A distributional generalization of absolute error; it reduces to MAE for a deterministic forecast."
          },
          {
            kind: "formula",
            title: "Brier skill score",
            expression: "\\mathrm{BSS} = 1 - \\frac{BS}{BS_{ref}}",
            description: "Brier score expressed as skill against a reference such as climatology, so positive means better than the baseline."
          },
          {
            kind: "formula",
            title: "Brier score decomposition",
            expression: "BS = \\mathrm{REL} - \\mathrm{RES} + \\mathrm{UNC}",
            description: "The Brier score splits into reliability, resolution, and an irreducible uncertainty term that depends only on the event base rate."
          },
          {
            kind: "table",
            title: "Verification table",
            columns: ["Metric", "Best for"],
            rows: [
              ["MAE", "Average absolute error."],
              ["RMSE", "Penalizing large misses."],
              ["Bias", "Detecting systematic over- or under-forecasting."],
              ["Brier Score", "Binary probability forecasts."],
              ["Brier Skill Score", "Probability skill against a baseline."],
              ["ACC", "Large-scale pattern skill versus climatology."],
              ["Reliability curve", "Probability calibration."],
              ["ROC-AUC", "Event discrimination."],
              ["CRPS", "Full probabilistic distributions."]
            ]
          }
        ]
      }
    ]
  },
  {
    slug: "weather-data-pipeline",
    title: "Weather Data Pipeline",
    shortTitle: "Data Pipeline",
    description: "A production-oriented pipeline for ingesting official forecasts, markets, signals, and verification data.",
    group: "Platform Architecture",
    keywords: ["weather data pipeline", "forecast database", "database schema", "forecast ingestion", "market signals"],
    references: ["open-meteo", "ncei-gfs", "polymarket-api", "kalshi-api"],
    sections: [
      {
        title: "Recommended Pipeline",
        blocks: [
          {
            kind: "lead",
            text: "A production weather AI system should treat forecasts as structured time-series data. Collection, normalization, storage, signal computation, verification, and presentation should be separate layers."
          },
          {
            kind: "diagram",
            title: "Forecast data pipeline",
            description: "A clean pipeline keeps provider details out of UI components and makes source freshness auditable.",
            variant: "forecast-pipeline"
          },
          {
            kind: "flow",
            steps: [
              "Official model APIs and public provider feeds",
              "Scheduled ingestion jobs",
              "Raw forecast archival and source provenance",
              "Normalization and schema validation",
              "Location and market-event mapping",
              "Model comparison and probability extraction",
              "Verification against observations and resolved events",
              "Signal generation and API publication",
              "Frontend visualization on the map and docs surfaces"
            ]
          },
          {
            kind: "table",
            title: "Required forecast metadata",
            columns: ["Field", "Example", "Purpose"],
            rows: [
              ["model", "gfs, ecmwf, icon, hrrr", "Identifies the forecast model family."],
              ["run_time", "2026-06-06T00:00:00Z", "Identifies the model cycle."],
              ["valid_time", "2026-06-07T12:00:00Z", "Identifies when the forecast applies."],
              ["lead_time_hours", "36", "Supports confidence decay and verification by horizon."],
              ["variable", "precipitation_probability", "Names the normalized weather variable."],
              ["value", "0.72", "Stores the normalized numeric forecast value."],
              ["unit", "probability", "Prevents unit mismatch."],
              ["lat, lon, city", "37.5665, 126.9780, Seoul", "Connects gridded model output to city display."],
              ["source", "official_api", "Preserves traceability and provider attribution."]
            ]
          }
        ]
      },
      {
        title: "Canonical Ingestion Contract",
        description: "The production app accepts normalized provider runs, not provider-specific browser payloads. Provider fetches can live in the hourly bot or in future server adapters, but the write path stays the same.",
        blocks: [
          {
            kind: "code",
            title: "ProviderAdapter",
            language: "ts",
            code: `export type ProviderAdapter = {
  id: string;
  type: "weather" | "market" | "observation";
  version: string;
  fetch: (input: AdapterInput) => Promise<RawProviderPayload>;
  normalize: (payload: RawProviderPayload) => Promise<NormalizedRecord[]>;
};`
          },
          {
            kind: "code",
            title: "Core TypeScript Records",
            language: "ts",
            code: `export type ForecastPointRecord = NormalizedForecastPointRecord;
export type MarketEventRecord = NormalizedMarketEventRecord;
export type SignalOutput = NormalizedSignalRecord;

export type NormalizedRecord =
  | NormalizedForecastRunRecord
  | ForecastPointRecord
  | MarketEventRecord
  | NormalizedMarketTimeseriesRecord
  | SignalOutput;

export type ProviderRunLog = {
  id?: string;
  providerId: string;
  providerType: "weather" | "market" | "observation";
  adapterVersion: string;
  idempotencyKey?: string | null;
  fetchedAt: string;
  staleAfter: string;
  status: "running" | "complete" | "stale" | "failed";
  recordsSeen: number;
  recordsInserted: number;
  recordsUpdated: number;
  error?: string | null;
  metadata: JsonRecord;
};`
          },
          {
            kind: "table",
            title: "Required request headers",
            columns: ["Header", "Required", "Notes"],
            rows: [
              ["Authorization", "Yes", "Must be `Bearer ${INGESTION_SECRET}`. The route returns 401 for missing or invalid bearer credentials."],
              ["Content-Type", "Yes", "Use `application/json`; invalid JSON returns a 400 error."],
              ["Idempotency-Key", "Optional", "Stable run key. The body `idempotencyKey` field wins when both are present."]
            ]
          },
          {
            kind: "code",
            title: "POST /api/ingest/run request body",
            language: "json",
            code: `{
  "providerId": "hourly-bot",
  "providerType": "weather",
  "adapterVersion": "normalized.v1",
  "idempotencyKey": "open-meteo-2026-06-06T00",
  "fetchedAt": "2026-06-06T00:12:00Z",
  "staleAfterMinutes": 180,
  "metadata": {
    "source": "operator-bot"
  },
  "records": [
    {
      "kind": "forecast_point",
      "citySlug": "seoul",
      "provider": "open-meteo",
      "model": "best_match",
      "runTime": "2026-06-06T00:00:00Z",
      "forecastTime": "2026-06-06T12:00:00Z",
      "variable": "precipitation_probability",
      "value": 0.72,
      "unit": "probability",
      "confidence": 0.8,
      "raw": {}
    }
  ]
}`
          },
          {
            kind: "code",
            title: "Example request",
            language: "bash",
            code: `curl -X POST https://your-app.example/api/ingest/run \\
  -H "Authorization: Bearer $INGESTION_SECRET" \\
  -H "Content-Type: application/json" \\
  -H "Idempotency-Key: open-meteo-2026-06-06T00" \\
  --data @payload.json`
          },
          {
            kind: "code",
            title: "Success response",
            language: "json",
            code: `{
  "data": {
    "idempotent": false,
    "providerRunLogId": "uuid",
    "ingestionRunId": "uuid",
    "status": "complete",
    "result": {
      "recordsSeen": 1,
      "forecastRunsUpserted": 0,
      "forecastPointsUpserted": 1,
      "marketEventsUpserted": 0,
      "marketTimeseriesUpserted": 0,
      "marketLinksUpserted": 0,
      "signalsInserted": 0
    }
  }
}`
          },
          {
            kind: "code",
            title: "Idempotent replay response",
            language: "json",
            code: `{
  "data": {
    "idempotent": true,
    "providerRunLogId": "uuid",
    "status": "complete",
    "result": {
      "recordsSeen": 1,
      "forecastPointsUpserted": 1
    }
  }
}`
          },
          {
            kind: "code",
            title: "Error response examples",
            language: "json",
            code: `// 400 invalid payload
{ "error": "Invalid ingestion run payload", "details": { "fieldErrors": {} } }

// 401 missing or invalid Authorization bearer token
{ "error": "Missing ingestion authorization" }

// 409 duplicate run still active
{
  "error": "Ingestion run is already in progress for this idempotency key",
  "details": { "providerRunLogId": "uuid" }
}

// 500 write failure
{ "error": "Ingestion run failed", "details": "database error message" }`
          },
          {
            kind: "table",
            title: "Run handling",
            columns: ["Concern", "Implementation"],
            rows: [
              ["Authentication", "All ingestion routes require Authorization: Bearer INGESTION_SECRET."],
              ["Idempotency", "The route accepts an Idempotency-Key header or body idempotencyKey and stores it with the provider run."],
              ["Provider execution log", "provider_run_logs records provider ID, type, adapter version, fetched time, stale threshold, status, counts, error, and metadata."],
              ["Stale data", "If fetchedAt plus staleAfterMinutes is already in the past, the write can complete but the run and affected signal state are marked stale."],
              ["Failure", "Fetch, normalization, or write exceptions mark provider_run_logs and ingestion_runs as failed with an operator-readable error."]
            ]
          },
          {
            kind: "table",
            title: "Validation rules",
            columns: ["Area", "Rule"],
            rows: [
              ["Provider", "`providerId` and `adapterVersion` are required strings; `providerType` must be weather, market, or observation."],
              ["Freshness", "`fetchedAt` must be ISO datetime when present; `staleAfterMinutes` must be a positive integer up to 14 days."],
              ["Forecast records", "`citySlug`, `provider`, `model`, `runTime`, `forecastTime`, `variable`, `value`, and `unit` are required."],
              ["Market records", "`provider`, `providerEventId`, and `title` are required; probability, bid, and ask must be decimals from 0 to 1 when present."],
              ["Signal records", "State must be aligned, watch, divergent, stale, unavailable, or high_uncertainty. Legacy statuses are accepted for compatibility and mapped before display."],
              ["Stale writes", "If the run is stale, `provider_run_logs.status` and affected signal `freshness_status`/`status` are written as stale."]
            ]
          },
          {
            kind: "callout",
            title: "Adapter boundary",
            text: "Provider-specific credentials and raw API quirks belong in provider adapters or the hourly bot. The application runtime stores normalized records and exposes canonical API output."
          }
        ]
      },
      {
        title: "Canonical Storage And Map Output",
        description: "The database schema stores normalized records, while the map API publishes forecast, market, and signal layers with confidence, freshness, probability-gap, and signal state fields.",
        blocks: [
          {
            kind: "table",
            title: "Normalized write targets",
            columns: ["Table", "Purpose"],
            rows: [
              ["provider_run_logs", "Audits provider adapter runs, idempotency keys, status, freshness, counts, errors, and metadata."],
              ["ingestion_runs", "Maintains compatibility run history for sync and ingestion operations."],
              ["cities", "Stores canonical city identity, coordinates, timezone, country metadata, and map importance."],
              ["forecast_runs", "Stores provider, model, run_time, source_url, status, and run metadata."],
              ["forecast_points", "Stores city-linked forecast variables by provider, model, run time, forecast time, value, unit, confidence, and raw audit data."],
              ["market_events", "Stores normalized Kalshi, Polymarket, or future market events with probabilities, bid/ask, liquidity, status, tags, city links, and resolution details."],
              ["market_timeseries", "Stores market probability snapshots keyed by market event and timestamp."],
              ["city_market_links", "Connects normalized market events to one or more cities."],
              ["combined_signals", "Stores model probability, market probability, disagreement, raw probability gap, confidence-adjusted gap, confidence, freshness status, signal state, and explanation."]
            ]
          },
          {
            kind: "code",
            title: "GET /api/map-layers",
            language: "json",
            code: `{
  "data": {
    "generatedAt": "2026-06-06T00:20:00Z",
    "city": {
      "slug": "seoul",
      "name": "Seoul",
      "lat": 37.5665,
      "lon": 126.978
    },
    "layers": {
      "forecast": { "type": "FeatureCollection", "features": [] },
      "markets": { "type": "FeatureCollection", "features": [] },
      "signals": { "type": "FeatureCollection", "features": [] }
    },
    "summary": {
      "forecastPoints": 0,
      "markets": 0,
      "signals": 0
    }
  },
  "demoMode": false
}`
          },
          {
            kind: "table",
            title: "Layer properties",
            columns: ["Layer", "Core properties"],
            rows: [
              ["Forecast", "provider, model, variable, value, unit, confidence, freshness, forecastTime, runTime."],
              ["Markets", "provider, providerEventId, title, probability, bid, ask, liquidity, volume, status, freshness."],
              ["Signals", "modelProbability, marketProbability, disagreement, rawEdge (raw probability gap), adjustedEdge (confidence-adjusted gap), confidence, freshness, state, explanation."]
            ]
          },
          {
            kind: "callout",
            title: "Operational rule",
            text: "Keep raw provider details out of UI components. The UI consumes normalized domain records through server loaders and the canonical map-layer route."
          }
        ]
      }
    ]
  },
  {
    slug: "prediction-market-weather-signals",
    title: "Prediction Market Weather Signals",
    shortTitle: "Prediction Markets",
    description: "How model probabilities can be compared with market-implied probabilities without presenting trading advice.",
    group: "Platform Architecture",
    keywords: ["prediction market weather", "market implied probability", "forecast probability gap", "weather signals", "Polymarket", "Kalshi"],
    references: ["polymarket-api", "kalshi-api", "wmo-verification"],
    sections: [
      {
        title: "Model-Market Comparison",
        blocks: [
          {
            kind: "lead",
            text: "Weather forecasts become useful for market intelligence when they are converted into probabilities and compared against market-implied probabilities. The useful product signal is the transparent explanation of disagreement, not a trade instruction."
          },
          {
            kind: "callout",
            title: "No trading advice",
            text: noAdviceText
          },
          {
            kind: "diagram",
            title: "Model-to-market signal flow",
            description: "A market signal should only exist after event mapping, forecast probability, market liquidity, and data freshness checks are complete.",
            variant: "model-market-signal-flow"
          },
          formulaBlock("market-implied-probability", {
            description: "For simple binary contracts, a normalized price from 0 to 1 can be used as a market-implied probability proxy before fees, spreads, and liquidity are considered."
          }),
          formulaBlock("raw-edge", {
            title: "Raw probability gap",
            description: "The raw edge is measured in probability points. A positive value means the forecast-model probability is higher than the market-implied probability."
          })
        ]
      },
      {
        title: "Risk-Adjusted Signals",
        blocks: [
          {
            kind: "diagram",
            title: "Forecast probability gap",
            description: "Confidence converts raw disagreement into a more conservative explanatory score.",
            variant: "forecast-edge"
          },
          formulaBlock("confidence-adjusted-edge", {
            title: "Confidence-adjusted gap",
            description: "C is a unitless confidence score from 0 to 1 based on forecast agreement, freshness, and verification context."
          }),
          formulaBlock("net-edge", {
            title: "Net diagnostic gap",
            description: "Fees, slippage, and risk buffer are probability-point penalties. This is a diagnostic framework, not a transaction instruction."
          }),
          formulaBlock("market-mid-probability", {
            description: "p_bid and p_ask are normalized bid and ask probabilities from 0 to 1. Using the mid probability reduces bias from a wide bid-ask spread."
          }),
          formulaBlock("calibration-log-loss", {
            description: "p_i is a forecast probability from 0 to 1, o_i is the resolved binary outcome, and N is the number of verified events."
          }),
          formulaBlock("signal-threshold", {
            description: "Thresholds should be conservative and depend on data quality, market liquidity, and verification history."
          }),
          formulaBlock("illustrative-kelly-fraction", {
            description: "Shown only to illustrate a theoretical relationship between model probability and price. It is not exposed in the primary UI and is not a recommendation."
          }),
          {
            kind: "table",
            title: "Variables, units, and assumptions",
            columns: ["Symbol", "Unit", "Meaning"],
            rows: [
              ["P_model", "0 to 1 probability", "Forecast-model event probability after event-window and city/station mapping."],
              ["P_market", "0 to 1 probability", "Market-implied probability from price or bid/ask midpoint."],
              ["G_raw", "Probability points", "Signed forecast-model minus market-implied probability gap."],
              ["G_adj", "Probability points", "G_raw multiplied by confidence C."],
              ["G_net", "Probability points", "G_adj after diagnostic penalties for fees, spread/slippage, and risk buffer."],
              ["C", "0 to 1 score", "Forecast confidence from agreement, freshness, and verification context."],
              ["p_i", "0 to 1 probability", "Forecast probability for verified event i."],
              ["o_i", "0 or 1", "Resolved outcome for verified event i."]
            ]
          },
          {
            kind: "table",
            title: "Signal states",
            columns: ["Signal", "Meaning"],
            rows: [
              ["Aligned", "Model probability and market probability are close."],
              ["Watch", "Small or moderate difference, or confidence is not strong enough."],
              ["Divergence", "Large model-market difference with acceptable confidence and data quality."],
              ["Stale", "Market or forecast data is too old to compare."],
              ["Unavailable", "Missing model, market, or mapping data."],
              ["High uncertainty", "Forecast uncertainty, definition risk, or liquidity risk is too high for strong divergence language."]
            ]
          }
        ]
      },
      {
        title: "Weather-Specific Market Risks",
        blocks: [
          {
            kind: "table",
            columns: ["Risk", "Description", "Mitigation"],
            rows: [
              ["Definition risk", "Market resolution criteria may differ from meteorological variables.", "Store event rule mappings and resolution source details."],
              ["Station risk", "The official weather station may not match citywide conditions.", "Map each event to the actual station or resolved source."],
              ["Timing risk", "The event window may not align with model time steps.", "Interpolate carefully and expose valid-time assumptions."],
              ["Revision risk", "Forecasts can shift sharply with new model runs.", "Use run-to-run volatility and freshness labels."],
              ["Liquidity risk", "Thin markets can distort implied probability.", "Check bid/ask spread, depth, volume, and stale snapshots."],
              ["Settlement risk", "Market rules may use a specific data source.", "Display the market provider and resolution method."]
            ]
          },
          {
            kind: "callout",
            title: "Required language",
            text: noAdviceText
          }
        ]
      }
    ]
  },
  {
    slug: "formulas",
    title: "Forecast Model Formula Reference",
    shortTitle: "Formula Reference",
    description: "A technical reference for atmospheric equations, numerical methods, data assimilation, ensembles, verification, and market-signal math.",
    group: "Platform Architecture",
    keywords: ["weather formulas", "atmospheric equations", "ensemble formulas", "verification metrics", "market gap formulas"],
    references: ["ncei-nwp", "ecmwf-ifs", "wmo-verification"],
    sections: [
      {
        title: formulaCategoryTitles["atmospheric-equations"],
        blocks: formulaBlocksByCategory("atmospheric-equations")
      },
      {
        title: formulaCategoryTitles["numerical-methods"],
        blocks: formulaBlocksByCategory("numerical-methods")
      },
      {
        title: formulaCategoryTitles["data-assimilation"],
        blocks: formulaBlocksByCategory("data-assimilation")
      },
      {
        title: formulaCategoryTitles.ensembles,
        blocks: formulaBlocksByCategory("ensembles")
      },
      {
        title: formulaCategoryTitles["verification-metrics"],
        blocks: formulaBlocksByCategory("verification-metrics")
      },
      {
        title: formulaCategoryTitles["market-gap-formulas"],
        blocks: [
          ...formulaBlocksByCategory("market-gap-formulas"),
          { kind: "callout", title: "Non-advice boundary", text: noAdviceText }
        ]
      }
    ]
  },
  {
    slug: "glossary",
    title: "Glossary",
    shortTitle: "Glossary",
    description: "Definitions for the weather, model, verification, and market terms used across the platform.",
    group: "Platform Architecture",
    keywords: ["weather AI glossary", "forecast terms", "NWP glossary", "market signal glossary"],
    references: ["ncei-nwp", "wmo-verification", "polymarket-api", "kalshi-api"],
    sections: [
      {
        title: "Core Terms",
        blocks: [
          {
            kind: "table",
            columns: ["Term", "Definition"],
            rows: [
              ["Analysis", "Best estimate of the current Earth-system state after data assimilation."],
              ["Background state", "Previous short-range forecast used as the starting estimate in data assimilation."],
              ["Bias", "Systematic model error."],
              ["Boundary condition", "External condition affecting the model, such as sea surface temperature or lateral input for regional models."],
              ["CFL condition", "Stability rule linking wave speed, grid spacing, and time step."],
              ["Confidence score", "Composite estimate of how reliable a forecast signal is."],
              ["Data assimilation", "Process of combining observations with model forecasts and error estimates."],
              ["Deterministic forecast", "A single forecast scenario."],
              ["Dynamical core", "The part of a weather model that solves atmospheric motion equations."],
              ["Ensemble", "Multiple related forecasts used to estimate uncertainty."],
              ["Ensemble mean", "Average of ensemble members."],
              ["Ensemble spread", "Measure of disagreement among ensemble members."],
              ["Forecast cycle", "One full run of a forecast system from data ingest to output."],
              ["Forecast lead time", "Time between model initialization and forecast valid time."],
              ["Forecast verification", "Comparing forecast output against observed truth."],
              ["GFS", "NOAA/NCEP Global Forecast System."],
              ["Grid spacing", "Distance between model grid points."],
              ["Initial condition", "Starting state of the atmosphere."],
              ["Market probability", "A probability proxy inferred from prediction-market prices."],
              ["Model-market gap", "Difference between model-estimated probability and market-implied probability."],
              ["NWP", "Numerical Weather Prediction."],
              ["Parameterization", "Approximation of sub-grid physical processes."],
              ["Physics scheme", "Model component representing radiation, clouds, turbulence, surface exchange, or other physical processes."],
              ["Post-processing", "Statistical or AI correction of raw model output."],
              ["Probability of precipitation", "Estimated chance of precipitation meeting a defined threshold."],
              ["Reanalysis", "Historical reconstruction of the atmosphere using models and observations."],
              ["Run-to-run volatility", "Change in forecast output between model cycles."],
              ["Skill score", "Relative performance compared with a baseline forecast."],
              ["Supercomputer", "High-performance computing system used to run operational models."],
              ["Verification metric", "Quantitative score used to evaluate forecast accuracy."]
            ]
          }
        ]
      }
    ]
  }
];

export const docGroups = [
  {
    title: "Weather Prediction",
    pages: docs.filter((page) => page.group === "Weather Prediction")
  },
  {
    title: "Platform Architecture",
    pages: docs.filter((page) => page.group === "Platform Architecture")
  }
];

export const docsBySlug = new Map(docs.map((page) => [page.slug, page]));

const englishDocsCopy: DocsCopy = {
  localeName: "English",
  metadata: {
    homeTitle: "RiWeather Docs | Forecast Market Map",
    homeDescription:
      "Professional documentation for weather-model pipelines, numerical forecasts, uncertainty, AI calibration, verification, and prediction-market weather signals.",
    homeOpenGraphDescription: "Technical documentation for weather AI, forecast models, verification, and market signal workflows.",
    notFoundTitle: "Docs | Forecast Market Map",
    pageTitleSuffix: "Forecast Market Map",
    pageOpenGraphSuffix: "RiWeather Docs",
    dataSourcesTitle: "Data Sources | Forecast Market Map",
    dataSourcesDescription:
      "RiWeather data-source transparency notes for forecast providers, market providers, managed storage, and ingestion jobs."
  },
  shell: {
    map: "Map",
    dataSources: "Data Sources",
    docsBadge: "RiWeather Docs",
    technicalReference: "Technical reference",
    forecastIntelligence: "Forecast intelligence",
    marketSignals: "Market signals",
    documentationMenu: "Documentation menu",
    docsHome: "Docs Home",
    referencesHeading: "Reference Sources",
    previous: "Previous",
    next: "Next",
    localeSwitcherLabel: "Documentation language",
    localeOptions: {
      en: "English",
      "zh-HK": "繁體中文（香港）"
    }
  },
  home: {
    title: "RiWeather Documentation",
    intro: docsIntro,
    technicalSummary,
    routesHeading: "Documentation Routes",
    diagramsHeading: "Reference Diagrams",
    diagrams: {
      "forecast-pipeline": {
        title: "Forecast pipeline",
        steps: [
          "Satellites / Radar / Stations / Balloons",
          "Observation quality control",
          "Data assimilation",
          "Analysis state",
          "Numerical model",
          "Supercomputer",
          "Forecast output",
          "AI post-processing",
          "Market signal"
        ]
      },
      "ensemble-probability": {
        title: "Ensemble probability",
        steps: ["50 ensemble members", "38 predict rain", "12 predict no rain", "Rain probability = 76%"]
      },
      "forecast-edge": {
        title: "Forecast probability gap",
        steps: ["Model probability: 72%", "Market probability: 58%", "Raw gap: +14 points", "Confidence: 0.65", "Adjusted gap: +9.1 points"]
      }
    }
  },
  groups: {
    "Weather Prediction": "Weather Prediction",
    "Platform Architecture": "Platform Architecture"
  },
  diagrams: {
    forecastPipeline: {
      steps: [
        { label: "Observations", detail: "Satellite, radar, stations, aircraft" },
        { label: "Quality control", detail: "Reject late, duplicated, or suspect records" },
        { label: "Assimilation", detail: "Blend observations with background state" },
        { label: "Model run", detail: "Integrate dynamics and physics forward" },
        { label: "Post-process", detail: "Calibrate probabilities and confidence" },
        { label: "Signals", detail: "Compare model output with market prices" }
      ]
    },
    ensembleProbability: {
      memberForecastsEvent: "Member forecasts event",
      memberDoesNotForecastEvent: "Member does not forecast event",
      caption: "Each tile is an ensemble member. Filled tiles satisfy the event rule after applying station, time-window, and threshold mapping.",
      eventProbability: "Event probability",
      countLabel: "29 / 40",
      description: "Probability is counted from members, then calibrated against verification history."
    },
    forecastEdge: {
      rows: [
        { label: "Model probability", value: 74, color: "bg-emerald-300" },
        { label: "Market probability", value: 59, color: "bg-cyan-300" },
        { label: "Confidence", value: 68, color: "bg-amber-300" }
      ],
      adjustedEdge: "Adjusted gap"
    },
    assimilationCycle: {
      nodes: ["Background forecast", "Observations", "Quality control", "Analysis state", "Forecast model", "Short-range forecast"],
      finalDetail: "Feeds the next cycle as the background state.",
      defaultDetail: "Passes constrained state information to the next step."
    },
    modelMarketSignal: {
      stages: [
        ["Forecast data", "Provider run, valid time, variable, units"],
        ["Event mapping", "Market rule, city, station, threshold, time window"],
        ["Probability", "Model probability plus confidence and quality flags"],
        ["Market data", "Best bid/ask, mid, liquidity, stale-data checks"],
        ["Combined signal", "Disagreement, adjusted gap, and explanatory status"]
      ]
    }
  },
  dataSources: {
    title: "Data Sources",
    intro:
      "This app is a data display and intelligence interface. Signals explain forecast-model disagreement, market-implied probability, data freshness, and uncertainty. They are for research only and are not trading advice.",
    transparencyHeading: "Transparency Notes",
    notes: [
      "Data can be delayed by provider update cadence, bot failures, database replication, or Vercel cache behavior.",
      "Forecast model output is probabilistic and can disagree across models or runs.",
      "Market data reflects traded prices and order books, not verified truth.",
      "Market access, display, and trading may be restricted by local laws or provider rules."
    ],
    sources: [
      {
        name: "managed Postgres",
        body: "Primary application database. The Vercel app reads normalized city, forecast, market, history, and combined-signal records from the live database."
      },
      {
        name: "Hourly agent bot",
        body: "External process owned by the operator. It fetches official/public APIs, normalizes records, and calls the secured ingestion routes with INGESTION_SECRET."
      },
      {
        name: "Forecast providers",
        body: "Supported adapter targets are Windy API, NOAA/NCEP NOMADS GFS, ECMWF Open Data, and Open-Meteo. Production ingestion should respect each provider's attribution and usage terms."
      },
      {
        name: "Prediction-market providers",
        body: "Supported adapter targets are Kalshi official API and Polymarket official APIs. Market availability and trading permissions may vary by jurisdiction."
      }
    ]
  }
};

const docsCopyByLocale: Record<DocsLocale, DocsCopy> = {
  en: englishDocsCopy,
  "zh-HK": zhHKDocsCopy
};

const docsByLocale = new Map<DocsLocale, DocPage[]>([["en", docs]]);

function mergeBlockTranslation(block: DocBlock, translation: DocBlockTranslation | undefined): DocBlock {
  switch (block.kind) {
    case "lead":
    case "paragraph":
      return { ...block, text: translation?.text ?? block.text };
    case "list":
      return { ...block, title: translation?.title ?? block.title, items: translation?.items ?? block.items };
    case "flow":
      return { ...block, title: translation?.title ?? block.title, steps: translation?.steps ?? block.steps };
    case "table":
      return { ...block, title: translation?.title ?? block.title, columns: translation?.columns ?? block.columns, rows: translation?.rows ?? block.rows };
    case "formula":
      return { ...block, title: translation?.title ?? block.title, description: translation?.description ?? block.description };
    case "callout":
      return { ...block, title: translation?.title ?? block.title, text: translation?.text ?? block.text };
    case "code":
      return { ...block, title: translation?.title ?? block.title };
    case "diagram":
      return { ...block, title: translation?.title ?? block.title, description: translation?.description ?? block.description };
  }
}

function mergeDocTranslation(page: DocPage, translation: DocPageTranslation | undefined): DocPage {
  if (!translation) {
    return page;
  }

  return {
    ...page,
    title: translation.title,
    shortTitle: translation.shortTitle,
    description: translation.description,
    keywords: translation.keywords,
    sections: page.sections.map((section, sectionIndex) => {
      const sectionTranslation = translation.sections[sectionIndex];

      return {
        ...section,
        title: sectionTranslation?.title ?? section.title,
        description: sectionTranslation?.description ?? section.description,
        blocks: section.blocks.map((block, blockIndex) => mergeBlockTranslation(block, sectionTranslation?.blocks[blockIndex]))
      };
    })
  };
}

function buildLocalizedDocs(locale: DocsLocale) {
  if (locale === "en") {
    return docs;
  }

  return docs.map((page) => mergeDocTranslation(page, zhHKDocTranslations.find((translation) => translation.slug === page.slug)));
}

export function normalizeDocsLocale(locale?: string | null): DocsLocale {
  return locale === "zh-HK" ? "zh-HK" : "en";
}

export function docsHref(locale: DocsLocale, slug?: string) {
  const base = locale === "zh-HK" ? "/zh-HK/docs" : "/docs";
  return slug ? `${base}/${slug}` : base;
}

export function docsDataSourcesHref(locale: DocsLocale) {
  return `${docsHref(locale)}/data-sources`;
}

export function getDocsAlternates(slug?: string) {
  return {
    en: docsHref("en", slug),
    "zh-HK": docsHref("zh-HK", slug),
    "x-default": docsHref("en", slug)
  };
}

export function getDocs(locale: DocsLocale = defaultDocsLocale) {
  if (!docsByLocale.has(locale)) {
    docsByLocale.set(locale, buildLocalizedDocs(locale));
  }

  return docsByLocale.get(locale) ?? docs;
}

export function getDocBySlug(locale: DocsLocale, slug: string) {
  return getDocs(locale).find((page) => page.slug === slug);
}

export function getDocGroups(locale: DocsLocale = defaultDocsLocale): DocsSidebarGroup[] {
  const localizedDocs = getDocs(locale);
  const copy = getDocsCopy(locale);

  return [
    {
      title: copy.groups["Weather Prediction"],
      pages: localizedDocs
        .filter((page) => page.group === "Weather Prediction")
        .map(({ slug, title, shortTitle, description }) => ({ slug, title, shortTitle, description }))
    },
    {
      title: copy.groups["Platform Architecture"],
      pages: localizedDocs
        .filter((page) => page.group === "Platform Architecture")
        .map(({ slug, title, shortTitle, description }) => ({ slug, title, shortTitle, description }))
    }
  ];
}

export function getSourceLinks(locale: DocsLocale = defaultDocsLocale): Record<SourceId, SourceLink> {
  if (locale === "en") {
    return sourceLinks;
  }

  return Object.fromEntries(
    Object.entries(sourceLinks).map(([id, source]) => {
      const translation = zhHKSourceLinkTranslations[id as SourceId];
      return [id, { ...source, ...translation }];
    })
  ) as Record<SourceId, SourceLink>;
}

export function getDocsCopy(locale: DocsLocale = defaultDocsLocale) {
  return docsCopyByLocale[locale];
}

export function getAdjacentDocs(slug: string, locale: DocsLocale = defaultDocsLocale) {
  const localizedDocs = getDocs(locale);
  const index = localizedDocs.findIndex((page) => page.slug === slug);
  return {
    previous: index > 0 ? localizedDocs[index - 1] : null,
    next: index >= 0 && index < localizedDocs.length - 1 ? localizedDocs[index + 1] : null
  };
}
