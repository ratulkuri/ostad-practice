import { getCurrencyInfo, stringLimit } from "../../../utils/Helper";

const CurrencyInput = ({ currencies, amount, currencySelected, setAmount, setCurrency }) => {

  const changeAmount = (e) => {
    const value = e.target.value;
    console.log("value =>", value);
    if (!isNaN(value) && value !== "") {
      setAmount(parseFloat(value));
    } else {
      setAmount("");
    }
  };

  const handleCurrencyChange = (e) => {
    const selected = e.target.value;
    if (currencySelected !== selected) {
      setCurrency(selected);
    }
  };

  return (
    <>
      <div className="relative flex mt-2 pr-2 text-gray-500 border-2 focus-within:border-indigo-600 shadow-sm rounded-lg">
        <span className="h-6 text-gray-400 absolute left-3 inset-y-0 my-auto">{getCurrencyInfo(currencySelected)?.symbol ?? currencySelected}</span>
        <input
          type="number"
          placeholder=""
          className="w-full flex-grow pl-12 pr-2 py-2 appearance-none bg-transparent outline-none no-input-appearance"
          onChange={changeAmount}
          value={amount}
        />
        <div className="relative flex-shrink-0 inset-y-0 max-w-[200px] flex items-center before:content-[''] before:w-[1px] before:h-1/2 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 pl-[1px] before:bg-gray-200">
          <select
            onChange={handleCurrencyChange}
            value={currencySelected}
            className="custom text-sm bg-transparent outline-none px-1 rounded-lg h-full tracking-tighter"
          >
            <option value="" disabled hidden>Select</option>
            {Object.keys(currencies).length > 0 &&
              Object.keys(currencies).map((key, index) => (
                <option key={`key-${index + 1}`} value={key} className="overflow-hidden">
                  {stringLimit((getCurrencyInfo(key)?.name ?? key), 20)}
                </option>
              ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default CurrencyInput