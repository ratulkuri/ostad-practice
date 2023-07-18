const InputAmount = ({className = "",inputClassName = "", label, placeholder = "", value, min = 0, set}) => {

    const handleBill = (e) => {
        const newValue = e.target.value;
        // const newValue = !!e.target.newValue ? Number(e.target.newValue) : 0;
        if(newValue >= min && newValue !== Infinity) set(newValue)
    }

    return (
        <>
            <div className={`${className} w-full`}>
                { !!label && <label className="block text-sm font-medium mb-1">{label}</label> }
                <input
                    className={`${inputClassName} text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full`}
                    type="text"
                    placeholder={placeholder}
                    onChange={handleBill}
                    value={value}
                />
            </div>
        </>
    )
}

export default InputAmount