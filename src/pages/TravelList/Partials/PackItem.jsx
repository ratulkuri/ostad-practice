import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";


const PackItem = ({item, changeStatus, deletItem}) => {

    const [isChecked, setIsChecked] = useState(false);

    const handleStatusChange = (e) => {
        let status = e.target.checked;
        setIsChecked(status);
        changeStatus(item, status);
    }

    useEffect(() => {
        setIsChecked(item.status);
    }, [item]);

    return (
        <>
            <tr className={`${isChecked ? "done" : ""} pack-item`}>
                <td className="p-2 whitespace-nowrap">
                    <label className="text-lg flex items-center justify-center cursor-pointer">
                        <input onChange={(e) => handleStatusChange(e)} type="checkbox" className="hidden h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" checked={isChecked} />
                        {isChecked ? <ImCheckboxChecked className="text-green-600" /> : <ImCheckboxUnchecked className="text-gray-400" />}
                    </label>
                </td>
                <td className="p-2">
                    <div className="text-left font-medium">{item.name}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-center font-medium text-green-600">{item.qty}</div>
                </td>
                <td className="p-2 whitespace-nowrap text-center">
                    <button onClick={() => deletItem(item.id)} className="text-2xl text-red-500"><MdDeleteForever /></button>
                </td>
            </tr>
        </>
    )
}

export default PackItem