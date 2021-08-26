import React from 'react';
import ReactDOM from 'react-dom';
import { Nav } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Footer from './Footer';
import "./App.css";
import ReadMoreReact from 'read-more-react';
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>
class Home extends React.Component {
    render() {
        return (
        <div className=" background  ">
                <Sidebar />
                <div className="row ">
                    

                    <div className="col-sm-12 col-lg-9 cont " style={{display:"flex",flexDirection:"column"}}>
                        <p style={{color: "white",fontSize:"60px"}}>Hi,I'm</p>
                        <h1 style={{ fontSize: "50px", color: "white" }}><b>Syed Muhammad Talha</b></h1>
                        <p style={{ fontSize: "30px", color: "white" }}>Specialized in Front-End Development</p>
                    </div>
                   
                </div>
                 
            </div >
        );
    }
}
export default Home;