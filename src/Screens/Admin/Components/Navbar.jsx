import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import user from "../../../Assets/Image/man.png";

function Navbar({ toggleSidebar }) {
    // State to track dark mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle dark mode
    const handleToggle = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    // Apply or remove 'dark' class on body when the state changes
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDarkMode]);

    const [toggleProfileMenu, setToggleProfileMenu] = useState(false);

    const profileMenuRef = useRef();
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!profileMenuRef?.current?.contains(event.target)) {
                setToggleProfileMenu(false)
            }
        }
        document.addEventListener("mousedown", handleOutsideClick)
    }, [profileMenuRef])

    return (
        <>
            {/* <!-- NAVBAR --> */}
            <nav>
                <i className='bx bx-menu bx-sm' onClick={toggleSidebar} ></i>

                <div className="profile-status" ref={profileMenuRef}>
                    {/* <input type="checkbox" className="checkbox" id="switch-mode" hidden checked={isDarkMode} onChange={handleToggle} />
                    <label className="swith-lm" for="switch-mode">
                        <i className="bx bxs-moon"></i>
                        <i className="bx bx-sun"></i>
                        <div className="ball"></div>
                    </label> */}
                    {/* <!-- Notification Bell --> */}
                    {/* <Link className="notification" id="notificationIcon">
                        <i className='bx bxs-bell bx-tada-hover' ></i>
                        <span className="num">8</span>
                    </Link> */}
                    {/* <div className="notification-menu" id="notificationMenu">
                        <ul>
                            <li>New message from John</li>
                            <li>Your order has been shipped</li>
                            <li>New comment on your post</li>
                            <li>Update available for your app</li>
                            <li>Reminder: Meeting at 3PM</li>
                        </ul>
                    </div> */}

                    <Link className="profile" id="profileIcon" onClick={() => {
                        setToggleProfileMenu(!toggleProfileMenu)
                    }}>
                        <img src={user} alt="Profile" />
                    </Link>
                    <div className={`profile-menu ${toggleProfileMenu ? "show" : ""}`} id="profileMenu" >
                        <ul>
                            <li><Link>My Profile</Link></li>
                            <li><Link>Settings</Link></li>
                            <li><Link>Log Out</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar