import React, { FC } from 'react'
import { ReactElement } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

interface Quest {
    question: String,
    nextQuestId: Number
}

interface Dialog {
    id: Number,
    senderTextArr: Array<String>,
    questionArr: Array<Quest>
}

interface Story {
    storyPath: String,
    storyLine: Array<Dialog>
}

function Game() {
    const [pathArrState, setPathArrState] = useState<Array<String>>([]);
    const [createStoryPathState, setCreateStoryPathState] = useState<Boolean>(false);

    useEffect(() => {
        console.log(pathArrState);
    }, [pathArrState])

    function handleCreateStory() 
    {
        let newPath = String.fromCharCode(pathArrState.length + 97)
        setPathArrState(pathArrState.concat(newPath));
    }

    const Path:FC<{ownPath: String}> = ({ ownPath }) =>
    {
        return (
            <div>
            <button>
                {ownPath}
            </button>
            </div>
        );
    }

    const Paths = () => 
    {
        return (
            <>
            {pathArrState.map((path, index) => <Path key={index} ownPath={path} />)}
            </>
        )
    }

    return (
        <div>
            <h1>Hello world!</h1>
            <p>Current pathes:</p>
            <Paths />
            <button onClick={handleCreateStory}>
                Create new path!
            </button>
        </div>
    )
}

export default Game;