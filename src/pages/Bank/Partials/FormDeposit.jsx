import { useState } from "react";

const FormDeposit = ({className = "", addBalance, toggleModal}) => {
    const [amount, setAmount] = useState("");

    const handleAmountChange = (e) => {
        let value = !!e.target.value ? Number(e.target.value) : 0;
        (value > 0) ? setAmount(value) : setAmount("")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!!amount) {
            addBalance(amount, "deposit");
            setAmount("");
            toggleModal();
        }
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className={`${className} space-y-5`}
            >
                <div>
                    <label className="font-medium">
                        Amount to deposit (BDT)
                    </label>
                    <input
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        type="text"
                        onChange={handleAmountChange}
                        value={amount}
                        // required
                    />
                </div>
                <button
                    className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg"
                >
                    Deposit
                </button>
            </form>
        </>
    )
}

export default FormDeposit