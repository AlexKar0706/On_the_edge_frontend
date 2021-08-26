import { Quest } from "./Quest";

export interface Dialog {
    id: number,
    senderTextArr: Array<string>,
    questionArr: Array<Quest>
}