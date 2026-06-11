/**
 * Canonical city catalog used to seed and reconcile the `cities` table during
 * real API sync. These are real-world facts (coordinates, timezone,
 * population, editorial importance score), not display data; row ids are
 * assigned by the database.
 */
export type CityCatalogEntry = {
  slug: string;
  name: string;
  country: string;
  countryCode: string;
  region: string;
  lat: number;
  lon: number;
  timezone: string;
  population: number;
  importanceScore: number;
};

const RAW_CATALOG = [
  ["new-york", "New York", "United States", "US", "North America", 40.7128, -74.006, "America/New_York", 18804000, 99],
  ["london", "London", "United Kingdom", "GB", "Europe", 51.5072, -0.1276, "Europe/London", 9558000, 98],
  ["tokyo", "Tokyo", "Japan", "JP", "Asia", 35.6762, 139.6503, "Asia/Tokyo", 37400068, 100],
  ["seoul", "Seoul", "South Korea", "KR", "Asia", 37.5665, 126.978, "Asia/Seoul", 9963000, 97],
  ["singapore", "Singapore", "Singapore", "SG", "Asia", 1.3521, 103.8198, "Asia/Singapore", 5637000, 96],
  ["paris", "Paris", "France", "FR", "Europe", 48.8566, 2.3522, "Europe/Paris", 11020000, 95],
  ["berlin", "Berlin", "Germany", "DE", "Europe", 52.52, 13.405, "Europe/Berlin", 3571000, 92],
  ["dubai", "Dubai", "United Arab Emirates", "AE", "Middle East", 25.2048, 55.2708, "Asia/Dubai", 3331000, 91],
  ["sydney", "Sydney", "Australia", "AU", "Oceania", -33.8688, 151.2093, "Australia/Sydney", 5312000, 93],
  ["hong-kong", "Hong Kong", "Hong Kong", "HK", "Asia", 22.3193, 114.1694, "Asia/Hong_Kong", 7497000, 94],
  ["los-angeles", "Los Angeles", "United States", "US", "North America", 34.0522, -118.2437, "America/Los_Angeles", 12488000, 93],
  ["chicago", "Chicago", "United States", "US", "North America", 41.8781, -87.6298, "America/Chicago", 8498000, 90],
  ["toronto", "Toronto", "Canada", "CA", "North America", 43.6532, -79.3832, "America/Toronto", 6313000, 90],
  ["mexico-city", "Mexico City", "Mexico", "MX", "North America", 19.4326, -99.1332, "America/Mexico_City", 21804000, 91],
  ["sao-paulo", "São Paulo", "Brazil", "BR", "South America", -23.5558, -46.6396, "America/Sao_Paulo", 22430000, 92],
  ["buenos-aires", "Buenos Aires", "Argentina", "AR", "South America", -34.6037, -58.3816, "America/Argentina/Buenos_Aires", 15625000, 88],
  ["cape-town", "Cape Town", "South Africa", "ZA", "Africa", -33.9249, 18.4241, "Africa/Johannesburg", 4778000, 84],
  ["mumbai", "Mumbai", "India", "IN", "Asia", 19.076, 72.8777, "Asia/Kolkata", 21297000, 94],
  ["delhi", "Delhi", "India", "IN", "Asia", 28.7041, 77.1025, "Asia/Kolkata", 32941000, 95],
  ["jakarta", "Jakarta", "Indonesia", "ID", "Asia", -6.2088, 106.8456, "Asia/Jakarta", 33756000, 93],
  ["shanghai", "Shanghai", "China", "CN", "Asia", 31.2304, 121.4737, "Asia/Shanghai", 29210000, 95],
  ["beijing", "Beijing", "China", "CN", "Asia", 39.9042, 116.4074, "Asia/Shanghai", 21893000, 94],
  ["moscow", "Moscow", "Russia", "RU", "Europe", 55.7558, 37.6173, "Europe/Moscow", 12680000, 89],
  ["istanbul", "Istanbul", "Turkey", "TR", "Europe/Asia", 41.0082, 28.9784, "Europe/Istanbul", 15656000, 90],
  ["lagos", "Lagos", "Nigeria", "NG", "Africa", 6.5244, 3.3792, "Africa/Lagos", 15388000, 88],
  ["nairobi", "Nairobi", "Kenya", "KE", "Africa", -1.2921, 36.8219, "Africa/Nairobi", 5545000, 84],
  ["cairo", "Cairo", "Egypt", "EG", "Africa", 30.0444, 31.2357, "Africa/Cairo", 22183000, 88],
  ["riyadh", "Riyadh", "Saudi Arabia", "SA", "Middle East", 24.7136, 46.6753, "Asia/Riyadh", 7682000, 86],
  ["madrid", "Madrid", "Spain", "ES", "Europe", 40.4168, -3.7038, "Europe/Madrid", 6751000, 87],
  ["rome", "Rome", "Italy", "IT", "Europe", 41.9028, 12.4964, "Europe/Rome", 4298000, 86]
] as const;

export const CITY_CATALOG: CityCatalogEntry[] = RAW_CATALOG.map((row) => ({
  slug: row[0],
  name: row[1],
  country: row[2],
  countryCode: row[3],
  region: row[4],
  lat: row[5],
  lon: row[6],
  timezone: row[7],
  population: row[8],
  importanceScore: row[9]
}));
