
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Sidebar from './Sidebar';
class Project extends React.Component {
    render() {
        return (
            <div className="Container-fluid background flex-container"style={{height:"1200px"}}>
                <div className="row">
                    <div className="col-lg-3">
                        <Sidebar />
                    </div>
                    <div className="col-sm-12 col-lg-9 pl-sm-5 pl-lg-5 pl-xs-5 col-xs-12 side " style={{ height: "1200px" }}>
                        <h2 className="pt-5 pl-3 mt-5 pl">Get in Touch</h2>
                        <div className="row">
                            <div className=" col-lg-12 col-sm-12 col-md-12 ml-4 mt-5 ">
                                <img src="../linkedin.svg"  className=" kl " width="40px" height="40px" /><a href="https://www.linkedin.com/in/syed-muhammad-talha-48189a1b6" className="ml-lg-5 pl-lg-5 Contact" style={{ textDecoration: "none" }}>https://www.linkedin.com/in/syed-muhammad-talha-48189a1b6</a><br />

                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-lg-12 col-sm-12 col-md-12 ml-4 mt-5 ">
                                <img src="../gmail.svg" className="mt-4 kl " width="40px" height="40px" /><a href="mailto:talhaayub009@gmail.com" className="ml-lg-5 pl-lg-5 Contact" style={{ textDecoration: "none" }}>talhaayub009@gmail.com</a><br />

                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-lg-12 col-sm-12 col-md-12 ml-4 mt-5 ">
                                <img src="../facebook.svg" className="mt-4 kl" width="40px" height="40px" /><a href="https://www.facebook.com/syedtalhaayub" className="ml-lg-5 pl-lg-5 Contact" style={{ textDecoration: "none" }}>https://www.facebook.com/syedtalhaayub</a><br />
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-lg-12 col-sm-12 col-md-12 ml-4 mt-5 ">
                                <img src="../download-removebg-preview.png" className="mt-4 kl" width="40px" height="40px" /><a href="https://web.whatsapp.com/" className="ml-lg-5 pl-lg-5 pl Contact" style={{ textDecoration: "none" }}>0312-5060398</a><br />
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-lg-12 col-sm-12 col-md-12 ml-4 mt-5 ">
                                <img src="../1200px-Instagram.svg-removebg-preview.png" className="mt-4 kl " width="40px" height="40px" /><a href="https://instagram.com/syedtalhaayub?utm_medium=copy_link" className="ml-lg-5 pl-lg-5 Contact" style={{ textDecoration: "none" }}>https://instagram.com/syedtalhaayub?utm_medium=copy_link</a><br />
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-lg-12 col-sm-12 col-md-12 ml-4 mt-5 ">
                            <img src="../free-mobile-phone-icon-760-thumb-removebg-preview.png" className="mt-4 kl " width="60px" height="40px" /><a href="https://instagram.com/syedtalhaayub?utm_medium=copy_link" className="ml-lg-4 pl pl-lg-5 Contact" style={{ textDecoration: "none" }}>0312-5060398</a><br />
                            </div>
                        </div>
                       

                    </div>
                </div>
            </div>


        );
    }
}
export default Project;