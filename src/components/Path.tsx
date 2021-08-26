import React, { FC, SetStateAction, useState, useEffect } from 'react'

import { Dialog as DialogInterface } from '../interfaces/Dialog'
import { Story } from '../interfaces/Story'

import Dialog from './Dialog'

interface Props 
{
    story: Story, 
    setCurrentStoryState: React.Dispatch<SetStateAction<Story | null>>
}

const Path : FC<Props> = ({ story, setCurrentStoryState }) => 
{
    const [currentDialogState, setCurrentDialog] = useState<DialogInterface | null>(null)

    function handleCreateDialog () 
    {
        let newIndex = 1;
        story.dialogs.forEach(({id}) => {
            if (id >= newIndex) newIndex = id + 1;
        });
        const dialogObj: DialogInterface = {id: newIndex, senderTextArr: [], questionArr: []};
        setCurrentStoryState({path: story.path, dialogs: story.dialogs.concat(dialogObj)});

    }

    const CreateDialog = () => 
    {
        return (
            <button onClick={handleCreateDialog}>
                Create new dialog
            </button>
        );
    }

    const ConditionalComponent = () => 
    {
        if (currentDialogState) return <Dialog dialogState={currentDialogState} 
        setCurrentDialogState={setCurrentDialog}
        story={story}
        setCurrentStoryState={setCurrentStoryState}
        />;

        const dialogsElement = story.dialogs.map((dialog) => {
            return (
                <button onClick={() => setCurrentDialog(dialog)}>
                {dialog.id}
                </button>
            );
        });
        return (
            <>
                <h1>New screen</h1>
                <p>You choosed {'"' + story.path + '"'} path</p>
                <p>Choose dialog id:</p>
                {dialogsElement}
                <CreateDialog />
                <button onClick={() => setCurrentStoryState(null)}>
                    Return to main menu
                </button>
            </>
        );
    }

    return (
    <div>
        <ConditionalComponent />
    </div>
    );
}


export default Path;