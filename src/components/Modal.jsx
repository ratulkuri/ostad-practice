const Modal = ({children, className = "", title = "", open = false, showClose = true, toggleModal, onCancel, onOk }) => {

    const handleCancel = () => {
        if(typeof onCancel === "function") {
            onCancel();
        }
        toggleModal()
    }

    const handleOk = () => {
        if(typeof onOk === "function") {
            onOk();
        }
        toggleModal()
    }


    return (
        <>
            {
                <div className={`${className} ${open ? "open" : ""} modal z-10 overflow-y-auto`} aria-labelledby="Modal" role="dialog" aria-modal="true">
                    <div className="backdrop fixed inset-0 w-full h-full bg-black bg-opacity-40 transition-opacity" onClick={toggleModal}></div>
                    <div className="fixed inset-0 flex items-center h-screen overflow-y-auto px-4 py-8 z-50">
                        <div className="modal-wrap relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
                            {
                                !!title &&
                                <div className="modal-head flex items-center justify-between p-4 border-b">
                                    <h4 className="text-lg font-medium text-gray-800">
                                        {title}
                                    </h4>
                                    {
                                        showClose &&
                                        <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                                            onClick={toggleModal}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    }
                                </div>
                            }
                            <div className="space-y-2 p-4 mt-3 text-[15.5px] leading-relaxed text-gray-500">
                                {children}
                            </div>
                            {
                                (!!onOk || !!onCancel) &&
                                <div className="flex items-center gap-3 p-4 mt-5 border-t">
                                    {
                                        !!onOk &&
                                        <button className="px-6 py-2 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                                            onClick={handleOk}
                                        >
                                            Accept
                                        </button>
                                    }
                                    {
                                        !!onCancel &&
                                        <button className="px-6 py-2 text-gray-800 border rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                                            onClick={handleCancel}
                                        >
                                            Cancel
                                        </button>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Modal