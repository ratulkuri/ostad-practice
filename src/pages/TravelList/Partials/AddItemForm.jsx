import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const AddItemForm = ({addItem}) => {
    const [qty, setQty] = useState(1);
    const [name, setName] = useState("");

    const handleQtyChange = (e) => {
        let value = Number(e.target.value);
        if(value >= 1) setQty(value);
    }

    const handleNameChange = (e) => setName(e.target.value)

    const increaseQty = (e) => {
        e.preventDefault();
        setQty((prevQty) => prevQty + 1);
    }

    const decreaseQty = (e) => {
        e.preventDefault();
        setQty((prevQty) => prevQty > 1 ? prevQty - 1 : 1);
    }

    const handleAddItem = (e) => {
        e.preventDefault();
        if(!!name && !!qty) {
            let item = {
                name,
                qty,
                status: false,
                id: crypto.randomUUID()
            }
            setName("");
            setQty(1);
            addItem(item);
        }
    }

    return (
        <>
            <form onSubmit={handleAddItem}>
                <div className="flex flex-wrap gap-5 items-center w-full">

                    <span className="flex flex-grow flex-col sm:flex-row sm:items-center text-gray-500 gap-2">
                        <label className="whitespace-nowrap">Item :</label>
                        <div className="inline-flex flex-grow justify-center gap-2 ">
                            <input onChange={handleNameChange} className="bg-white border rounded px-3 py-1 w-full text-enter" type="text" value={name} />
                        </div>
                    </span>


                    <span className="inline-flex flex-shrink-0 items-center text-gray-500 gap-2">
                        <label>Qty :</label>
                        <div className="flex justify-center gap-2">
                            <button onClick={decreaseQty} className="decrease-qty bg-slate-100 border hover:bg-slate-200 px-2 py-1 rounded"><FaMinus /></button>
                            <input onChange={handleQtyChange} className="bg-white border rounded px-2 py-1 max-w-[80px] text-center" type="text" value={qty} />
                            <button onClick={increaseQty} className="increase-qty bg-slate-100 border hover:bg-slate-200 px-2 py-1 rounded"><FaPlus /></button>
                        </div>
                    </span>

                    <button className="ml-auto sm:ml-0 px-3 py-1.5 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg">Add Item</button>

                </div>
            </form>
        </>
    )
}

export default AddItemForm