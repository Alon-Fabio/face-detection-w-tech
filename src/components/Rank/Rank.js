import React from 'react';

const Rank = ({userInfo}) => {
    return(
        <div className='Rank'>
            <div className='white f3'>
                {`${userInfo.name}, your current rank is..`}
            </div>
            <div className='white f1'>
                {userInfo.entries}
            </div>
        </div>
    )
}

export default Rank;