/* import PropTypes from 'prop-types'*/
import React, {Component} from 'react'
import logo from '../logo/Homelogo.png';
import {Link} from "react-router-dom";
export default class Navbar extends Component {
  constructor(props){
      super(props);
      this.state={
        value:""
      }
  }
  setKeywordValue = (event)=>{
      console.log("setKeyword onchange");
      this.setState({value:event.target.value});
  }
  getKeywordValue = ()=>{
    console.log("getKeyword onSubmit");
    //console.log("event: "+event.target.value);
    // this.setState({value: event.target.value});
    // const key=this.state.value;
    // console.log("key: "+key);
    this.props.getKeywordValue1(this.state.value);
    console.log("after");
  }
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#93cbcb"}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={logo} alt="Godi Media Logo" onClick={()=>{this.props.getCategoryValue("")}} style={{resizeMode: "contain",height:"30px",maxHeight:"100%"}}/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/" onClick={()=>{this.props.getCategoryValue("")}}>Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/general"  onClick={()=>{this.props.getCategoryValue("general")}}>General</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/entertainment" onClick={()=>{this.props.getCategoryValue("entertainment")}}>Entertainment</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/sports" onClick={()=>{this.props.getCategoryValue("sports")}}>Sports</Link>
                    </li>
                    {/* <li className="nav-item">
                    <Link className="nav-link" to="/">Politics</Link>
                    </li> */}
                    <li className="nav-item">
                    <Link className="nav-link" to="/business" onClick={()=>{this.props.getCategoryValue("business")}}>Bussiness</Link>
                    </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" rel='noref' to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Other Categories
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor:"#93cbcb"}}>
                        <li><Link className="dropdown-item" to="/health" onClick={()=>{this.props.getCategoryValue("health")}}>Health</Link></li>
                        <li><Link className="dropdown-item" to="/science" onClick={()=>{this.props.getCategoryValue("science")}}>Science</Link></li>
                        <li><Link className="dropdown-item" to="/technology" onClick={()=>{this.props.getCategoryValue("technology")}}>Technology</Link></li>
                    </ul>
                    </li>
                </ul>
                 <span className="d-flex"> 
                    <input className="form-control me-2" type="search" value={this.state.value} onChange={this.setKeywordValue} placeholder="Search by keywords" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="button" onClick={this.getKeywordValue}>Search</button>
                </span>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}
