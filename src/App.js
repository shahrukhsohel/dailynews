import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Body from './components/Body';
// import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      category:"",
      country:"",
      keyword:"",
      language:"en"
    }
  }
  getKeywordValue=(value)=>{
    console.log("App");
    console.log(value);
    this.setState({keyword:value});
  }
  getCategoryValue=(cat)=>{
    console.log(cat);
    this.setState({category:cat});
  }
  render() {
    console.log("keyword1"+this.state.category);
    if(this.state.category!==""){
    return (
      
      <BrowserRouter>
        <div>
          <Navbar getKeywordValue1={this.getKeywordValue} getCategoryValue={this.getCategoryValue}/>
          <Routes>
            <Route  path="/" element={ <Body key={this.state.category}  recordPerPage={6} category={this.state.category} 
                country = {this.state.country} keyword ={this.state.keyword} language={this.state.language}/>}/>
            
            <Route path={"/"+this.state.category} element={ <Body key={this.state.category} recordPerPage={6} category={this.state.category} 
                country = {this.state.country} keyword ={this.state.keyword} language={this.state.language}/>}/>
            
            <Route path={"/"+this.state.category} element={ <Body key={this.state.category} recordPerPage={6} category="entertainment" 
                country = {this.state.country} keyword ={this.state.keyword} language={this.state.language}/>}/>
            
            <Route path={"/"+this.state.category} element={ <Body key={this.state.category} recordPerPage={6} category={this.state.category} 
                country = {this.state.country} keyword ={this.state.keyword} language={this.state.language}/>}/>
            
            <Route path={"/"+this.state.category} element={ <Body key={this.state.category} recordPerPage={6} category={this.state.category} 
                country = {this.state.country} keyword ={this.state.keyword} language={this.state.language}/>}/>
            
            <Route path={"/"+this.state.category} element={ <Body key={this.state.category} recordPerPage={6} category={this.state.category} 
                country = {this.state.country} keyword ={this.state.keyword} language={this.state.language}/>}/>
            {/* <Body recordPerPage={6} category={this.state.category} country = {this.state.country} keyword ={this.state.keyword} language={this.state.language}/> */}
          </Routes>
        </div>
      </BrowserRouter>
    )
  }else {
    return (
    <BrowserRouter>
    <div>
      <Navbar getKeywordValue1={this.getKeywordValue} getCategoryValue={this.getCategoryValue}/>
      <Routes>
        <Route  path="/" element={ <Body key={this.state.category}  recordPerPage={6} category={this.state.category} 
            country = {this.state.country} keyword ={this.state.keyword} language={this.state.language}/>}/>
        </Routes>
        </div>
      </BrowserRouter>
    )
  }
}
}



