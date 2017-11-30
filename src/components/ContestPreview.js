import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ContestPreview extends Component {
  handleOnClick = () => {
    this.props.onClick(this.props.id)
  };

  render(){
    return(
      <div className='link contestPreview' onClick={this.handleOnClick}>
        <div className='category-name'>
          {this.props.categoryName}
        </div>
        <div className='contest-name'>
          {this.props.contestName}
        </div>
      </div>
    );
  }
}

ContestPreview.propTypes = {
  id: PropTypes.number.isRequired,
  contestName: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ContestPreview;