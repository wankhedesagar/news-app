import React from 'react'

const NewsItem = (props) => {

        let { title, description, imageUrl, newsUrl, author, date, source } = props
        return (
            <div className='my-3'>
                <div className="card" >
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>
                        {source}</span>
                    <img src={!imageUrl ? 'https://www.livemint.com/lm-img/img/2023/05/31/600x338/INDIA-INFRASTRUCTURE-1_1685505210468_1685505227434.jpg' : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description}</p>
                        {/* below two condition is same only syntax is defferent */}
                        {/* {author === null ? "Unknown" : author} */}
                        <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>

            </div>

        )
    
}
// not of null true ho hayega aur phir Unknown print hot jayega agar author null hoga to
// {author === null ? "Unknown" : author} 
//this conditon same work as line number 14

export default NewsItem;
