import axios from "axios";

// Free, key-less exchange rate API (https://github.com/fawazahmed0/exchange-api).
// Rates are expressed as "units of currency per 1 USD", covering fiat and crypto.
const RATE_SOURCES = [
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json",
  "https://latest.currency-api.pages.dev/v1/currencies/usd.min.json",
];

async function fetchUsdRates() {
  let lastError;
  for (const url of RATE_SOURCES) {
    try {
      const response = await axios.get(url, { timeout: 10000 });
      if (response.data && response.data.usd) return response.data.usd;
      lastError = new Error(`Unexpected response from ${url}`);
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
}

const actions = {
  async fetchRates(context) {
    try {
      const usdRates = await fetchUsdRates();
      const rates = {};
      Object.keys(usdRates).forEach((symbol) => {
        rates[symbol.toUpperCase()] = usdRates[symbol];
      });
      context.commit("updateRates", rates);
      context.commit("changeState", {
        key: "lastUpdateTime",
        value: new Date().getTime(),
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default actions;
