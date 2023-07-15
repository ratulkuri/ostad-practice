const Friend = ({friend, selectFriend, selected}) => {

  return (
    <>
        <div className="friend flex items-center gap-4 sm:gap-8 pl-4 pr-4 py-2 bg-slate-100 rounded-lg mb-8">
            <div className="flex items-center gap-x-3">
                <img src={friend.image} className="w-12 h-12 rounded-full" />
                <div>
                    <span className="block text-gray-700 text-lg font-medium">{friend.name}</span>
                    {
                        friend.balance < 0 &&
                        <span className="inline-flex items-center font-medium text-red-500 text-sm">
                            {`You owe ${friend.name} BDT ${Math.abs(friend.balance)}`}
                        </span>
                    }
                    {
                        friend.balance > 0 &&
                        <span className="inline-flex items-center font-medium text-green-500 text-sm">
                            {`${friend.name} owe You BDT ${Math.abs(friend.balance)}`}
                        </span>
                    }
                    {
                        friend.balance === 0 &&
                        <span className="inline-flex items-center font-medium text-gray-700 text-sm">
                            {`You and ${friend.name} are even`}
                        </span>
                    }
                </div>
            </div>
            <button
                className="block w-auto ml-auto py-2 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow"
                onClick={() => selectFriend((oldSelected) => (oldSelected?.id !== friend?.id) ? friend : null)}
            >
                {(selected?.id === friend?.id) ? "Close" : "Choose"}
            </button>
        </div>
    </>
  )
}

export default Friend