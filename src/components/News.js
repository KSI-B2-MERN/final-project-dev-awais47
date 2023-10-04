import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  constructor(){
    super();
    this.state = {
      articles: []
    }
  }
  
  async componentDidMount(){
    let url = "https://newsapi.org/v2/everything?q=tesla&from=2023-09-04&sortBy=publishedAt&apiKey=c0625a199e7445af92f969adf08c9c95";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({articles:parseData.articles});
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsApp - Top HeadLines</h2>
        
        <div className='row '>
        {this.state.articles.map((element)=>{
          return <div className='col md-3 my-3' key= {element.url}>
            <NewsItem title={element.title.slice(0, 40)} description={element.description.slice(0, 80)} imageUrl={element.urlToImage} newsUrl={element.url} />
          </div>
        })}
          
        </div>
      </div>
    )
  }
}

export default News
