import React from 'react'

const  NewsItem  = (props)=> {
    
        let { title, description, imageUrl, newsUrl } = props
        return (
            <div className="card" >
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{props.source}</span>
                <img src={imageUrl ? imageUrl : 'https://img.etimg.com/thumb/msid-97728032,width-1070,height-580,imgsize-36416,overlay-economictimes/photo.jpg'} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
                    <footer className="blockquote-footer">BY {props.author ? props.author : 'Unknown'} <cite title="Source Title">at {new Date(props.time).toUTCString()}</cite></footer>
                </div>
            </div>
        )
}

export default NewsItem