import React, { FC, SetStateAction } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Path from './Path';

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
    const [currentPathState, setCurrentPathState] = useState<String>('');

    useEffect(() => {
        console.log(pathArrState);
    }, [pathArrState])

    function handleCreateStory() 
    {
        let newPath = String.fromCharCode(pathArrState.length + 97)
        setPathArrState(pathArrState.concat(newPath));
    }

    const ChoosePath:FC<{ownPath: String}> = ({ ownPath }) =>
    {
        return (
            <div>
            <button onClick={() => setCurrentPathState(ownPath)}>
                {ownPath}
            </button>
            </div>
        );
    }

    const Paths = () => 
    {
        if (currentPathState === '')
        {
            return (
            <>
                <h1>Hello world!</h1>
                <p>Current pathes:</p>
                {pathArrState.map((path, index) => <ChoosePath key={index} ownPath={path} />)}
                <button onClick={handleCreateStory}>
                    Create new path!
                </button>
            </>
        )} else {
            return <Path ownPath={currentPathState} setPathState={setCurrentPathState} />;
        }
    }

    return (
        <div>
            <Paths />
        </div>
    )
}

export default Game;