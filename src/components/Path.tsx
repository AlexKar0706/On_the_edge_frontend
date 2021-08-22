import React, { FC, SetStateAction } from 'react'

const Path:FC<{ownPath: String, setPathState: React.Dispatch<SetStateAction<String>>}> = ({ ownPath, setPathState }) => 
{
    return (
    <div>
        <h1>New screen</h1>
        <p>You choosed {'\"' + ownPath + '\"'} path</p>
        <button onClick={() => setPathState('')}>
            Return to main menu
        </button>
    </div>
    );
}

export default Path;