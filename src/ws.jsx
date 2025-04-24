import { updatePrices } from "./store/cryptoSlice";

let intervalId = null;

export const startWebSocketSimulation = (store) => {
    if(!intervalId) {
        intervalId = setInterval(() => {
            store.dispatch(updatePrices());
        }, 1500)
    };
    return intervalId;
};

export const stopWebSocketSimulation = () => {
    clearInterval(intervalId);
    intervalId = null;
};

