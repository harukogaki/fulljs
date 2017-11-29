import React, { Component } from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import PropTypes from 'prop-types';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pageHeader: 'Naming Contest',
      contests: this.props.initialContests,
    };
  }

  componentDidMount(){
    axios
      .get('/api/contests')
      .then(response => this.setState({contests: response.data.contests}))
      .catch(error => { console.error(error) })
  }

  render(){
    return (
      <div>
        <Header message={this.state.pageHeader}/>
        <div>
          {this.state.contests.map(contest =>
            <ContestPreview key={contest.id} {...contest}/>
          )}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  initialContests: PropTypes.array.isRequired
};

App.defaultProps = {
  initialContests: []
}

export default App;