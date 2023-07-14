import { useState } from "react"
import AccordionItem from "./AccordionItem"

const Accordion = ({className, itemClass, data, collapsible = false}) => {
    const [openItems, setOpenItems] = useState([]);

    const toggleCollapse = (index) => {
        if(!openItems.includes(index)) {
            if(collapsible) {
                setOpenItems((openItems) => [...openItems, index]);
            } else {
                setOpenItems([index]);
            }
        } else {
            setOpenItems((openItems) => openItems.filter((item) => item !== index));
        }
    }

    return (
        <>
            <div className={`${className?.length > 0 ? className : ""} accordion-wrap`}>
                {
                    (data?.length > 0) && data.map((item, index) => {
                        return (
                            <AccordionItem
                                className={`${itemClass?.length > 0 ? itemClass : ""}`}
                                key={`item-${index + 1}`}
                                serial={index + 1}
                                title={item.title}
                                content={item.text}
                                isOpen={openItems.includes(index)}
                                toggle={() => toggleCollapse(index)}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Accordion