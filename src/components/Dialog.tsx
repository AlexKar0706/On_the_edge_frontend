import React, {FC, SetStateAction, useState, useEffect} from 'react'

import { Dialog as DialogInterface } from '../interfaces/Dialog'
import { Quest as QuestInterface } from '../interfaces/Quest'
import { Story as StoryInterface } from '../interfaces/Story'

import SenderText from './SenderText';

interface Props 
{
    dialogState: DialogInterface, 
    setCurrentDialogState: React.Dispatch<SetStateAction<DialogInterface | null>>,
    story: StoryInterface, 
    setCurrentStoryState: React.Dispatch<SetStateAction<StoryInterface | null>>
}

const Dialog : FC<Props> = ({ dialogState, setCurrentDialogState, story, setCurrentStoryState }) => 
{

    useEffect(() => 
    {
        if (dialogState) 
        {
            const dialogId = story.dialogs.findIndex(({id}) => id === dialogState.id);
            story.dialogs[dialogId] = dialogState;
        }
    }, [dialogState])

    function handleAddSenderText () 
    {
        setCurrentDialogState({
            id: dialogState.id,
            senderTextArr: dialogState.senderTextArr.concat("New sender text"),
            questionArr: dialogState.questionArr
        });
    }

    const SenderTextElements = () => {
        return (
        <>
            {dialogState.senderTextArr.map((string, index) => <SenderText key={index} text={string} 
                                                                          index={index} dialogState={dialogState} 
                                                                          setCurrentDialogState={setCurrentDialogState} />)}
            <button onClick={handleAddSenderText}>
                Add new sender text
            </button>
        </>
        )
    }
    
    return (
        <div>
            <p>Current dialog id is: {dialogState.id}</p>
        	<SenderTextElements />
            <br/>
            <button onClick={() => {
                setCurrentDialogState(null);
                }}>
                Return to path menu
            </button>
            <br/>
            <button onClick={() => {
                setCurrentStoryState(null);
                setCurrentDialogState(null);
                }}>
                Return to main menu
            </button>
        </div>
    );
}

export default Dialog;