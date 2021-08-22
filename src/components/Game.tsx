import React, { FC, SetStateAction } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Story } from '../interfaces/Story'
import Path from './Path';

function Game() {
    const [storyArrState, setStoryArrState] = useState<Array<Story>>([]);
    const [currentStoryState, setCurrentStoryState] = useState<Story | null>(null);

    useEffect(() => {
        console.log(storyArrState);
        console.log(currentStoryState);
    }, [storyArrState])

    useEffect(() => {
        if (currentStoryState) 
        {
            const story = storyArrState.find(({path}) => path === currentStoryState.path);
            if (story?.dialogs) story.dialogs = currentStoryState.dialogs;
        }
    }, [currentStoryState])

    function handleCreateStory() 
    {
        let newPath = String.fromCharCode(storyArrState.length + 97)
        setStoryArrState(storyArrState.concat({path: newPath, dialogs: []}));
    }

    const ChoosePath:FC<{story: Story}> = ({ story }) =>
    {
        return (
            <div>
            <button onClick={() => setCurrentStoryState(story)}>
                {story.path}
            </button>
            </div>
        );
    }

    const Paths = () => 
    {
        if (currentStoryState === null)
        {
            return (
            <>
                <h1>Hello world!</h1>
                <p>Current pathes:</p>
                {storyArrState.map((m_story, index) => <ChoosePath key={index} story={m_story} />)}
                <button onClick={handleCreateStory}>
                    Create new path!
                </button>
            </>
        )} else {
            return <Path story={currentStoryState} setCurrentStoryState={setCurrentStoryState} />;
        }
    }

    return (
        <div>
            <Paths />
        </div>
    )
}

export default Game;