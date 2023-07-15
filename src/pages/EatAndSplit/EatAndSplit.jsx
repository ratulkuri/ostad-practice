import { useState } from "react"
import { Helmet } from "react-helmet-async";
import AddFriendForm from "./Partials/AddFriendForm";
import FriendList from "./Partials/FriendList";
import SplitForm from "./Partials/SplitForm";

const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
];

const EatAndSplit = () => {
    const [friends, setFriends] = useState(initialFriends);
    const [selectedFriend, setSelectedFriend] = useState(null);
    const [showAddFriendForm, setShowAddFriendForm] = useState(false);

    const calculateSplit = (balance) => {
        setFriends((oldData) => {
            return oldData.reduce((newData, currentFreind) => {
                if(selectedFriend.id === currentFreind.id) {
                    currentFreind.balance = balance
                }
                newData.push(currentFreind)
                return newData;
            }, [])
        })
        setSelectedFriend(null);
    }

    const handleAddFriend = (newFriend) => {
        setFriends((oldFriends) => [...oldFriends, newFriend] )
    }

    const toggleAddFriendForm = (e) => {
        e.preventDefault();
        setShowAddFriendForm((show) => !show)
    }

    return (
        <>
            <Helmet>
                <title>Eat and Split</title>
            </Helmet>
            <div className="conainer max-w-7xl mx-auto">
                <div className="flex gap-10 w-full justify-center">
                    <div className="friend-list-wrap w-full max-w-md">
                        <FriendList friends={friends} selectFriend={setSelectedFriend} selected={selectedFriend} />
                        <div className="add-friend">
                            {
                                showAddFriendForm
                                ? <AddFriendForm handleAddFriend={handleAddFriend} cancel={toggleAddFriendForm} />
                                : <button
                                    className="block w-auto ml-auto py-2 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow"
                                    onClick={toggleAddFriendForm}
                                >
                                    Add Friend
                                </button>
                            }
                        </div>
                    </div>
                    {
                        !!selectedFriend && <SplitForm calculateSplit={calculateSplit} selectedFriend={selectedFriend} setSelectedFriend={setSelectedFriend} />
                    }
                </div>
            </div>
        </>
    )
}

export default EatAndSplit