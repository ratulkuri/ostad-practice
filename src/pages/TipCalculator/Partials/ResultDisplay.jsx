const ResultDisplay = ({bill, totalBill, totalTip}) => {
  return (
    <>

        <div className="result min-h-[112px] flex flex-col text-center bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-lg mb-6">
            <span className="font-calculator font-medium text-6xl">
                {bill} {!!totalTip && `+ ${totalTip} TIP`}
            </span>
            <span className="text-white tracking-[10px] uppercase font-semibold text-xl">
                {!!totalBill && `You pay $${totalBill}`}
            </span>
        </div>
    </>
  )
}

export default ResultDisplay