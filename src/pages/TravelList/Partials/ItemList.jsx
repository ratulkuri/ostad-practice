import { useEffect, useState } from "react";
import PackItem from "./PackItem"
import { RiCheckboxMultipleFill, RiCheckboxMultipleBlankLine } from "react-icons/ri";

const ItemList = ({items, toggleCheckAll, changeStatus, isCheckedAll, deletItem, clear}) => {
    const [packItems, setPackItems] = useState([])
    const [sortBy, setSortBy] = useState("input")

    const sort = (type) => {
        let sorted = items.slice(); // clone array

        if (type === "description") {
            sorted = sorted.sort((a, b) => {
                let x = a.name.toLowerCase();
                let y = b.name.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            })
        }
        if (type === "packed") {
            sorted = sorted.sort((a, b) => Number(a.status) - Number(b.status))
        }

        setSortBy(type);
        setPackItems(sorted);
    }

    useEffect(() => {
        setPackItems(items)
    }, [items]);


    return (
        <>
            <section className="flex flex-col justify-center antialiased text-gray-600">
                <div className="h-full">
                    <div className="w-full bg-white shadow-lg rounded-sm border border-gray-200">
                        <header className="flex items-center justify-between flex-wrap gap-5 px-5 py-4 border-b border-gray-100">
                            <h2 className="text-lg uppercase font-semibold text-gray-800">Packing List</h2>
                            <div className="actions flex gap-3 items-center">
                                <select onChange={(e) => sort(e.target.value)} value={sortBy}>
                                    <option value="input">Sort by input order</option>
                                    <option value="description">Sort by description</option>
                                    <option value="packed">Sort by packed status</option>
                                </select>
                                {
                                    !!packItems && packItems?.length > 0 &&
                                    <button onClick={clear} className="block flex-shrink-0 px-3 py-1.5 text-white bg-red-500 hover:bg-red-600 active:bg-red-700 rounded-lg">Clear List</button>
                                }
                            </div>
                        </header>
                        <div className="p-3">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th className="p-2 whitespace-nowrap">
                                                {
                                                    items?.length > 0 &&
                                                    <div className="font-semibold flex items-center justify-center text-2xl ">
                                                        <label className="cursor-pointer" title="Check All">
                                                            <input type="checkbox" onChange={(e) => toggleCheckAll(e.target.checked)} className="hidden h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" checked={isCheckedAll} />
                                                            {isCheckedAll ? <RiCheckboxMultipleFill className="text-green-400" /> : <RiCheckboxMultipleBlankLine />}
                                                        </label>
                                                    </div>
                                                }
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Item</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-center">Quantity</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-center">Action</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">
                                        {
                                            !!packItems && packItems.length > 0 && packItems.map((item, index) => {
                                                return (
                                                    <PackItem key={`item-${index+1}-${item.status ? "checked" : ""}`} item={item} changeStatus={changeStatus} deletItem={deletItem} />
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ItemList