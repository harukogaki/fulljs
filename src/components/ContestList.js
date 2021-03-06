import React from 'react'
import PropTypes from 'prop-types'
import ContestPreview from './ContestPreview'

const ContestList = ({onContestClick, contests}) =>{
  return(
    <div>
      {Object.keys(contests).map((contestId) =>
        <ContestPreview
          key={contestId}
          onClick={onContestClick}
          {...contests[contestId]}/>
      )}
    </div>
  )
};

ContestList.propTypes = {
  contests: PropTypes.object.isRequired,
  onContestClick: PropTypes.func.isRequired
};

export default ContestList;