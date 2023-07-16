import { useEffect, useState } from "react";

const ExpandableText = ({
    children,
    minWord = 10,
    expanded = false,
    expandedButtonText = "Show Less",
    collapsedButtonText = "Show More",
    expandedButtonColor = "#ef4444",
    collapsedButtonColor = "#4f46e5",
    textColor = "#000000",
    hideCollapse = false,
    className,
}) => {
    const [content, setContent] = useState(children);
    const [isExpanded, setIsExpanded] = useState(expanded);

    useEffect(() => {
        if(!isExpanded) {
            setContent((prevContent) => prevContent.split(" ").slice(0, minWord).join(" "))
        } else {
            setContent(children);
        }
    }, [children, isExpanded, minWord]);

    return (
        <>
            <div className={className}>
                <span style={{ color: textColor }}>
                    {content}
                </span>
                {
                    (!isExpanded || !hideCollapse) &&
                    <button
                        className="cursor-pointer font-medium ml-2"
                        onClick={() => setIsExpanded((status) => !status)}
                        style={{ color: isExpanded ? expandedButtonColor : collapsedButtonColor }}
                    >
                        {isExpanded ? expandedButtonText : `... ${collapsedButtonText}`}
                    </button>
                }
            </div>
        </>
    )
}

export default ExpandableText