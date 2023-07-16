const InputBill = ({label, value, set}) => {

    const handleBill = (e) => {
        const Value = !!e.target.value ? Number(e.target.value) : 0;
        if(Value >= 0 && Value !== Infinity && Math.abs(Value).toString().length <= 14) set(Value)
    }

    return (
        <>
            <div className="w-full">
                <label className="block text-sm font-medium mb-1">{label}</label>
                <input
                    className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                    type="text"
                    placeholder="How much was the bill?"
                    onChange={handleBill}
                    value={value}
                />
            </div>
        </>
    )
}

export default InputBill