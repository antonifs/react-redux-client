import React, { Component } from 'react';
import NavBar from './commons/header';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
            {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
    children: React.PropTypes.element.isRequired
};

export default App;
