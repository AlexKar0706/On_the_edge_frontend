import { Quest } from "./Quest";

export interface Dialog {
    id: number,
    senderTextArr: Array<String>,
    questionArr: Array<Quest>
}