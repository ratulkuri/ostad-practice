import { useEffect, useState } from "react";

const ExpandableText = ({
    children,
    minWord = 10,
    expanded = false,
    expandedButtonText = "Show Less",
    collapsedButtonText = "Show More",
    expandedButtonColor = "#ef4444",
    collapsedButtonColor = "#4f46e5",
}) => {
    const [content, setContent] = useState(children);
    const [isExpanded, setIsExpanded] = useState(expanded);

    // const handleExpand = () => {
    //     if(!isExpanded) {
    //         setContent((prevContent) => prevContent.split(" ").slice(0, minWord).join(" "))
    //         setIsExpanded(true);
    //     } else {
    //         setContent(children);
    //         setIsExpanded(false);
    //     }
    // }

    useEffect(() => {
        if(!isExpanded) {
            setContent((prevContent) => prevContent.split(" ").slice(0, minWord).join(" "))
        } else {
            setContent(children);
        }
    }, [children, isExpanded, minWord]);

    return (
        <>
            <div className="">
                {content}
                <span
                    className="cursor-pointer ml-2"
                    onClick={() => setIsExpanded((status) => !status)}
                    style={{ color: isExpanded ? expandedButtonColor : collapsedButtonColor }}
                >
                    {isExpanded ? expandedButtonText : `... ${collapsedButtonText}`}
                </span>
            </div>
        </>
    )
}

export default ExpandableText