import currencies from "../data/currencies"

export const getCurrencyInfo = (code) => {
    return currencies.find((item) => item.code === code);
}

export const stringLimit = (string = '', limit = 0) => {
    let text = string.length > limit ? `${string.substring(0, limit)}...` : string
    return text;
}