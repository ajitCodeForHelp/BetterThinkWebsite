import React from "react";

function Message() {
    const isRight = false

    const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFC300", "#C70039", "#900C3F", "#581845"];

    return (
        <>
            <main>
                <div className="head-title">
                    <div className="left">
                        <h1>Messages</h1>
                        <p>Your communications hub</p>
                    </div>
                </div>
                <div className="table-data">
                    <div className="order">
                        <div className="head">
                            <h3>Recent Messages</h3>
                            <i className='bx bx-search' ></i>
                            <i className='bx bx-filter' ></i>
                        </div>

                        {Array.from({ length: 10 }).map((_, index) => {
                            return (
                                <>
                                    <div className="chatContainer">
                                        <div className="avatar" style={{ backgroundColor: colors[index % colors.length] }}>JW</div>
                                        <div className="message-left">
                                            <div className="messageContainer">
                                                <h3>John Wick</h3>
                                                <div className="timestamp">2 hours ago'</div>
                                            </div>
                                            <div className="message">
                                                <p>
                                                    Hey, I’ve completed the initial designs for the new project. Would love your feedback! Hey, I’ve completed the initial designs for the new project. Would love your feedback! Hey, I’ve completed the initial designs for the new project. Would love your feedback! Hey, I’ve completed the initial designs for the new project. Would love your feedback! Hey, I’ve completed the initial designs for the new project. Would love your feedback!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}

                    </div>
                </div>
            </main>

            {/* <div className="chatContainer">

                <div className="content">
                    <div className="header">
                        <span className="sender">John Wike</span>
                    </div>
                   
                    
                </div>
            </div> */}
            {/* </div > */}

        </>
    )
}
export default Message;