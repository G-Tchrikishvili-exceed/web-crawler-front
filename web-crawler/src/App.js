import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import NavComponent from './components/NavComponent';
import CrawlerComponent from './components/CrawlerComponent';
import CrawledListComponent from './components/CrawledListComponent';
import { apiUrl } from './url';
import './App.css';

export default class App extends Component {
  state = {
    toggle: true,
    crawledItem: {},
    crawledItems: {},
  };

  componentDidMount() {
    axios.get(`${apiUrl}/page-content/all-crawled`).then((res) => {
      const crawledItems = res.data.crawledItems;
      this.setState({ crawledItems });
    });
  }

  updateSingleCrawl = (crawledItem, updateCrawledItemsToo = true) => {
    if (updateCrawledItemsToo) {
      this.setState({
        crawledItem,
        crawledItems: [...this.state.crawledItems, { ...crawledItem }],
      });
    }
    this.setState({
      crawledItem,
    });
  };

  render() {
    return (
      <div className='App'>
        <Router>
          <NavComponent />

          <Switch>
            <Route path='/' exact>
              <CrawlerComponent
                updateSingleCrawl={this.updateSingleCrawl}
                crawledItem={this.state.crawledItem}
              />
            </Route>
            <Route path='/crawledList'>
              <CrawledListComponent
                updateSingleCrawl={this.updateSingleCrawl}
                crawledItems={this.state.crawledItems}
                crawledItem={this.state.crawledItem}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
