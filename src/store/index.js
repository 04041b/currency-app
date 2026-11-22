import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import initState from "./initState";
import coinList from "./coins";

function loadState() {
  let saved = null;
  try {
    saved = JSON.parse(localStorage.getItem("state"));
  } catch (error) {
    saved = null;
  }
  const state = Object.assign({}, initState, saved || {});
  state.appSettings = Object.assign({}, initState.appSettings, state.appSettings);

  // Always use the bundled coin list, keeping any rates saved from earlier runs.
  const savedRates = {};
  (state.coins || []).forEach((coin) => {
    if (coin && Number(coin.rate) > 0) savedRates[coin.symbol] = coin.rate;
  });
  state.coins = coinList.map((coin) =>
    Object.assign({}, coin, { rate: savedRates[coin.symbol] || 1 })
  );
  state.enabledCoins = state.enabledCoins.filter((symbol) =>
    coinList.some((coin) => coin.symbol === symbol)
  );
  if (!state.enabledCoins.includes(state.activeCoin)) {
    state.activeCoin = state.enabledCoins[0] || "USD";
  }
  state.fromNumber = null;
  state.searchKeyword = "";
  return state;
}

Vue.use(Vuex);
const saveToLocalStorage = (store) => {
  localStorage.removeItem("isInitData");
  store.subscribe((mutation, state) => {
    if (mutation.type !== "changeState" || mutation.payload.key === "lastUpdateTime") {
      localStorage.setItem("state", JSON.stringify(state));
    }
  });
};

const store = new Vuex.Store({
  state: loadState(),
  getters,
  mutations,
  actions,
  plugins: [saveToLocalStorage],
});

export default store;
