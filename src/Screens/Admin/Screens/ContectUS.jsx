import React, { useEffect, useRef, useState } from "react";
import Slider from "../Components/Slider";
import { Link } from "react-router-dom";
import user from "../../../Assets/Image/man.png"

function ContectUs() {

    const [selectedFilter, setSelectedFilter] = useState();
    const filterBy = [
        {
            id: "1",
            name: "All"
        },
        {
            id: "5",
            name: "A-Z"
        },
        {
            id: "2",
            name: "Z-A"
        },
        {
            id: "3",
            name: "Recent"
        },
        {
            id: "4",
            name: "Oldest"
        },
    ];
    const [toggleFilter, setToggleFilter] = useState(false);
    const toggleFilterRef = useRef();
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!toggleFilterRef?.current?.contains(event.target)) {
                setToggleFilter(false);
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
    }, [toggleFilterRef]);

    return (
        <>
            <main>
                <div className="head-title">
                    <div className="left">
                        <h1>Query List</h1>
                        {/* <ul className="breadcrumb">
                            <li>
                                <Link href="#">Dashboard</Link>
                            </li>
                            <li><i className='bx bx-chevron-right' ></i></li>
                            <li>
                                <Link className="active" href="#">Home</Link>
                            </li>
                        </ul> */}
                    </div>
                    {/* <Link href="#" className="btn-download">
                        <i className='bx bxs-cloud-download bx-fade-down-hover' ></i>
                        <span className="text">Get PDF</span>
                    </Link> */}
                </div>

                {/* <ul className="box-info">
                    <li>
                        <i className='bx bxs-calendar-check' ></i>
                        <span className="text">
                            <h3>1020</h3>
                            <p>New Order</p>
                        </span>
                    </li>
                    <li>
                        <i className='bx bxs-group' ></i>
                        <span className="text">
                            <h3>2834</h3>
                            <p>Visitors</p>
                        </span>
                    </li>
                    <li>
                        <i className='bx bxs-dollar-circle' ></i>
                        <span className="text">
                            <h3>N$2543.00</h3>
                            <p>Total Sales</p>
                        </span>
                    </li>
                </ul> */}


                <div className="table-data">
                    <div className="order">
                        <div className="head">
                            <h3>Recent Queries</h3>
                            <div className="search-input">
                                <input type="text" placeholder="search" />
                                <i className='bx bx-search' ></i>
                            </div>
                            <div className="query-filter" ref={toggleFilterRef}>
                                <i className='bx bx-filter' onClick={() => setToggleFilter(!toggleFilter)} ></i>
                                <div className={`filter-menu ${toggleFilter ? "show" : ""}`}>
                                    {
                                        filterBy.map((itm) => {
                                            return (
                                                <>
                                                    <label htmlFor={itm.id} key={itm.id}>
                                                        <input type="radio" value={itm.name} name="filters" id={itm.id} checked={selectedFilter === itm.name} onChange={(e) => { setSelectedFilter(e.target.value); setToggleFilter(false) }} />
                                                        {itm.name}
                                                    </label>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Inquirer</th>
                                    <th>Date</th>
                                    <th>Query</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: 10 }).map((_, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>
                                                    <img src={user} alt="img" />
                                                    {/* <i class='bx bxs-user'></i> */}
                                                    <p>Jhon Wick</p>
                                                </td>
                                                <td>18-10-2021</td>
                                                <td><span className="status completed">We are looking to develop a new e-commerce website. Can you provide details on your development process and pricing?</span></td>
                                            </tr>
                                        </>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                    {/* <div className="todo">
                        <div className="head">
                            <h3>Todos</h3>
                            <i className='bx bx-plus icon'></i>
                            <i className='bx bx-filter' ></i>

                        </div>
                        <ul className="todo-list">
                            <li className="completed">
                                <p>Check Inventory</p>
                                <i className='bx bx-dots-vertical-rounded' ></i>
                            </li>
                            <li className="completed">
                                <p>Manage Delivery Team</p>
                                <i className='bx bx-dots-vertical-rounded' ></i>
                            </li>
                            <li className="not-completed">
                                <p>Contact Selma: Confirm Delivery</p>
                                <i className='bx bx-dots-vertical-rounded' ></i>
                            </li>
                            <li className="completed">
                                <p>Update Shop Catalogue</p>
                                <i className='bx bx-dots-vertical-rounded' ></i>
                            </li>
                            <li className="not-completed">
                                <p>Count Profit Analytics</p>
                                <i className='bx bx-dots-vertical-rounded' ></i>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </main>
        </>
    )
}
export default ContectUs;