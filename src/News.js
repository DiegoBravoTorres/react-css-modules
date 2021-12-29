import React from "react";
import axios from "axios";
import cx from 'classnames';

//import GridItem from "./components/grid/gridItem";
//import Grid from './components/grid/grid';

import styles from './components/grid/gridItem.module.css';
import gridStyles from './components/grid/grid.module.css';
import mediaStyles from './components/grid/media.module.css';

const newsAPI = `https://newsapi.org/v2/everything?q=ai&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

class App extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    errors: null
  };

  getArticles() {
    axios
      .get(
        newsAPI
      )
      .then(response => {
        return response.data.articles.map(article => ({
          date: `${article.publishedAt}`,
          title: `${article.title}`,
          url: `${article.url}`,
          imgUrl: `${article.urlToImage}`
        }));
      })
      .then(articles => {
        this.setState({
          articles,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getArticles();
  }

  render() {
    const { isLoading, articles } = this.state;
    return (
      <React.Fragment>
    
        <div className={cx(gridStyles.grid, mediaStyles.grid)}>

          {!isLoading ? (
            articles.map(article => {
              const { date, title, url, imgUrl } = article;
              return (
    
                <div className={styles.card} style={{color:"white"}} key={title}>
                  <p>{date}</p>
                  <p>{title}</p>
                  <p>{url}</p>
                  <a href={url} rel="noreferrer" target="_blank">
                  <button>Go To</button></a>
                  <img className={styles.img} src={imgUrl} alt={title} ></img>

                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </React.Fragment>
    );
  }
}
export default App;