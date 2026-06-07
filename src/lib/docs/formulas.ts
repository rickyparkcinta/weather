export type FormulaCategory =
  | "atmospheric-equations"
  | "numerical-methods"
  | "data-assimilation"
  | "ensembles"
  | "verification-metrics"
  | "market-gap-formulas";

export type FormulaVariable = Readonly<{
  symbol: string;
  label: string;
  unit?: string;
}>;

export type FormulaDefinition = Readonly<{
  id: string;
  title: string;
  latex: string;
  plainEnglish: string;
  variables: readonly FormulaVariable[];
  docsSlug: string;
  category: FormulaCategory;
}>;

export const formulaCategoryTitles: Record<FormulaCategory, string> = {
  "atmospheric-equations": "Atmospheric Equations",
  "numerical-methods": "Numerical Methods",
  "data-assimilation": "Data Assimilation",
  ensembles: "Ensembles",
  "verification-metrics": "Verification Metrics",
  "market-gap-formulas": "Market Gap Formulas"
};

export const formulaCategoryOrder = [
  "atmospheric-equations",
  "numerical-methods",
  "data-assimilation",
  "ensembles",
  "verification-metrics",
  "market-gap-formulas"
] as const satisfies readonly FormulaCategory[];

export const formulaRegistry = [
  {
    id: "equation-of-state",
    title: "Equation of state",
    latex: "p = \\rho R_d T",
    plainEnglish: "Pressure equals density times the dry-air gas constant times temperature.",
    variables: [
      { symbol: "p", label: "Pressure" },
      { symbol: "\\rho", label: "Air density" },
      { symbol: "R_d", label: "Dry-air gas constant" },
      { symbol: "T", label: "Temperature" }
    ],
    docsSlug: "formulas",
    category: "atmospheric-equations"
  },
  {
    id: "momentum",
    title: "Momentum",
    latex: "\\frac{D\\vec{V}}{Dt} = -\\frac{1}{\\rho}\\nabla p - 2\\vec{\\Omega} \\times \\vec{V} + \\vec{g} + \\vec{F}",
    plainEnglish: "Wind changes with pressure-gradient force, rotation, gravity, and friction or forcing terms.",
    variables: [
      { symbol: "\\vec{V}", label: "Wind vector" },
      { symbol: "\\rho", label: "Air density" },
      { symbol: "\\nabla p", label: "Pressure gradient" },
      { symbol: "\\vec{\\Omega}", label: "Earth rotation vector" },
      { symbol: "\\vec{g}", label: "Gravity" },
      { symbol: "\\vec{F}", label: "Friction or forcing" }
    ],
    docsSlug: "formulas",
    category: "atmospheric-equations"
  },
  {
    id: "mass-continuity",
    title: "Mass continuity",
    latex: "\\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot (\\rho \\vec{V}) = 0",
    plainEnglish: "Air mass is conserved as density changes and flow enters or leaves a volume.",
    variables: [
      { symbol: "\\rho", label: "Air density" },
      { symbol: "\\vec{V}", label: "Wind vector" }
    ],
    docsSlug: "formulas",
    category: "atmospheric-equations"
  },
  {
    id: "hydrostatic-balance",
    title: "Hydrostatic balance",
    latex: "\\frac{\\partial p}{\\partial z} = -\\rho g",
    plainEnglish: "Pressure decreases with height according to density and gravity.",
    variables: [
      { symbol: "p", label: "Pressure" },
      { symbol: "z", label: "Height" },
      { symbol: "\\rho", label: "Air density" },
      { symbol: "g", label: "Gravity" }
    ],
    docsSlug: "formulas",
    category: "atmospheric-equations"
  },
  {
    id: "thermodynamic-tendency",
    title: "Thermodynamic tendency",
    latex: "\\frac{DT}{Dt} = \\frac{Q}{c_p} - \\frac{\\omega}{\\rho c_p}",
    plainEnglish: "Temperature changes with heating, cooling, and vertical motion effects.",
    variables: [
      { symbol: "T", label: "Temperature" },
      { symbol: "Q", label: "Heating rate" },
      { symbol: "c_p", label: "Specific heat at constant pressure" },
      { symbol: "\\omega", label: "Vertical pressure velocity" },
      { symbol: "\\rho", label: "Air density" }
    ],
    docsSlug: "formulas",
    category: "atmospheric-equations"
  },
  {
    id: "moisture-tendency",
    title: "Moisture tendency",
    latex: "\\frac{Dq}{Dt} = E - C + S_q",
    plainEnglish: "Humidity changes with evaporation, condensation, and source or sink terms.",
    variables: [
      { symbol: "q", label: "Specific humidity" },
      { symbol: "E", label: "Evaporation" },
      { symbol: "C", label: "Condensation" },
      { symbol: "S_q", label: "Moisture source or sink" }
    ],
    docsSlug: "formulas",
    category: "atmospheric-equations"
  },
  {
    id: "potential-temperature",
    title: "Potential temperature",
    latex: "\\theta = T\\left(\\frac{p_0}{p}\\right)^{R_d/c_p}",
    plainEnglish: "Temperature adjusted to a reference pressure for comparing air parcels.",
    variables: [
      { symbol: "\\theta", label: "Potential temperature" },
      { symbol: "T", label: "Temperature" },
      { symbol: "p_0", label: "Reference pressure" },
      { symbol: "p", label: "Pressure" }
    ],
    docsSlug: "formulas",
    category: "atmospheric-equations"
  },
  {
    id: "clausius-clapeyron",
    title: "Clausius-Clapeyron",
    latex: "\\frac{d e_s}{dT} = \\frac{L_v\\, e_s}{R_v T^2}",
    plainEnglish: "Saturation vapor pressure rises nonlinearly as temperature increases.",
    variables: [
      { symbol: "e_s", label: "Saturation vapor pressure" },
      { symbol: "T", label: "Temperature" },
      { symbol: "L_v", label: "Latent heat of vaporization" },
      { symbol: "R_v", label: "Water-vapor gas constant" }
    ],
    docsSlug: "formulas",
    category: "atmospheric-equations"
  },
  {
    id: "geostrophic-balance",
    title: "Geostrophic balance",
    latex: "\\vec{V}_g = \\frac{1}{\\rho f}\\,\\hat{k} \\times \\nabla p",
    plainEnglish: "Geostrophic wind balances pressure-gradient and Coriolis forces.",
    variables: [
      { symbol: "\\vec{V}_g", label: "Geostrophic wind" },
      { symbol: "\\rho", label: "Air density" },
      { symbol: "f", label: "Coriolis parameter" },
      { symbol: "\\nabla p", label: "Pressure gradient" }
    ],
    docsSlug: "formulas",
    category: "atmospheric-equations"
  },
  {
    id: "forward-time-step",
    title: "Forward time step",
    latex: "X^{n+1} = X^n + \\Delta t F(X^n)",
    plainEnglish: "The next state is the current state plus a time-step tendency.",
    variables: [
      { symbol: "X", label: "Model state" },
      { symbol: "\\Delta t", label: "Time step" },
      { symbol: "F", label: "Tendency function" }
    ],
    docsSlug: "formulas",
    category: "numerical-methods"
  },
  {
    id: "leapfrog-scheme",
    title: "Leapfrog scheme",
    latex: "X^{n+1} = X^{n-1} + 2\\Delta t\\, F(X^n)",
    plainEnglish: "The next state advances from the previous state using the current tendency.",
    variables: [
      { symbol: "X", label: "Model state" },
      { symbol: "\\Delta t", label: "Time step" },
      { symbol: "F", label: "Tendency function" }
    ],
    docsSlug: "formulas",
    category: "numerical-methods"
  },
  {
    id: "advection",
    title: "Advection",
    latex: "\\frac{\\partial \\phi}{\\partial t} = -\\vec{V} \\cdot \\nabla \\phi + S_\\phi",
    plainEnglish: "A quantity changes as wind transports it and sources or sinks modify it.",
    variables: [
      { symbol: "\\phi", label: "Transported quantity" },
      { symbol: "\\vec{V}", label: "Wind vector" },
      { symbol: "S_\\phi", label: "Source or sink" }
    ],
    docsSlug: "formulas",
    category: "numerical-methods"
  },
  {
    id: "spatial-derivative",
    title: "Spatial derivative",
    latex: "\\frac{\\partial T}{\\partial x} \\approx \\frac{T_{i+1} - T_i}{\\Delta x}",
    plainEnglish: "A grid derivative is approximated by the difference between neighboring cells.",
    variables: [
      { symbol: "T", label: "Temperature or scalar" },
      { symbol: "x", label: "Horizontal coordinate" },
      { symbol: "\\Delta x", label: "Grid spacing" }
    ],
    docsSlug: "formulas",
    category: "numerical-methods"
  },
  {
    id: "cfl-condition",
    title: "CFL condition",
    latex: "\\frac{u\\Delta t}{\\Delta x} \\le 1",
    plainEnglish: "A stable time step keeps flow from crossing more than one grid cell per step.",
    variables: [
      { symbol: "u", label: "Wind speed" },
      { symbol: "\\Delta t", label: "Time step" },
      { symbol: "\\Delta x", label: "Grid spacing" }
    ],
    docsSlug: "formulas",
    category: "numerical-methods"
  },
  {
    id: "diffusive-stability",
    title: "Diffusive stability",
    latex: "\\frac{\\kappa\\,\\Delta t}{(\\Delta x)^2} \\le \\frac{1}{2}",
    plainEnglish: "Diffusion schemes stay stable when the time step is small enough for the grid spacing.",
    variables: [
      { symbol: "\\kappa", label: "Diffusivity" },
      { symbol: "\\Delta t", label: "Time step" },
      { symbol: "\\Delta x", label: "Grid spacing" }
    ],
    docsSlug: "formulas",
    category: "numerical-methods"
  },
  {
    id: "compute-scaling",
    title: "Compute scaling",
    latex: "Cost \\propto GridCells \\times VerticalLayers \\times TimeSteps \\times EnsembleMembers",
    plainEnglish: "Compute cost grows with grid size, vertical depth, forecast length, and ensemble size.",
    variables: [
      { symbol: "GridCells", label: "Horizontal grid cells" },
      { symbol: "VerticalLayers", label: "Vertical layers" },
      { symbol: "TimeSteps", label: "Forecast time steps" },
      { symbol: "EnsembleMembers", label: "Ensemble members" }
    ],
    docsSlug: "formulas",
    category: "numerical-methods"
  },
  {
    id: "variational-objective",
    title: "Variational objective",
    latex: "J(x) = (x - x_b)^T B^{-1}(x - x_b) + (y - H(x))^T R^{-1}(y - H(x))",
    plainEnglish: "Data assimilation balances closeness to the background state and closeness to observations.",
    variables: [
      { symbol: "J(x)", label: "Cost function" },
      { symbol: "x", label: "Analysis state" },
      { symbol: "x_b", label: "Background state" },
      { symbol: "B", label: "Background error covariance" },
      { symbol: "y", label: "Observations" },
      { symbol: "H", label: "Observation operator" },
      { symbol: "R", label: "Observation error covariance" }
    ],
    docsSlug: "formulas",
    category: "data-assimilation"
  },
  {
    id: "analysis-update",
    title: "Analysis update",
    latex: "x_a = x_b + K(y - Hx_b)",
    plainEnglish: "The analysis equals the background plus an observation-weighted correction.",
    variables: [
      { symbol: "x_a", label: "Analysis state" },
      { symbol: "x_b", label: "Background state" },
      { symbol: "K", label: "Kalman gain" },
      { symbol: "y - Hx_b", label: "Innovation" }
    ],
    docsSlug: "formulas",
    category: "data-assimilation"
  },
  {
    id: "kalman-gain",
    title: "Kalman gain",
    latex: "K = BH^T(HBH^T + R)^{-1}",
    plainEnglish: "The gain controls how much observations adjust the background state.",
    variables: [
      { symbol: "K", label: "Kalman gain" },
      { symbol: "B", label: "Background error covariance" },
      { symbol: "H", label: "Observation operator" },
      { symbol: "R", label: "Observation error covariance" }
    ],
    docsSlug: "formulas",
    category: "data-assimilation"
  },
  {
    id: "analysis-error-covariance",
    title: "Analysis error covariance",
    latex: "A = (I - KH)B",
    plainEnglish: "Analysis uncertainty is reduced from background uncertainty by assimilating observations.",
    variables: [
      { symbol: "A", label: "Analysis error covariance" },
      { symbol: "I", label: "Identity matrix" },
      { symbol: "K", label: "Kalman gain" },
      { symbol: "H", label: "Observation operator" },
      { symbol: "B", label: "Background error covariance" }
    ],
    docsSlug: "formulas",
    category: "data-assimilation"
  },
  {
    id: "four-d-var-cost",
    title: "4D-Var cost",
    latex: "J(x_0) = \\frac{1}{2}(x_0 - x_b)^T B^{-1}(x_0 - x_b) + \\frac{1}{2}\\sum_{k=0}^{K}(y_k - H_k(x_k))^T R_k^{-1}(y_k - H_k(x_k))",
    plainEnglish: "Four-dimensional variational assimilation fits a trajectory to observations across a time window.",
    variables: [
      { symbol: "x_0", label: "Initial state" },
      { symbol: "x_b", label: "Background state" },
      { symbol: "y_k", label: "Observation at time k" },
      { symbol: "H_k", label: "Observation operator at time k" },
      { symbol: "R_k", label: "Observation error covariance at time k" }
    ],
    docsSlug: "formulas",
    category: "data-assimilation"
  },
  {
    id: "ensemble-mean",
    title: "Ensemble mean",
    latex: "\\bar{x} = \\frac{1}{N}\\sum_{i=1}^{N}x_i",
    plainEnglish: "The ensemble mean averages all member forecasts.",
    variables: [
      { symbol: "\\bar{x}", label: "Ensemble mean" },
      { symbol: "N", label: "Number of members" },
      { symbol: "x_i", label: "Member forecast" }
    ],
    docsSlug: "formulas",
    category: "ensembles"
  },
  {
    id: "ensemble-spread",
    title: "Ensemble spread",
    latex: "\\sigma = \\sqrt{\\frac{1}{N-1}\\sum_{i=1}^{N}(x_i - \\bar{x})^2}",
    plainEnglish: "Spread measures how much ensemble members differ from the ensemble mean.",
    variables: [
      { symbol: "\\sigma", label: "Ensemble spread" },
      { symbol: "N", label: "Number of members" },
      { symbol: "x_i", label: "Member forecast" },
      { symbol: "\\bar{x}", label: "Ensemble mean" }
    ],
    docsSlug: "formulas",
    category: "ensembles"
  },
  {
    id: "event-probability",
    title: "Event probability",
    latex: "P(E) = \\frac{n_E}{N}",
    plainEnglish: "Event probability is the share of ensemble members that forecast the event.",
    variables: [
      { symbol: "P(E)", label: "Event probability" },
      { symbol: "n_E", label: "Members forecasting the event" },
      { symbol: "N", label: "Total ensemble members" }
    ],
    docsSlug: "formulas",
    category: "ensembles"
  },
  {
    id: "percentile-forecast",
    title: "Percentile forecast",
    latex: "Q_p = percentile(\\{x_1, x_2, ..., x_N\\}, p)",
    plainEnglish: "A percentile forecast reports the ensemble value at percentile p.",
    variables: [
      { symbol: "Q_p", label: "Percentile forecast" },
      { symbol: "x_i", label: "Member forecast" },
      { symbol: "p", label: "Percentile" }
    ],
    docsSlug: "formulas",
    category: "ensembles"
  },
  {
    id: "spread-skill",
    title: "Spread-skill",
    latex: "\\langle \\sigma^2 \\rangle \\approx \\langle (\\bar{x} - o)^2 \\rangle",
    plainEnglish: "A reliable ensemble has spread that roughly matches forecast error.",
    variables: [
      { symbol: "\\sigma", label: "Ensemble spread" },
      { symbol: "\\bar{x}", label: "Ensemble mean" },
      { symbol: "o", label: "Observation" }
    ],
    docsSlug: "formulas",
    category: "ensembles"
  },
  {
    id: "crps",
    title: "CRPS",
    latex: "\\mathrm{CRPS} = \\int_{-\\infty}^{\\infty}\\left(F(x) - \\mathbf{1}\\{x \\ge o\\}\\right)^2 dx",
    plainEnglish: "CRPS scores a full probabilistic distribution against an observed outcome.",
    variables: [
      { symbol: "F(x)", label: "Forecast distribution" },
      { symbol: "o", label: "Observation" }
    ],
    docsSlug: "formulas",
    category: "ensembles"
  },
  {
    id: "mae",
    title: "MAE",
    latex: "MAE = \\frac{1}{N}\\sum_{i=1}^{N}|f_i - o_i|",
    plainEnglish: "Mean absolute error averages absolute forecast errors.",
    variables: [
      { symbol: "N", label: "Number of forecasts" },
      { symbol: "f_i", label: "Forecast" },
      { symbol: "o_i", label: "Observation" }
    ],
    docsSlug: "formulas",
    category: "verification-metrics"
  },
  {
    id: "rmse",
    title: "RMSE",
    latex: "RMSE = \\sqrt{\\frac{1}{N}\\sum_{i=1}^{N}(f_i - o_i)^2}",
    plainEnglish: "Root mean square error penalizes larger errors more strongly than MAE.",
    variables: [
      { symbol: "N", label: "Number of forecasts" },
      { symbol: "f_i", label: "Forecast" },
      { symbol: "o_i", label: "Observation" }
    ],
    docsSlug: "formulas",
    category: "verification-metrics"
  },
  {
    id: "bias",
    title: "Bias",
    latex: "Bias = \\frac{1}{N}\\sum_{i=1}^{N}(f_i - o_i)",
    plainEnglish: "Bias measures the average signed forecast error.",
    variables: [
      { symbol: "N", label: "Number of forecasts" },
      { symbol: "f_i", label: "Forecast" },
      { symbol: "o_i", label: "Observation" }
    ],
    docsSlug: "formulas",
    category: "verification-metrics"
  },
  {
    id: "brier-score",
    title: "Brier Score",
    latex: "BS = \\frac{1}{N}\\sum_{i=1}^{N}(p_i - o_i)^2",
    plainEnglish: "Brier score measures squared error for binary probability forecasts; lower is better.",
    variables: [
      { symbol: "BS", label: "Brier score" },
      { symbol: "N", label: "Number of events" },
      { symbol: "p_i", label: "Forecast probability", unit: "0 to 1" },
      { symbol: "o_i", label: "Observed binary outcome", unit: "0 or 1" }
    ],
    docsSlug: "formulas",
    category: "verification-metrics"
  },
  {
    id: "brier-skill-score",
    title: "Brier Skill Score",
    latex: "\\mathrm{BSS} = 1 - \\frac{BS}{BS_{ref}}",
    plainEnglish: "Brier skill score compares Brier score to a reference baseline.",
    variables: [
      { symbol: "BSS", label: "Brier skill score" },
      { symbol: "BS", label: "Model Brier score" },
      { symbol: "BS_{ref}", label: "Reference Brier score" }
    ],
    docsSlug: "formulas",
    category: "verification-metrics"
  },
  {
    id: "acc",
    title: "ACC",
    latex: "\\mathrm{ACC} = \\frac{\\sum_i (f_i - c_i)(o_i - c_i)}{\\sqrt{\\sum_i (f_i - c_i)^2 \\, \\sum_i (o_i - c_i)^2}}",
    plainEnglish: "Anomaly correlation measures how well forecast anomalies match observed anomalies.",
    variables: [
      { symbol: "f_i", label: "Forecast" },
      { symbol: "o_i", label: "Observation" },
      { symbol: "c_i", label: "Climatology" }
    ],
    docsSlug: "formulas",
    category: "verification-metrics"
  },
  {
    id: "skill-score",
    title: "Skill Score",
    latex: "Skill = 1 - \\frac{Score_{model}}{Score_{reference}}",
    plainEnglish: "Skill score expresses model performance relative to a reference forecast.",
    variables: [
      { symbol: "Score_{model}", label: "Model score" },
      { symbol: "Score_{reference}", label: "Reference score" }
    ],
    docsSlug: "formulas",
    category: "verification-metrics"
  },
  {
    id: "market-implied-probability",
    title: "Market-implied probability",
    latex: "P_{market} \\approx Price",
    plainEnglish: "A normalized binary contract price can be used as a market-implied probability proxy before fee and spread diagnostics.",
    variables: [
      { symbol: "P_{market}", label: "Market-implied probability", unit: "0 to 1" },
      { symbol: "Price", label: "Normalized market price", unit: "0 to 1" }
    ],
    docsSlug: "formulas",
    category: "market-gap-formulas"
  },
  {
    id: "market-mid-probability",
    title: "Market mid probability",
    latex: "P_{market} = \\frac{p_{bid} + p_{ask}}{2}",
    plainEnglish: "Using the bid-ask midpoint can reduce bias from wide spreads.",
    variables: [
      { symbol: "p_{bid}", label: "Normalized bid probability", unit: "0 to 1" },
      { symbol: "p_{ask}", label: "Normalized ask probability", unit: "0 to 1" }
    ],
    docsSlug: "formulas",
    category: "market-gap-formulas"
  },
  {
    id: "raw-edge",
    title: "Raw edge",
    latex: "Edge = P_{model} - P_{market}",
    plainEnglish: "Raw edge is the signed difference between forecast-model probability and market-implied probability.",
    variables: [
      { symbol: "Edge", label: "Raw model-market probability difference", unit: "probability points" },
      { symbol: "P_{model}", label: "Forecast-model probability", unit: "0 to 1" },
      { symbol: "P_{market}", label: "Market-implied probability", unit: "0 to 1" }
    ],
    docsSlug: "formulas",
    category: "market-gap-formulas"
  },
  {
    id: "confidence-adjusted-edge",
    title: "Confidence-adjusted edge",
    latex: "AdjustedEdge = (P_{model} - P_{market})C",
    plainEnglish: "Adjusted edge multiplies the raw difference by a 0-to-1 confidence score.",
    variables: [
      { symbol: "AdjustedEdge", label: "Confidence-adjusted probability difference", unit: "probability points" },
      { symbol: "P_{model}", label: "Forecast-model probability", unit: "0 to 1" },
      { symbol: "P_{market}", label: "Market-implied probability", unit: "0 to 1" },
      { symbol: "C", label: "Confidence score", unit: "0 to 1" }
    ],
    docsSlug: "formulas",
    category: "market-gap-formulas"
  },
  {
    id: "net-edge",
    title: "Net edge",
    latex: "NetEdge = AdjustedEdge - Fees - Slippage - RiskBuffer",
    plainEnglish: "Net edge subtracts diagnostic penalties for fees, spread or slippage, and a risk buffer.",
    variables: [
      { symbol: "NetEdge", label: "Diagnostic net edge", unit: "probability points" },
      { symbol: "AdjustedEdge", label: "Confidence-adjusted edge", unit: "probability points" },
      { symbol: "Fees", label: "Fee penalty", unit: "probability points" },
      { symbol: "Slippage", label: "Spread or execution diagnostic penalty", unit: "probability points" },
      { symbol: "RiskBuffer", label: "Conservative uncertainty buffer", unit: "probability points" }
    ],
    docsSlug: "formulas",
    category: "market-gap-formulas"
  },
  {
    id: "confidence-score",
    title: "Confidence score",
    latex: "C = w_1 A_e + w_2 A_m + w_3 S_h - w_4 V - w_5 D",
    plainEnglish: "Confidence combines evidence agreement, market agreement, source health, volatility, and definition risk using explicit weights.",
    variables: [
      { symbol: "C", label: "Confidence score", unit: "0 to 1" },
      { symbol: "A_e", label: "Forecast evidence agreement" },
      { symbol: "A_m", label: "Market data agreement" },
      { symbol: "S_h", label: "Source health or freshness" },
      { symbol: "V", label: "Volatility penalty" },
      { symbol: "D", label: "Definition-risk penalty" },
      { symbol: "w_i", label: "Component weights" }
    ],
    docsSlug: "formulas",
    category: "market-gap-formulas"
  },
  {
    id: "calibration-log-loss",
    title: "Calibration log loss",
    latex: "L = -\\frac{1}{N}\\sum_{i=1}^{N}\\left[o_i \\ln p_i + (1 - o_i)\\ln(1 - p_i)\\right]",
    plainEnglish: "Log loss evaluates probabilistic forecasts and penalizes confident misses.",
    variables: [
      { symbol: "L", label: "Log loss" },
      { symbol: "N", label: "Number of events" },
      { symbol: "p_i", label: "Forecast probability", unit: "0 to 1" },
      { symbol: "o_i", label: "Observed binary outcome", unit: "0 or 1" }
    ],
    docsSlug: "formulas",
    category: "market-gap-formulas"
  },
  {
    id: "signal-threshold",
    title: "Signal threshold",
    latex: "\\left|NetEdge\\right| > Threshold",
    plainEnglish: "A signal threshold should be conservative and depend on data quality, market liquidity, and verification history.",
    variables: [
      { symbol: "NetEdge", label: "Diagnostic net edge", unit: "probability points" },
      { symbol: "Threshold", label: "Configured signal threshold", unit: "probability points" }
    ],
    docsSlug: "formulas",
    category: "market-gap-formulas"
  },
  {
    id: "illustrative-kelly-fraction",
    title: "Illustrative Kelly fraction",
    latex: "f^{*} = \\frac{P_{model} - P_{market}}{1 - P_{market}}",
    plainEnglish: "A theoretical relationship shown for reference only and not used as primary UI guidance.",
    variables: [
      { symbol: "f^{*}", label: "Theoretical Kelly fraction" },
      { symbol: "P_{model}", label: "Forecast-model probability", unit: "0 to 1" },
      { symbol: "P_{market}", label: "Market-implied probability", unit: "0 to 1" }
    ],
    docsSlug: "formulas",
    category: "market-gap-formulas"
  }
] as const satisfies readonly FormulaDefinition[];

export type FormulaId = (typeof formulaRegistry)[number]["id"];

export const signalCalculationFormulaIds = [
  "market-implied-probability",
  "raw-edge",
  "confidence-adjusted-edge",
  "confidence-score",
  "net-edge"
] as const satisfies readonly FormulaId[];

export function getFormulaById(id: FormulaId) {
  const formula = formulaRegistry.find((item) => item.id === id);
  if (!formula) {
    throw new Error(`Unknown formula id: ${id}`);
  }
  return formula;
}

export function getFormulasByCategory(category: FormulaCategory) {
  return formulaRegistry.filter((formula) => formula.category === category);
}
