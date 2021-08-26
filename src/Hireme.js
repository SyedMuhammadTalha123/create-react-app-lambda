import React from 'react';
import { Row } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Footer from './Footer'
import ReadMoreReact from 'read-more-react';
import './App.css';
import Sidebar from './Sidebar';
class Hireme extends React.Component {
    render() {
        return (
            <div className="Container-fluid background"style={{ fontSize: "18px",display:"flex",flexWrap:"wrap" }}>
                <div className="row">
                    <div className="col-lg-3">
                        <Sidebar />
                    </div>
                    <div className="col-sm-12 col-lg-9 pl-sm-5 pl-lg-5 pl-xs-5 col-xs-11 pt-5 side">
                    <h2 className="pb-5 pl-3"><b>TECHNOLOGY BACKGROUND</b></h2>
                        <div className="li pl-3">
                            <div className="row pl-3">
                                <p><b>Languages:</b></p>
                                <p className="ml-4 pl-1">Javascript, Java, basics of .Net(MVC), Html5, Css3</p>
                            </div>
                            
                            <div className="row pl-3">
                                <p><b>Libraries:</b></p>
                                <p className="ml-5">  React.js,Redux,Ant-design, Bootstrap</p>
                            </div>

                            <div className="row pl-3">
                                <p><b>Databases:</b></p>
                                <p className="ml-4 pl-2">Mysql</p>
                            </div>
                            
                            <div className="row pl-3">
                                <p><b>Cloud:</b></p>
                                <p className="ml-5 pl-4">Heroku</p>
                            </div>
                            <div className="row pl-3">
                                <p><b>IDE:</b></p>
                                <p className="ml-5 pl-5">Visual Studio, Net Beans IDE , Sublime Text</p>
                            </div>
                            <div className="row pl-3">
                                <p><b>Office</b></p>
                                <p className="ml-5 pl-4">Proficient in MS Word,Power point & Excel</p>
                            </div>
                            <h2 className=" pl-3 mt-5 mb-5  "><b>JOURNEY UPTILL NOW</b></h2>
                        </div><br />
                    <div className="row mb-lg-5 margin-card">
                            <div className="col-lg-5 col-sm-12  ">
                                <div className="row-card ">
                                    <div className="column-card">
                                        <div className="card arrow-right " style={{ backgroundColor: "#161515",marginTop:"190px" }}>
                                            <p>Position  March 2021 → Present</p>
                                            <p><b>Trainee Consultant Front-End Developer</b></p>
                                            <p><b>Systems Limited</b></p>
                                            <div className="row">
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4 " style={{ width: "280px" }}>Dynamics 365 Commerce Architecture</span>
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4 " style={{ width: "150px" }}>D365 Site Builder</span>
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4 " style={{ width: "180px" }}>Customization withReact.js</span>

                                            </div>
                                            <div className="mt-3">
                                                <ReadMoreReact
                                                    text="Building stable and maintainable codebases using
                                                    react.js.Development of UI frameworks for web application.Collaborated closely with graphic designers to create
                                                    beautiful, functional interfaces.Development of Frontend architecture using Redux, components.Learned concepts of react.js ( Routing, props, state, JSX)"
                                                    min={50}
                                                    ideal={55}
                                                    max={60}
                                                    readMoreText={<button className="btn btn-secondary mt-3" style={{ backgroundColor: "grey" }}>ReadMore</button>} />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vl mr-5 ">
                                <img src="../images-removebg-preview.png" width="100px" className="mr-3 " height="90px" style={{ marginTop: "30px", position: "absolute", marginLeft: "-52px" }} />
                                <img src="../images-removebg-preview.png" width="100px" height="90px" style={{ marginTop: "320px", position: "absolute", marginLeft: "-52px" }} />
                              
                            </div>
                            
                            <div className="col-lg-5 mt-lg-5 col-sm-12 ml-lg-5">
                                <div className="row-card mt-lg-5">
                                    <div className="column-card mt-lg-5 mb-sm-5">
                                        <div className="card arrow-left" style={{ backgroundColor: "#161515",marginTop:"298px" }}>
                                            <p>Position  Feb 2021 → March 2021 (2.5 months)</p>
                                            <p><b>Front End developer (intern)</b></p>
                                            <p><b>Shopifyengineer (Pvt) Ltd.</b></p>
                                            <div className="row">
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4 " style={{ width: "80px" }}>Javascript</span>
                                                <span className="badge badge-secondary ml-sm-3 p-2 mt-4 " style={{ width: "80px" }}>React.js</span>
                                                <span className="badge badge-secondary ml-sm-3 p-2 mt-4 " style={{ width: "80px" }}>Redux</span>
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4 " style={{ width: "80px" }}>Ant Design</span>
                                                <span className="badge badge-secondary ml-sm-3 p-2 mt-4 " style={{ width: "80px" }}>Github</span>

                                            </div>
                                            <div className="mt-3">
                                                <ReadMoreReact
                                                    text="Building stable and maintainable codebases using
                                                    react.js.Development of UI frameworks for web application.Collaborated closely with graphic designers to create
                                                    beautiful, functional interfaces.Development of Frontend architecture using Redux, components.Learned concepts of react.js ( Routing, props, state, JSX)"
                                                    min={50}
                                                    ideal={55}
                                                    max={60}
                                                    readMoreText={<button className="btn btn-secondary mt-3" style={{ backgroundColor: "gray" }}>ReadMore</button>} />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row margin-card">
                            <div className="col-lg-5 ">
                                <div className="row-card">
                                    <div className="column-card">
                                        <div className="card  arrow-right " style={{ backgroundColor: "#161515", marginTop:"170px"}}>
                                            <p>Position  Nov 2020 → Jan 2021 (3 months)</p>
                                            <p><b>Creative Assistant</b></p>
                                            <p><b>Vintage Technologies (Pvt) Ltd</b></p>
                                            <div className="row">
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4 " style={{ width: "180px" }}>Research for creative Writing</span>
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4 " style={{ width: "120px" }}>Prepare content</span>
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4 " style={{ width: "150px" }}>Recommend new ideas</span>
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4 " style={{ width: "280px" }}>Developing strategies for various projects</span>
                                            </div>
                                            <div className="mt-3">
                                                <ReadMoreReact
                                                    text="Brainstorming along with storyboard team.Notifying the Creative Director of all daily operations.Suggestions changes/improvements to content.Gathering information and supporting materials"
                                                    min={50}
                                                    ideal={55}
                                                    max={60}
                                                    readMoreText={<button className="btn btn-secondary mt-3" style={{ backgroundColor: "gray" }}>ReadMore</button>} />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vl mr-5" style={{ height: "800px" }}>
                                <img src="../images-removebg-preview.png" width="120px" className="mr-3 mt-4" height="90px" style={{  position: "absolute", marginLeft: "-60px" }} />
                                <img src="../images-removebg-preview.png" width="120px" height="90px" style={{ marginTop: "200px", position: "absolute", marginLeft: "-60px" }} />
                                <img src="../download-removebg-preview.png" width="100px" height="90px" style={{ marginTop: "650px", position: "absolute", marginLeft: "-52px" }} />
                                
                            </div>
                            <div className="col-lg-5 mt-lg-5 col-sm-12 ml-lg-5 pt-5 ">
                                <div className="row-card mt-lg-5 ">
                                    <div className="column-card mt-5 pt-5 mt-lg-5 ">
                                        <div className="card mt-lg-5 arrow-left" style={{ backgroundColor: "#161515"}}>
                                            <p>Position  July 2019 → August 2019 (1 month)</p>
                                            <p><b>Web Developer (Intern)</b></p>
                                            <p>Broad Peak Technologies (SMC-Private)</p>
                                            <div className="row">
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4 " style={{ width: "80px" }}>.Net (MVC)</span>
                                                <span className="badge badge-secondary ml-sm-3 p-2 mt-4 " style={{ width: "80px" }}>Bootstrap4</span>
                                                <span className="badge badge-secondary ml-sm-3 p-2 mt-4 " style={{ width: "80px" }}>Css3</span>
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4" style={{ width: "80px" }}>Html5</span>

                                            </div>
                                            <div className="mt-3">
                                                <ReadMoreReact
                                                    text="Learn how to make a responsive & attractive designed
                                                    web application using HTML, CSS, BOOTSTRAP.Learn how to make a responsive & attractive designed
                                                    web application using HTML, CSS, BOOTSTRAP "
                                                    min={50}
                                                    ideal={55}
                                                    max={60}
                                                    readMoreText={<button className="btn btn-secondary mt-3" style={{ backgroundColor: "gray" }}>ReadMore</button>} />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 mt-lg-2">
                                <div className="row-card ">
                                    <div className="column-card ">
                                        <div className="card mb-lg-5 arrow-right " style={{ backgroundColor: "#161515",marginTop:"-140px" }}>
                                            <p>Education  2016 → 2020</p>
                                            <p><b>B.S. Software Engineering, Comsats universtity wah, campus</b></p>
                                            <div className="row">
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4 " style={{ width: "146px" }}>Data Structures</span>
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4 " style={{ width: "156px" }}></span>
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4 " style={{ width: "60px" }}>OOP</span>
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4 " style={{ width: "60px" }}>SRE</span>
                                                <span className="badge badge-secondary ml-sm-3 p-2 mt-4 " style={{ width: "60px" }}>SQA</span>
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4" style={{ width: "156px" }}>Web Development</span>
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4" style={{ width: "156px" }}>Software Engineering</span>
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4" style={{ width: "156px" }}>Computer Networks</span>
                                            </div>
                                            <div className="mt-3">
                                                <ReadMoreReact
                                                    text="Dean’s Honor Award

                                                    University of Oxford Summer School Selection
                                                    
                                                    Merit Scholarship Award "
                                                    min={50}
                                                    ideal={55}
                                                    max={60}
                                                    readMoreText={<button className="btn btn-secondary mt-3" style={{ backgroundColor: "gray" }}>ReadMore</button>} />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>  
                     

                </div>

            </div>
        );
    }
}
export default Hireme