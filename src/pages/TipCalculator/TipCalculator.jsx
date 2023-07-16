import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async"
import InputBill from "./Partials/InputBill";
import ResultDisplay from "./Partials/ResultDisplay";
import SelectPercentage from "./Partials/SelectPercentage";

const TipCalculator = () => {
    const [bill, setBill] = useState("");
    const [myPercentage, setMyPercentage] = useState("");
    const [friendsPercentage, setFriendsPercentage] = useState("");
    const [totalTip, setTotalTip] = useState(0);
    const [totalBill, setTotalBill] = useState(0);


    useEffect(() => {
        if((Number(bill) > 0) && (Number(friendsPercentage) >= 0 || Number(myPercentage) >= 0)) {
            const calculatedTip = (bill * (((friendsPercentage + myPercentage) / 2) / 100));
            setTotalTip(calculatedTip > 0 ? calculatedTip.toFixed(2) : calculatedTip);
            setTotalBill(bill + calculatedTip);
        } else if (Number(bill) === 0) {
            setTotalBill(0);
            setTotalTip(0);
        }
    }, [bill, myPercentage, friendsPercentage]);

    return (
        <>
            <Helmet>
                <title>Trip Calculator</title>
            </Helmet>

            <div className="w-full max-w-lg mx-auto bg-slate-200 px-8 pb-8 pt-4 rounded-lg">
                <div className="head text-center mb-3 p-1">
                    <h1 className="text-lg font-bold uppercase text-gray-500">Trip Calculator</h1>
                </div>
                <ResultDisplay
                    bill={bill}
                    totalBill={totalBill}
                    totalTip={totalTip}
                />
                <div className="inputs flex flex-col gap-4">
                    <div className="flex gap-4">
                        <InputBill
                            label={"Bill"}
                            set={setBill}
                            value={bill}
                        />
                    </div>
                    <div className="flex gap-4">
                        <SelectPercentage
                            label="Your satisfaction"
                            onSelect={setMyPercentage}
                            value={myPercentage}
                            bill={bill}
                        />
                        <SelectPercentage
                            label="Friend's satisfaction"
                            onSelect={setFriendsPercentage}
                            value={friendsPercentage}
                            bill={bill}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TipCalculator