import React, { useState, useEffect } from 'react';
import NewsFormat from './NewsFormat';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';
import altImage from '../asset/AltImage.png';

const NewsList = ({ apiKey, pageSize, country, category }) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    document.title = `${capitalize(category)} - NewsPoint`;
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page + 1}&pageSize=${pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <>
      <h1 className='text-center my-7 mt-24 text-3xl md:text-4xl font-semibold capitalize'>NewsPoint - Top {category} Headlines</h1>
      {loading && <Loader />}
      <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Loader />}>
        <div className='container px-8 md:px-16'>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-7 md:gap-3'>
            {articles.map((element) => {
              return <div className='' key={element.url}>
                <NewsFormat title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : altImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </div>

      </InfiniteScroll>
    </>
  )
};

export default NewsList;
