import React, { Component } from 'react';
import Header from './Header';
import ContestList from './ContestList';
import PropTypes from 'prop-types';

const pushState = (object, url) => window.history.pushState(object, '', url);


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pageHeader: 'Naming Contest',
      contests: this.props.initialContests,
    };
  }
  componentDidMount(){

  }

  fetchContest = (contestId) => {
    pushState(
      {currentContestId: contestId},
      `/contests/${contestId}`
    )
  };


  render(){
    return (
      <div>
        <Header message={this.state.pageHeader}/>
        <ContestList
          onContestClick={this.fetchContest}
          contests={this.state.contests}/>
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