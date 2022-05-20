import React  from 'react'

export default function NewsCard (props){
  // render() {
    let {title, description , imageURL , newsUrl , publishedAt} =props;
    return (
      <div className="my-3" style={{height:"400px"}}>
        <div className="card" style={{height:"400px"}}>
            <img src={imageURL} className="card-img-top" alt="news pic" style={{height:"150px"}}/>
            <div className="card-body">
                <h5 className="card-title" style={{height:"70px"}}>{title}</h5>
                <p className="card-text" style={{height:"90px"}}>{description}</p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                <span className='badge bg-light text-dark mx-3'>{"Published on: "+publishedAt}</span>
            </div>
        </div>
      </div>
    )
  // }
}
