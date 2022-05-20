import React, {Component} from 'react'
import NewsCard from './NewsCard'
import logo from '../logo/Homelogo.png';
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export default class Body
 extends Component {
  
  static defaultProps = {
    recordPerPage:6,
    country:"in",
    category:"general",
    keyword:"",
    language:"en"
  }
  static propTypes={
    recordPerPage:PropTypes.number,
    country:PropTypes.string,
    category:PropTypes.string,
    keyword:PropTypes.string,
    language:PropTypes.string
  }
  keywordUrl="";
  recordPerpage = 6;
  countryUrl="";
  categoryUrl="";
  elements = {"response": { "status": null,
                            "totalResults": 0,
                            "articles": []},
                "page":1,
                "totalPage":0,
                "loading":true,
                "newsFilter":"top-headlines",
                "header":(this.props.category.substring(0,1).toUpperCase()+this.props.category.substring(1)+" Top Headlines").trim()
              }; 
  constructor(props) {
    super(props);
    this.state = this.elements;
    this.keywordUrl  = this.props.keyword!==""?"&q="+this.props.keyword:"";
    this.recordPerpage = this.props.recordPerPage;
    this.countryUrl  = this.props.country!==""?"&country="+this.props.country:"";
    this.categoryUrl = this.props.category!==""?"&category="+this.props.category:"";
            //Print Statemet
            // console.log("countryUrl: "+this.state.countryUrl);
            console.log("categoryUrl: "+this.categoryUrl);
            // console.log("keywordUrl: "+this.state.keywordUrl);
  }
  async componentDidMount(){
    this.categoryUrl = this.props.category!==""?"&category="+this.props.category:"";
    console.log("categoryUrlCDM: "+this.categoryUrl);
            // console.log("keywordUrl: "+this.keywordUrl);
            // console.log("keyword: "+this.props.keyword);
    let apiUrl = `https://newsapi.org/v2/${this.state.newsFilter}?page=${this.state.page}&language=${this.props.language}${this.countryUrl}${this.categoryUrl}&apiKey=41db71e2a6d3472b88f7d19f12a28d23&pageSize=${this.recordPerpage}${this.keywordUrl}`;
            //console.log("apiUrl: "+apiUrl);
    this.setState({
      "loading":true
    });
    let result = await fetch(apiUrl);
            //console.log(result);
    let persedata = await result.json();
            //console.log(persedata);
    this.setState({
      "response":persedata,
      "page":1,
      "totalPage":Math.ceil((persedata.totalResults-1)/this.recordPerpage),
      "loading":false
    });
  }
async componentDidUpdate(prevProps){

  //When A New Keyword is entered
    if(prevProps.keyword !== this.props.keyword){
      this.keywordUrl  = this.props.keyword!==""?"&q="+this.props.keyword:"";
      this.setState({keywordUrl:this.props.keyword!==""?"&q="+this.props.keyword:""});
      let apiUrl = `https://newsapi.org/v2/${this.state.newsFilter}?page=${1}&language=${this.props.language}${this.countryUrl}${this.categoryUrl}&apiKey=41db71e2a6d3472b88f7d19f12a28d23&pageSize=${this.recordPerpage}${this.keywordUrl}`;
      this.setState({
        "loading":true
      });
      let result = await fetch(apiUrl);
      console.log(result);
      let persedata = await result.json();
      console.log(persedata);
      this.setState({
        "response":persedata,
        "page":1,
        "totalPage":Math.ceil((persedata.totalResults-1)/this.recordPerpage),
        "loading":false
      });
    }
}

// Next and Previous Button Function
  // fnPrevious = async ()=>{
  //   let apiUrl = `https://newsapi.org/v2/${this.state.newsFilter}?page=${this.state.page-1}&language=${this.props.language}${this.countryUrl}${this.categoryUrl}&apiKey=41db71e2a6d3472b88f7d19f12a28d23&pageSize=${this.recordPerpage}${this.keywordUrl}`;
  //   console.log("apiUrlP: "+apiUrl);
  //   this.setState({
  //     "loading":true
  //   });
  //   let result = await fetch(apiUrl);
  //   console.log(result);
  //   let persedata = await result.json();
  //   console.log(persedata);
  //   this.setState({
  //     "response":persedata,
  //     "page":this.state.page-1,
  //     "totalPage":Math.ceil((persedata.totalResults-1)/this.recordPerpage),
  //     "loading":false
  //   });
  // }
  // fnNext = async ()=>{
  //   let apiUrl = `https://newsapi.org/v2/${this.state.newsFilter}?page=${this.state.page+1}&language=${this.props.language}${this.countryUrl}${this.categoryUrl}&apiKey=41db71e2a6d3472b88f7d19f12a28d23&pageSize=${this.recordPerpage}${this.keywordUrl}`;
  //   console.log("apiUrlN: "+apiUrl);
  //   this.setState({
  //     "loading":true
  //   });
  //   let result = await fetch(apiUrl);
  //   console.log(result);
  //   let persedata = await result.json();
  //   console.log(persedata);
  //   this.setState({
  //     "response":persedata,
  //     "page":this.state.page+1,
  //     "totalPage":Math.ceil((persedata.totalResults-1)/this.recordPerpage),
  //     "loading":false
  //   });
  //   console.log("keywordUrl: "+this.keywordUrl);
  // }

  handleOnChange= async (newsFilter)=>{
      console.log(newsFilter);
      this.setState({"newsFilter":newsFilter,
                      "header":newsFilter==="everything"?"All Tranding News":"Top Headlines"
      });
      console.log(this.state.page);
      let apiUrl = `https://newsapi.org/v2/${newsFilter}?page=${this.state.page}&language=${this.props.language}${this.countryUrl}${this.categoryUrl}&apiKey=41db71e2a6d3472b88f7d19f12a28d23&pageSize=${this.recordPerpage}${this.keywordUrl}`;
      console.log("apiUrlN: "+apiUrl);
      this.setState({
        "loading":true
      });
      let result = await fetch(apiUrl);
      console.log(result);
      let persedata = await result.json();
      console.log(persedata);
      this.setState({
        "response":persedata,
        "page":1,
        "totalPage":Math.ceil((persedata.totalResults-1)/this.recordPerpage),
        "loading":false
      });
  }
 fetchMoreData = async () => {
  let apiUrl = `https://newsapi.org/v2/${this.state.newsFilter}?page=${this.state.page+1}&language=${this.props.language}${this.countryUrl}${this.categoryUrl}&apiKey=41db71e2a6d3472b88f7d19f12a28d23&pageSize=${this.recordPerpage}${this.keywordUrl}`;
  console.log("apiUrlN: "+apiUrl);
  this.setState({
    "loading":true
  });
  let result = await fetch(apiUrl);
  console.log(result);
  let persedata = await result.json();
  console.log(persedata);
  //let articles = this.state.response.articles.concat(persedata.article);
  let response = {
    "status": this.state.response.status,
    "totalResults":this.state.response.totalResults,
    "articles": this.state.response.articles.concat(persedata.articles)
  }
  this.setState({
    "response":response,
    "page":this.state.page+1,
    "totalPage":Math.ceil((persedata.totalResults-1)/this.recordPerpage),
    "loading":false
  });
  };
  render() {
    //console.log("in body keyword: "+this.props.keyword);
    //console.log();
    //console.log("apiUrlrender: "+this.apiUrl);
    return (
      <div style={{backgroundColor:'rgb(147 203 203 / 55%)'}}>
        <div>
          { this.props.keyword!=="" && this.props.category==="" && <div className= "py-2 btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" className="btn-check" name='newsFilter' id="headlines" autoComplete="off" onChange={()=>{this.handleOnChange("top-headlines")}} defaultChecked/>
            <label className="btn btn-sm btn-outline-dark  ms-2" htmlFor="headlines">Headlines</label>

            <input type="radio" className="btn-check" name='newsFilter' id="everything" autoComplete="off"  onChange={()=>{this.handleOnChange("everything")}}/>
            <label className="btn btn-sm btn-outline-dark " htmlFor="everything" >All News</label>
          </div>}
          
            <h2 className="py-2 text-center">{this.state.header}</h2>
            {this.props.keyword!=="" && <h3 className="py-2 text-center">{"Showing search results for - "+this.props.keyword}</h3>}
          {/* {this.state.loading && <Loading/>} */}
          <InfiniteScroll
            dataLength={this.state.response.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.page<this.state.totalPage}
            loader={<Loading/>}>
            <div className='container'>
              <div className="row row-cols-lg-3 d-flex justify-content-between" >
              {this.state.response.articles.map((article)=>{
                      return <div key = {article.url} className="col">
                      <NewsCard  title={article.title?article.title.substring(0,60)+"...":"..."} description = {article.description?article.description.substring(0,100)+"...":"..."} imageURL = {article.urlToImage?article.urlToImage:logo} newsUrl = 
                      {article.url} publishedAt = {article.publishedAt.substring(8,10)+article.publishedAt.substring(4,8)+article.publishedAt.substring(0,4)}/>
                      </div>

                    }
                  )
                }
                
              </div>
            </div>
          </InfiniteScroll>
         {/* Buttons NEXT and PREVIOUS */}
          {/* <div className='container d-flex justify-content-between'>
          <button type="button" className="btn btn-sm btn-dark" onClick={this.fnPrevious} disabled={this.state.page<=1?true:false}>&larr; Pervious</button>
          <button type="button" className="btn btn-sm btn-dark" onClick={this.fnNext} disabled={this.state.page>=this.state.totalPage?true:false}>Next &rarr;</button>
          </div> */}
        </div>
      </div>
    )
    // }else{
    //   return <div style={{backgroundColor:'#93cbcb', height:"1080px"}}>
    //           <div className='container mx-3'>
    //             <Loading/>
    //           </div>
    //         </div>
    // }
  }
}
