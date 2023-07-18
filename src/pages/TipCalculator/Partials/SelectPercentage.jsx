import { toast } from "react-toastify";

const SelectPercentage = ({bill, label, value, onSelect}) => {

    const handlePercentageChange = (e) => {
        if (!!bill) {
            const Value = !!e.target.value ? Number(e.target.value) : 0;
            if(value >= 0 && value !== Infinity && Math.abs(value).toString().length <= 14) onSelect(Value)
        } else {
            toast.error("Enter a bill first!")
        }
    }

    return (
        <>
            <div className="w-full">
                <label className="block text-sm font-medium mb-1">{label}</label>
                <select onChange={handlePercentageChange} value={value}>
                    <option value="" className="hidden" disabled>Select...</option>
                    <option value="0">Dissatisfied (0%)</option>
                    <option value="5">It was okay (5%)</option>
                    <option value="10">It was good (10%)</option>
                    <option value="20">Absolutely amazing! (20%)</option>
                </select>
            </div>
        </>
    )
}

export default SelectPercentage