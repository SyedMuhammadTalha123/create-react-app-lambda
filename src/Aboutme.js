import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Sidebar from './Sidebar';
import ReadMoreReact from 'read-more-react';
// import { Row } from 'react-bootstrap';

class Aboutme extends React.Component {

    render() {
        return (
            <div className="Container-fluid   background  ">
                <div className="row   ">
                    <div className="col-lg-3">
                        <Sidebar />
                    </div>

                    <div className=" col-sm-12 col-lg-9 pl-sm-5 pl-lg-5 pl-xs-5 pt-5 col-xs-11  side">
                        <div className="row">
                            <div className="col-sm-12 col-lg-5 mt-sm-2 col-md-6">

                                <img src="../talhasite-removebg-preview.png" width="430px" height="500px" />
                            </div>
                            <div className="col-sm-12 col-lg-5 mt-sm-2 col-md-6 ">
                                <h1>AboutMe</h1>
                                <p style={{ textAlign: "justify",color:"gray"}}>Hello! I'm S.m.Talha Front End Developer based in Islamabad Pakistan.
                                I describe myself as a developer who loves coding.
                                I have over 6 months of experience providing front-end development producing high-quality responsive websites and web applications.
                              High vitality, enthusiasm, and development are two or three things I bring to the table focusing on programming languages Object-Oriented Programming, React-js, Redux </p>

                                <p style={{ textAlign: "justify",color:"grey"}}>Now working in Systems Limited Islamabad as a Trainee Consultant front-end developer(Reactjs) I hold a BS in Software engineering from Comsats University Islamabad,Wah campus. When I'm not working I love to play cricket, experience new things. In my spare time I like to create new for my portfolio, which helps me to learn lot of new stuff, grow as a developer. I always enjoy a challenge and look for an opportunity to expand and develop my skill set Where I can contribute by applying my knowledge, also to acquire a unique position in any organization where chances of
                               advancement and learning are available.</p>
                               <button className="btn btn-secondary ml-5 mb-5">Download Resume</button>
                            </div>

                            
                        </div>
                    </div>

                </div>
            </div >
        );
    }
}
export default Aboutme