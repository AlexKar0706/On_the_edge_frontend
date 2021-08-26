import React, {FC, useState, useEffect, SetStateAction} from "react";
import { Dialog as DialogInterface} from '../interfaces/Dialog'

interface Props 
{
    text: string,
    index: number,
    dialogState: DialogInterface,
    setCurrentDialogState: React.Dispatch<SetStateAction<DialogInterface | null>>
}

const SenderText:FC<Props> = ({text, index, dialogState, setCurrentDialogState}) =>
{
    const [changeTextState, setChangeTextState] = useState<Boolean>(false);

    function handelDeleteText() 
    {
        const newSenderTextArr = dialogState.senderTextArr.filter((str, strIndex) => strIndex !== index);
        setCurrentDialogState({id: dialogState.id,senderTextArr:newSenderTextArr,questionArr:dialogState.questionArr});
    }

    const ConditionalComponent = () => 
    {
        const [newTextState, setNewTextState] = useState<string>("");
        if (changeTextState) 
        {
                return (
                <div>
                    <label>
                        Write new text for sender:
                        <br/>
                        <input 
                            type="text" 
                            placeholder="Sender text"
                            name="senderText"
                            value={newTextState}
                            onChange={e => setNewTextState(e.currentTarget.value)}
                        />
                    </label>
                    <button onClick={() => 
                        {
                            const newSenderTextArr = dialogState.senderTextArr.map((str, strIndex) =>
                            {
                                if (strIndex === index) return newTextState;
                                return str
                            });
                            setChangeTextState(false);
                            setCurrentDialogState({id: dialogState.id,senderTextArr:newSenderTextArr,questionArr:dialogState.questionArr});
                            
                        }}>
                        Change text
                    </button>
                </div>
            );
        }   

        return (
            <div>
                <p>{index + 1}. {text}</p>
                <button onClick={() => setChangeTextState(true)}>
                    Change this text
                </button>
                <button onClick={handelDeleteText}>
                    Delete this
                </button>
            </div>
        );
    }

    return (
        <div>
            <ConditionalComponent />
        </div>
    )
}

export default SenderText;