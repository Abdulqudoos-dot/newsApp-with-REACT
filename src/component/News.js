import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component';
import '../css/News.css'
import Aside from './Aside';

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResultes] = useState(0)

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    const fetchNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5eb145f1bac448719ac55088845fe795&page=${page}&pageSize=${props.pageSize}`
        setLoading({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(parsedData.articles)
        setTotalResultes(parsedData.totalResults)
        setLoading(false)
    }

    useEffect(() => {
        fetchNews()
        // eslint-disable-next-line
    }, [])


    const fetchData = async () => {
        setPage(page + 1)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5eb145f1bac448719ac55088845fe795&page=${page + 1}&pageSize=${props.pageSize}`
        setLoading({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResultes(parsedData.totalResults)
        setLoading(false)
    }
    return (
        <>
            <div className='News'>
                <div>
                <div style={{ marginTop: '84px' }}>
                    <h2 className='text-center my-3'>MonkeyNews - Today Top {capitalize(props.category)} News</h2>
                    {loading && <Spinner />}
                </div>
                <div className='InfiniteScroll'>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}>

                    <div className='container'>
                        <div className='row'>
                            {articles.map((element) => {
                                return <div className='mx-4 my-4 col-md-3' key={element.url} >
                                    <NewsItem key={element.url} source={element.source.name} author={element.author} time={element.publishedAt} title={element.title.slice(0, 64)} description={element.description === null ? element.description : element.description.slice(0, 85)} imageUrl={element.urlToImage} newsUrl={element.url} />
                                </div>
                            })}
                        </div>
                    </div>

                </InfiniteScroll>
                </div>
                </div>
                <div className='Aside'>
                <Aside setCountry ={props.setCountry} fetchNews={fetchNews} />
                </div>
            </div>

        </>
    )

}

export default News