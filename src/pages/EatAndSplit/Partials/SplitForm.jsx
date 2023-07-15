import { useState } from "react";

const SplitForm = ({calculateSplit, selectedFriend}) => {
    const [bill, setBill] = useState("");
    const [yourExpense, setYourExpense] = useState("");
    const [payer, setPayer] = useState("");
    const [friendExpense, setFriendExpense] = useState("");

    const handlePayerChange = (e) => {
        setPayer(e.target.value)
    }

    const handleBillChange = (e) => {
        let billValue = !!e.target.value ? Number(e.target.value) : 0;
        let yourExpenseValue = !!yourExpense ? Number(yourExpense) : 0;
        if(billValue >= 0) {
            setBill(billValue)
        }
        if ((billValue > 0) && (yourExpenseValue > 0) && (billValue >= yourExpenseValue)) {
            setFriendExpense(billValue - yourExpenseValue)
        }
    }

    const handleYourExpenseChange = (e) => {
        let yourExpenseValue = !!e.target.value ? Number(e.target.value) : 0;
        let billValue = !!bill ? Number(bill) : 0;
        if ((yourExpenseValue >= 0) && (yourExpenseValue <= billValue)) {
            setYourExpense(yourExpenseValue)
        }
        if (!!billValue && (yourExpenseValue >= 0) && (billValue >= yourExpenseValue)) {
            setFriendExpense(billValue - yourExpenseValue)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!!bill && !!payer && (yourExpense >= 0) && (friendExpense >= 0) && ((yourExpense > 0) || (friendExpense > 0))) {
            let balance = (payer === "friend")
                        ? selectedFriend.balance - (bill - friendExpense)
                        : selectedFriend.balance + (bill - yourExpense);

            calculateSplit(balance);
        }
    }

    // console.log(`bill, ${yourExpense}`);

    return (
        <>
            <div className="split w-full max-w-lg rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 py-4 px-10">
                <h3 className="uppercase text-2xl font-bold mb-8">Split a bill with {selectedFriend.name}</h3>
                <form className="split-form" onSubmit={handleSubmit}>
                    <div className="mb-10">
                        <div className="form-control grid grid-cols-3">
                            <label className="col-span-2 text-lg">💰 Bill value</label>
                            <input className="col-span-1 text-lg text-center" name="bill" type="text" onChange={handleBillChange} value={bill} />
                        </div>
                        <div className="form-control grid grid-cols-3">
                            <label className="col-span-2 text-lg">🤐 Your expense</label>
                            <input className="col-span-1 text-lg text-center" name="yourExpense" type="text" onChange={handleYourExpenseChange} value={yourExpense} />
                        </div>
                        <div className="form-control grid grid-cols-3">
                            <label className="col-span-2 text-lg">🤡 {selectedFriend.name}'s expense</label>
                            <input className="col-span-1 text-lg text-center" name="friendExpense" type="text" disabled value={friendExpense} />
                        </div>
                        <div className="form-control grid grid-cols-3">
                            <label className="col-span-2 text-lg">🤑 Who is paying the bill</label>
                            <select className="col-span-1 text-lg" name="payer" onChange={handlePayerChange} value={payer}>
                                <option className="hidden" value="" disabled>Select</option>
                                <option value="you">You</option>
                                {
                                    !!selectedFriend &&
                                    <option value="friend">{selectedFriend?.name}</option>
                                }
                            </select>
                        </div>
                    </div>

                    <button className="block w-auto ml-auto py-2 px-10 uppercase font-medium text-sm text-center text-indigo-600 bg-white hover:bg-indigo-50 active:bg-indigo-100 ring ring-indigo-400 active:shadow-none rounded-lg shadow">
                        Split Bill
                    </button>
                </form>
            </div>
        </>
    )
}

export default SplitForm