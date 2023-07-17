import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import AddItemForm from "./Partials/AddItemForm";
import ItemList from "./Partials/ItemList";
import Stats from "./Partials/Stats";

const TravelList = () => {
    const [items, setItems] = useState([]);
    const [isCheckedAll, setIsCheckedAll] = useState(false);

    const addItem = (item) => {
        setItems((prevItems) => [...prevItems, item])
    }

    const deletItem = (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this item?"
        );
        if (confirmed) setItems((prevItems) => prevItems.filter(item => item.id !== id))
    }

    function handleClearList() {
        const confirmed = window.confirm(
            "Are you sure you want to delete all items?"
        );

        if (confirmed) setItems([]);
    }

    const changeStatus = (item, status) => {
        setItems((prevItems) => {
            const items = prevItems.reduce((initialItems, currentItem) => {
                if (currentItem.id === item.id) {
                    currentItem.status = status;
                }
                return [...initialItems, currentItem];
            }, [])
            return items;
        })
    }

    const toggleCheckAll = (checked) => {
        setItems((prevItems) => {
            const items = prevItems.reduce((initialItems, currentItem) => {
                currentItem.status = checked;
                return [...initialItems, currentItem];
            }, [])
            return items;
        })
        setIsCheckedAll(!isCheckedAll);
    }

    useEffect(() => {
        if(!!items && items.length > 0)
            setIsCheckedAll(items.every(item => item.status === true));
    }, [items]);

    return (
        <>
            <Helmet>
                <title>Travel List</title>
            </Helmet>

            <div className="w-full py-10 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                <div className="text-center">
                    <h1 className="text-2xl sm:text-3xl font-bold uppercase space-x-2">What do you need for your 😍 trip?</h1>
                </div>
            </div>

            <div className="w-full max-w-3xl mx-auto bg-slate-50 my-6 p-4 sm:p-10 border">
                <AddItemForm addItem={addItem} />
            </div>

            {
                !!items && items?.length > 0 &&
                <div className="w-full max-w-3xl mx-auto pt-2 pb-2">
                    <ItemList
                        items={items}
                        toggleCheckAll={toggleCheckAll}
                        changeStatus={changeStatus}
                        isCheckedAll={isCheckedAll}
                        deletItem={deletItem}
                        clear={handleClearList}
                    />
                </div>
            }

            <Stats items={items} />
        </>
    )
}

export default TravelList