import React, { Component } from 'react';
import Header from './Header';
import ContestList from './ContestList';
import PropTypes from 'prop-types';
import Contest from './Contest'
import * as api from '../api'

const pushState = (object, url) => window.history.pushState(object, '', url);

class App extends Component {
  constructor(props){
    super(props);
    this.state = this.props.initialData
  }
  componentDidMount(){

  }

  fetchContest = (contestId) => {
    pushState(
      {currentContestId: contestId},
      `/contests/${contestId}`
    );

    api.fetchASingleContest(contestId).then((contest) =>{
      this.setState({
        currentContestId: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest
        }

      });
    })

  };

  pageHeader = () => {
    if (this.state.currentContestId){
      return this.currentContest().contestName
    }
    else{
      return 'Naming Contests'
    }
  };

  currentContest = () => { return this.state.contests[this.state.currentContestId] };

  currentContent = () => {

    if (this.state.currentContestId){
      return <Contest {...this.currentContest()}/>
    }
    else{
      return (
        <ContestList
          onContestClick={this.fetchContest}
          contests={this.state.contests}/>)
    }
  };

  render(){
    return (
      <div>
        <Header message={this.pageHeader()}/>
        { this.currentContent() }
      </div>
    );
  }
}

App.propTypes = {
  initialData: PropTypes.object.isRequired
};

export default App;