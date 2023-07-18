import { useState } from "react";
import InputAmount from "./InputAmount"

const AccountOpenCard = ({name = "", setName, openAccount, min = 500}) => {
    const [openingAmmount, setOpeningAmmount] = useState("");

    const handleOpen = (e) => {
        e.preventDefault();
        if(openingAmmount >= min) {
            openAccount(openingAmmount)
        } else {
            alert(`Minimum ammount to open account is ${min}`)
        }
    }

    return (
        <>
            <div className="w-full max-w-md p-8 border border-gray-300 shadow-lg rounded-lg focus-within:shadow-sm bg-gradient-to-r from-cyan-500 to-blue-500">
                <h2 className="text-center text-white text-3xl font-black uppercase mb-2">Ethereal BANK</h2>
                <h6 className="text-center text-white text-md font-medium uppercase mb-10">open an account to start banking</h6>
                <form onSubmit={handleOpen}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="text-center text-xl text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 focus:outline-indigo-600 shadow-sm placeholder-gray-400 focus:ring-0 w-full mb-6 placeholder:text-lg"
                    />
                    <InputAmount
                        placeholder="Minimum amount 1000 BDT"
                        inputClassName="text-center text-xl focus:outline-indigo-600 placeholder:text-lg"
                        className="mb-6"
                        value={openingAmmount}
                        set={setOpeningAmmount}
                        min={0}
                    />
                    <button type="submit" className="block mx-auto text-center text-white uppercase bg-indigo-700 py-2 px-10 rounded-md">Open Account</button>
                </form>
            </div>
        </>
    )
}

export default AccountOpenCard