import React, {FC, SetStateAction} from 'react'
import { Dialog as DialogInterface } from '../interfaces/Dialog'

const Dialog:FC<{ dialog: DialogInterface, setCurrentDialog: React.Dispatch<SetStateAction<DialogInterface | null>>; }> = 
({ dialog, setCurrentDialog }) => 
{
    return (
        <></>
    );
}

export default Dialog;