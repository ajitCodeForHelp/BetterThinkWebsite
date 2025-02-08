import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Slider({ isSidebarHidden }) {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const menuItems = [
        { icon: "bx-user-voice", text: "Query List", path: "/admin/query" },
        { icon: "bxs-message-dots", text: "Contect Us", path: "/admin/contectUs" },
        // { icon: "bxs-dashboard", text: "Contect Us" },
        { icon: "bxs-doughnut-chart", text: "Analytics"},
        { icon: "bxs-group", text: "Team" }
    ];

    return (
        <>
            <section id="sidebar" className={isSidebarHidden ? "hide" : "show"}>
                <Link className="brand">
                    <i className='bx bxs-smile  bx-lg'></i>
                    <span className="text">BTRTHINK</span>
                </Link>
                <ul className="side-menu top">
                    {menuItems.map((item, index) => (
                        <li key={index} className={isActive(item?.path) ? "active" : ""}>
                            <Link to={item.path}>
                                <i className={`bx ${item.icon} bx-sm`}></i>
                                <span className="text">{item.text}</span>
                            </Link>
                        </li>
                    ))}  
                </ul>
                <ul className="side-menu bottom">
                    <li>
                        <a href="#">
                            <i className='bx bxs-cog bx-sm bx-spin-hover' ></i>
                            <span className="text">Settings</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="logout">
                            <i className='bx bx-power-off bx-sm bx-burst-hover' ></i>
                            <span className="text">Logout</span>
                        </a>
                    </li>
                </ul>
            </section >
        </>
    )
}
export default Slider;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function Slider() {
//     const [isSidebarHidden, setIsSidebarHidden] = useState(window.innerWidth <= 576);
//     const [activeIndex, setActiveIndex] = useState(0);

//     useEffect(() => {
//         // Adjust sidebar visibility on load & resize
//         function adjustSidebar() {
//             setIsSidebarHidden(window.innerWidth <= 576);
//         }

//         window.addEventListener("resize", adjustSidebar);
//         return () => window.removeEventListener("resize", adjustSidebar);
//     }, []);

//     const toggleSidebar = () => {
//         setIsSidebarHidden((prev) => !prev);
//     };

//     const menuItems = [
//         { icon: "bxs-dashboard", text: "Dashboard" },
//         { icon: "bxs-shopping-bag-alt", text: "My Store" },
//         { icon: "bxs-doughnut-chart", text: "Analytics" },
//         { icon: "bxs-message-dots", text: "Message" },
//         { icon: "bxs-group", text: "Team" }
//     ];

//     return (
//         <>
//             {/* Sidebar */}
//             <section id="sidebar" className={isSidebarHidden ? "hide" : "show"}>
//                 <a href="#" className="brand">
//                     <i className='bx bxs-smile bx-lg'></i>
//                     <span className="text">AdminHub</span>
//                 </a>

//                 {/* Top menu */}
//                 <ul className="side-menu top">
//                     {menuItems.map((item, index) => (
//                         <li key={index} className={activeIndex === index ? "active" : ""}>
//                             <Link to="#" onClick={() => setActiveIndex(index)}>
//                                 <i className={`bx ${item.icon} bx-sm`}></i>
//                                 <span className="text">{item.text}</span>
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>

//                 {/* Bottom menu */}
//                 <ul className="side-menu bottom">
//                     <li>
//                         <Link to="#">
//                             <i className='bx bxs-cog bx-sm bx-spin-hover'></i>
//                             <span className="text">Settings</span>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="#" className="logout">
//                             <i className='bx bx-power-off bx-sm bx-burst-hover'></i>
//                             <span className="text">Logout</span>
//                         </Link>
//                     </li>
//                 </ul>
//             </section>

//             {/* Toggle Button */}
//             <nav>
//                 <i className="bx bx-menu" onClick={toggleSidebar}></i>
//             </nav>
//         </>
//     );
// }

// export default Slider;
