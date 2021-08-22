import React, { FC, SetStateAction } from 'react'
import { useState, useEffect } from 'react'
import { Dialog as DialogInterface } from '../interfaces/Dialog'
import { Story } from '../interfaces/Story'
import Dialog from './Dialog'

const Path:FC<{story: Story, setCurrentStoryState: React.Dispatch<SetStateAction<Story | null>>}> = ({ story, setCurrentStoryState }) => 
{
    const [currentDialog, setCurrentDialog] = useState<DialogInterface | null>(null) 

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

    const DialogArr = () => 
    {
        if (currentDialog) return <Dialog dialog={currentDialog} setCurrentDialog={setCurrentDialog} />;

        const dialogsElement = story.dialogs.map((dialog) => {
            return (
                <button onClick={() => setCurrentDialog(dialog)}>
                {dialog.id}
                </button>
            );
        });
        return (
            <>
            {dialogsElement}
            </>
        );
    }

    return (
    <div>
        <h1>New screen</h1>
        <p>You choosed {'\"' + story.path + '\"'} path</p>
        <p>Choose dialog id:</p>
        <DialogArr />
        <CreateDialog />
        <button onClick={() => setCurrentStoryState(null)}>
            Return to main menu
        </button>
    </div>
    );
}
//TODO: Dialog object shoulde be over every other text


export default Path;