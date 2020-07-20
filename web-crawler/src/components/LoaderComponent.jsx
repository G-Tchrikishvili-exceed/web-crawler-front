import React, { Component } from 'react';
export default class App extends Component {
  //other logic
  render() {
    return (
      <div className='lds-ellipsis-container'>
        <div className='lds-ellipsis'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}
