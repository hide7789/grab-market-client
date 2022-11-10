export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://grap-market-servers.herokuapp.com"
    : "http://localhost:8080";
