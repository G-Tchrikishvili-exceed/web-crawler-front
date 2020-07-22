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
    crawledItems: [],
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get(`${apiUrl}/get-all`, {
        timeout: 10000,
      })
      .then((res) => {
        const crawledItems = res.data.crawledItems;
        this.setState({ crawledItems, isLoading: false });
      })
      .catch((err) => {
        this.setState({ isLoading: false });
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
    const { crawledItem, crawledItems, isLoading } = this.state;
    return (
      <div className='App'>
        <Router>
          <NavComponent />

          <Switch>
            <Route path='/' exact>
              <CrawlerComponent
                updateSingleCrawl={this.updateSingleCrawl}
                crawledItem={crawledItem}
              />
            </Route>
            <Route path='/crawledList'>
              <CrawledListComponent
                isLoading={isLoading}
                updateSingleCrawl={this.updateSingleCrawl}
                crawledItems={crawledItems}
                crawledItem={crawledItem}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
