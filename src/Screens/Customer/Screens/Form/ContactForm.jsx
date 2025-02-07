import React from "react";
import Navbar from "../../CommonComponent/Navbar";
import Footer from "../../CommonComponent/Footer";

function ContactForm() {
    return (
        <>
            <Navbar />
            <div className="container contact py-5 d-flex justify-content-between">
                <form className="row g-3 d-flex justify-content-between " style={{ width: "98%" }}>
                    <div className="" style={{width:"40%"}}>
                        <div className="col-md-6 in mb-3">
                            <label className="">Name *</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-6 in  mb-3">
                            <label className="">Work Email *</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="col-md-6 in mb-3">
                            <label className="">Phone Number *</label>
                            <input type="tel" className="form-control" />
                        </div>
                        <div className="col-md-6 in mb-3">
                            <label className="">Timeline *</label>
                            <select className="form-select">
                                <option>Select timeline</option>
                                <option>1 Month</option>
                                <option>3 Months</option>
                            </select>
                        </div>
                    </div>
                    <div className="" style={{width:"40%"}}>
                        <div className="col-md-6 in  mb-3">
                            <label className="">Company *</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col-md-6 in  mb-3">
                            <label className="">What you are looking for? *</label>
                            <select className="form-select">
                                <option>Select an option</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                            </select>
                        </div>

                        <div className="col-md-6 in  mb-3">
                            <label className="">How did you hear about us? *</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-6 in  mb-3">
                            <label className="">Select Budget</label>
                            <select className="form-select">
                                <option>Select budget</option>
                                <option>$1000 - $5000</option>
                                <option>$5000 - $10000</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-12 in">
                        <label className="form-label">Description</label>
                        <input className="form-control" rows="3"></input>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Upload Files</label>
                        <input type="file" className="form-control" />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="billingType" defaultChecked />
                            <label className="form-check-label">Fixed</label>
                        </div>
                        <div className="form-check ms-3">
                            <input className="form-check-input" type="radio" name="billingType" />
                            <label className="form-check-label">Monthly</label>
                        </div>
                    </div>
                    <div className="col-md-12 d-flex justify-content-between align-items-center">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="recaptcha" />
                            <label className="form-check-label" htmlFor="recaptcha">I'm not a robot</label>
                        </div>
                        <button type="submit" className="btn px-4" style={{backgroundColor:" #f7931e"}}>SUBMIT</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}
export default ContactForm