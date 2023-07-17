import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async"
import axios from "axios";
import moment from "moment";
import CurrencyInput from "./Partials/CurrencyInput";
import { getCurrencyInfo } from "../../utils/Helper";

const CurrencyConverter = () => {
  const [amountFrom, setAmountFrom] = useState(1);
  const [amountTo, setAmountTo] = useState("");
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("BDT");
  const [currencyList, setCurrencyList] = useState({});
  const [lastUpdatedAt, setRatesDatetime] = useState("");
  useEffect(() => {
    try {
      let exchangeRates = JSON.parse(localStorage.getItem("exchange_rates"))

      // Fetch exchange rates from API or load from cache
      if(exchangeRates !== null && moment().diff(moment(Date.parse(exchangeRates.time_last_update_utc)), 'days') === 0) {
        setCurrencyList(exchangeRates.conversion_rates);
        setRatesDatetime(moment(Date.parse(exchangeRates.time_last_update_utc)).format("LLL"));
      } else {
        fetchExchangeRatesApi();
      }
    } catch (error) {
      fetchExchangeRatesApi();
    }

  }, []);


  useEffect(() => {
    if(Object.keys(currencyList).length > 0) {
      const convertedAmount = convertCurrency(amountFrom, currencyFrom, currencyTo);
      setAmountTo(convertedAmount);
    }
  }, [currencyList])


  // Fetch Api
  const fetchExchangeRatesApi = () => {
    axios
      .get("https://v6.exchangerate-api.com/v6/b3b49b50da71b41d3d330f23/latest/USD")
      .then((response) => {
        setCurrencyList(response.data.conversion_rates);
        setRatesDatetime(moment(Date.parse(response.data.time_last_update_utc)).format("LLL"))

        // cache data in localStorage to optimize api request
        if(window.localStorage) {
          localStorage.setItem("exchange_rates", JSON.stringify(response.data));
        }
      })
      .catch((error) => {
        console.error("Error fetching exchange rates:", error);
      });
  }


  // Conversion logic
  const convertCurrency = (amount, fromCurrency, toCurrency) => {
    const fromRate = currencyList[fromCurrency] || 1;
    const toRate = currencyList[toCurrency] || 1;
    const convertedAmount = (amount / fromRate) * toRate;
    if (convertedAmount === 0) {
      return "";
    }

    return convertedAmount.toFixed(4);
  };

  const handleAmountFromChange = (amount) => {
    setAmountFrom(amount);
    const convertedAmount = convertCurrency(amount, currencyFrom, currencyTo);
    setAmountTo(convertedAmount);
  };

  const handleAmountToChange = (amount) => {
    setAmountTo(amount);
    const convertedAmount = convertCurrency(amount, currencyTo, currencyFrom);
    setAmountFrom(convertedAmount);
  };


  const handleCurrencyFromChange = (selected) => {
    let convertTo = currencyTo;
    if(selected === currencyTo) {
      convertTo = currencyFrom;
      setCurrencyTo(convertTo);
    }
    setCurrencyFrom(selected);
    const convertedAmount = convertCurrency(amountFrom, selected, convertTo);
    setAmountTo(convertedAmount);
  };

  const handleCurrencyToChange = (selected) => {
    let convertTo = currencyFrom;
    if(selected === currencyFrom) {
      convertTo = currencyTo;
      setCurrencyFrom(convertTo);
    }
    setCurrencyTo(selected);
    const convertedAmount = convertCurrency(amountTo, selected, convertTo);
    setAmountFrom(convertedAmount);
  };

  return (
    <>
      <Helmet>
        <title>Currency Comverter</title>
      </Helmet>
      <div className="inner-h-full flex flex-col items-center justify-center gap-8">
        <div className="max-w-md mx-auto">
          <h1 className="flex flex-col text-center uppercase">
            <span className="text-xl sm:text-2xl text-gray-400 font-semibold">Google Style</span>
            <span className="text-2xl sm:text-3xl text-indigo-500 font-bold">Currency Converter</span>
          </h1>
        </div>
        <div className="shadow-lg max-w-md border rounded-md duration-300 hover:shadow-sm p-6 sm:p-10">
          <div className="display mb-3">
            <h2 className="flex flex-col gap-2 mb-4">
              <span className="font-medium text-gray-400">1 {getCurrencyInfo(currencyFrom)?.name ?? currencyFrom} equals</span>
              <span className="font-semibold text-xl sm:text-3xl line-clamp-1 tracking-tighter">{convertCurrency(1, currencyFrom, currencyTo)} {getCurrencyInfo(currencyTo)?.name ?? currencyTo}</span>
            </h2>
            <span className="datetime inline-block text-xs font-medium">{lastUpdatedAt}</span>
          </div>
          <CurrencyInput
            amount={amountFrom}
            currencySelected={currencyFrom}
            setAmount={handleAmountFromChange}
            setCurrency={handleCurrencyFromChange}
            currencies={currencyList}
          />
          <CurrencyInput
            amount={amountTo}
            currencySelected={currencyTo}
            setAmount={handleAmountToChange}
            setCurrency={handleCurrencyToChange}
            currencies={currencyList}
          />
        </div>
      </div>
    </>
  );
};

export default CurrencyConverter