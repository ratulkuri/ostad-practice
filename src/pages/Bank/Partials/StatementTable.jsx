const StatementTable = ({statement}) => {

    return (
        <>
            {
                !!statement && statement?.length > 0 &&
                <section className="statement-table flex flex-col justify-center antialiased text-gray-600">
                    <div className="h-full">
                        <div className="w-full bg-white shadow-lg rounded-sm border border-gray-200">
                            <div className="p-3">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full">
                                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                            <tr>
                                                <th className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-left">Date</div>
                                                </th>
                                                <th className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-left">Description</div>
                                                </th>
                                                <th className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-center">Withdrawal</div>
                                                </th>
                                                <th className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-center">Deposit</div>
                                                </th>
                                                <th className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-center">Balance (BDT)</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm divide-y divide-gray-100">
                                            {
                                                statement.map((record, index) => {
                                                    return (
                                                        <tr key={`record-${index}`} className={`pack-item`}>
                                                            <td className="p-2">
                                                                <div className="text-left font-medium">{record.date}</div>
                                                            </td>
                                                            <td className="p-2 whitespace-nowrap">
                                                                <div className="text-left font-medium">
                                                                    <span className="text-green-600">
                                                                        { record.desc.charAt(0).toUpperCase() + record.desc.slice(1) }
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className="p-2 whitespace-nowrap text-center">
                                                                {
                                                                    ["withdraw", "pay loan"].includes(record.desc) && record.amount
                                                                }
                                                            </td>
                                                            <td className="p-2 whitespace-nowrap text-center">
                                                                {
                                                                    ["opening", "deposit", "take loan"].includes(record.desc)
                                                                    && record.amount
                                                                }
                                                            </td>
                                                            <td className="p-2 whitespace-nowrap text-center">
                                                                {record.balance}
                                                            </td>
                                                        </tr>
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
            }
        </>
    )
}

export default StatementTable