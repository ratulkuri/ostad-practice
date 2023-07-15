import { useState } from "react"

const AddFriendForm = ({handleAddFriend, cancel}) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    const onSubmit = (e) => {
        e.preventDefault();
        let id = crypto.randomUUID();
        let newFriend = {
            id,
            name,
            image: `${image}?u=${id}`,
            balance: 0,
        }
        handleAddFriend(newFriend);
        cancel(e);
    }


    return (
        <>
            <div className="w-full rounded-lg bg-gradient-to-r from-cyan-200 to-blue-200 py-4 px-6 mb-4">
                <form onSubmit={onSubmit}>
                    <div className="mb-10">
                        <div className="form-control grid grid-cols-3">
                            <label className="col-span-1 text-sm">🤡 Friend Name</label>
                            <input className="col-span-2 text-sm text-center py-1" name="name" type="text" onChange={(e) => setName(e.target.value)} value={name} />
                        </div>
                        <div className="form-control grid grid-cols-3">
                            <label className="col-span-1 text-sm">🖼️ Image URL</label>
                            <input className="col-span-2 text-sm text-center py-1" name="image" type="text" onChange={(e) => setImage(e.target.value)} value={image} />
                        </div>
                    </div>
                    <div className="actions flex gap-4 items-center justify-end">
                        <button onClick={cancel} className="block w-auto py-2 px-4 uppercase font-medium text-xs text-center text-white bg-red-600 hover:bg-red-500 active:bg-red-700 ring ring-red-400 active:shadow-none rounded-lg shadow">
                            Cancel
                        </button>
                        <button type="submit" className="block w-auto py-2 px-10 uppercase font-medium text-xs text-center text-white bg-indigo-600 ring ring-indigo-400 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow">
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddFriendForm