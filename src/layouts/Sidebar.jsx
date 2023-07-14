import useIsMobile from "../hooks/useIsMobile"
import { ImMenu3 } from "react-icons/im"
import { Link } from "react-router-dom";

const Sidebar = ({open}) => {
    const { isMobile } = useIsMobile();

    const links = [
        {
            label: "Accordion",
            icon: <ImMenu3 className="text-2xl" />,
            href: "/",
        }
    ]

    return (
        <>
            <div className={`${(!open || !isMobile) ? "invisible" : "visible"} overlay fixed left-0 right-0 top-0 bottom-0 bg-black bg-opacity-50 transition-all`}></div>
            <aside id="sidebar" className={`${(open && isMobile) ? "open" : ""} fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700`} aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        {
                            (links?.length > 0) && links.map((link, index) => {
                                return (
                                    <li key={`menu-${index+1}`}>
                                        {
                                            !!link.href ?
                                            <Link to={link?.href} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                {link?.icon}
                                                <span className="ml-3">{link?.label}</span>
                                            </Link>
                                            : <span className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                {link?.icon}
                                                <span className="ml-3">{link?.label}</span>
                                            </span>
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar