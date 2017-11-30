import React from 'react'
import PropTypes from 'prop-types'
import ContestPreview from './ContestPreview'

const ContestList = ({onContestClick, contests}) =>{
  return(
    <div>
      {contests.map(contest =>
        <ContestPreview
          key={contest.id}
          onClick={onContestClick}
          {...contest}/>
      )}
    </div>
  )
};

ContestList.propTypes = {
  contests: PropTypes.array.isRequired,
  onContestClick: PropTypes.func.isRequired
};

export default ContestList;