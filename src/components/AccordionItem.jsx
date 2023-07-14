import { FaPlus, FaMinus } from 'react-icons/fa';

const AccordionItem = ({className, serial, title, content, isOpen, toggle}) => {
  return (
    <>
        <div className={`${isOpen ? "open" : ""} ${className?.length > 0 ? className : ""} acordion-item rounded-lg shadow-lg mb-4 overflow-hidden`}>
            <div className="accordion-header cursor-pointer relative flex items-center gap-4 py-1.5 sm:py-4 pl-16 sm:pl-20 pr-10 sm:pr-16 bg-gradient-to-r from-cyan-500 to-blue-500" onClick={toggle}>
                <span className="serial absolute font-bold left-0 -top-2 sm:-top-4 text-white text-5xl sm:text-6xl opacity-20">{serial > 9 ? serial : `0${serial}`}</span>
                <h4 className="title text-white font-medium">{title}</h4>
                <div className="collapse-icon text-white absolute right-3 sm:right-6">
                    {
                        isOpen ? <FaMinus /> : <FaPlus />
                    }
                </div>
            </div>
            <div className={`content ease-in-out duration-300 content p-4`}>
                {content}
            </div>
        </div>
    </>
  )
}

export default AccordionItem