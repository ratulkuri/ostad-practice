import { useEffect, useState } from "react";

const Stats = ({items}) => {

    const [stat, setStat] = useState("");

    useEffect(() => {
        let totalCount = items?.length;
        let packedCount = items?.filter(item => item.status).length;
        let percentage = Math.round((packedCount / totalCount) * 100);

        if(!totalCount) {
            setStat("Start adding some items to your packing list 🚀")
        } else {
            percentage === 100
            ? setStat("You got everything! Ready to go ✈️")
            : setStat(`💼 You have ${totalCount} items on your list, and you already packed ${packedCount} (${percentage}%)`)

        }

    }, [items]);

  return (
    <>
        <div className="w-full max-w-3xl mx-auto rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 mt-6 p-10 border">
            <h6 className="text-center text-white text-lg font-medium">
                { stat }
            </h6>
        </div>
    </>
  )
}

export default Stats