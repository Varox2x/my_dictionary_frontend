import { ENUM_CARD_SIDE } from "../types";
import InputStage from "./InputStage";

export const stagesComponents = {
    [ENUM_CARD_SIDE.FRONT]: [
        <InputStage />,
        <p>Example sentence</p>
    ],
    [ENUM_CARD_SIDE.BACK]: [
        <div />
    ]
}