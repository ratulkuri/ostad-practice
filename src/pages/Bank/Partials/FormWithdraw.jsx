import { useState } from "react";

const FormWithdraw = ({className = "", balance = 0,  withdraw, toggleModal}) => {
    const [amount, setAmount] = useState("");

    const handleAmountChange = (e) => {
        let value = !!e.target.value ? Number(e.target.value) : 0;
        (value >= 0 && value <= balance) && setAmount(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!!amount) {
            withdraw(amount, "withdraw");
            setAmount("");
            toggleModal();
        }
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className={`${className}`}
            >
                <div>
                    <label className="font-medium">
                        Amount to withdraw (BDT)
                    </label>
                    <input
                        className="w-full mt-2 mb-4 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        type="text"
                        onChange={handleAmountChange}
                        value={amount}
                        // required
                    />
                    <input id="amount" onChange={handleAmountChange} type="range" value={!!amount ? amount : 0} min={0} max={balance} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />

                </div>
                <div className="w-full flex justify-between gap-4 my-10">
                    <div className="flex flex-col">
                        <span className="uppercase text-sm font-medium">Current Balance</span>
                        <span className="text-lg text-green-500 font-medium">{balance} BDT</span>
                    </div>
                    <div className="flex flex-col text-right">
                        <span className="uppercase text-sm font-medium">Remaining Balance</span>
                        <span className="text-lg text-red-500 font-medium">{balance - amount} BDT</span>
                    </div>
                </div>
                <button
                    className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg"
                >
                    Withdraw
                </button>
            </form>
        </>
    )
}

export default FormWithdraw