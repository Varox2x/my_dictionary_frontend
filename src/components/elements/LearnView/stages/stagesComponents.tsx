import { ENUM_CARD_SIDE, ENUM_STAGES_NAMES } from "../types";
import ExampleSentenceStage from "./ExampleSentenceStage";
import HintStage from "./HintStage";
import InputStage from "./InputStage";

export const stagesComponents = {
    [ENUM_CARD_SIDE.FRONT]: [
        { component: <InputStage />, name: ENUM_STAGES_NAMES.INPUT },
    ],
    [ENUM_CARD_SIDE.BACK]: [
        { component: <HintStage />, name: ENUM_STAGES_NAMES.HINT },
        { component: <ExampleSentenceStage />, name: ENUM_STAGES_NAMES.EXAMPLE },
    ]
}