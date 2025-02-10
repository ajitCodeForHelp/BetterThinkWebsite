import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../CommonComponent/Navbar";
import Footer from "../../CommonComponent/Footer";

function ContactForm() {
    return (
        <>
            <Navbar />
            <div className="container contact-us py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card shadow p-4">
                            <h2 className="text-center mb-4 text-uppercase" style={{ color: "#f7931e" }}>Contact Us</h2>
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label">Name *</label>
                                    <input type="text" className="form-control" required />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Work Email *</label>
                                    <input type="email" className="form-control" required />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Phone Number *</label>
                                    <input type="tel" className="form-control" required />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Company *</label>
                                    <input type="text" className="form-control" required />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Timeline *</label>
                                    <select className="form-select">
                                        <option>Select timeline</option>
                                        <option>1 Month</option>
                                        <option>3 Months</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">What you are looking for? *</label>
                                    <select className="form-select">
                                        <option>Select an option</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">How did you hear about us? *</label>
                                    <input type="text" className="form-control" required />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Select Budget</label>
                                    <select className="form-select">
                                        <option>Select budget</option>
                                        <option>$1000 - $5000</option>
                                        <option>$5000 - $10000</option>
                                    </select>
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label">Description</label>
                                    <textarea className="form-control" rows="3"></textarea>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Upload Files</label>
                                    <input type="file" className="form-control" />
                                </div>
                                <div className="col-md-6 d-flex align-items-center mt-4">
                                    <div className="form-check me-3">
                                        <input className="form-check-input" type="radio" name="billingType" defaultChecked />
                                        <label className="form-check-label">Fixed</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="billingType" />
                                        <label className="form-check-label">Monthly</label>
                                    </div>
                                </div>
                                <div className="col-md-12 d-flex justify-content-between align-items-center mt-3">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="recaptcha" />
                                        <label className="form-check-label" htmlFor="recaptcha">I'm not a robot</label>
                                    </div>
                                    <button type="submit" className="btn px-4 text-white" style={{ backgroundColor: "#f7931e" }}>SUBMIT</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default ContactForm;
