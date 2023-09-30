import { ENUM_CARD_SIDE, ENUM_STAGES_NAMES } from "../types";
import HintStage from "./HintStage";
import InputStage from "./InputStage";

export const stagesComponents = {
    [ENUM_CARD_SIDE.FRONT]: [
        { component: <InputStage />, name: ENUM_STAGES_NAMES.INPUT },
        { component: <p>Example sentence</p>, name: ENUM_STAGES_NAMES.EXAMPLE },
    ],
    [ENUM_CARD_SIDE.BACK]: [
        { component: <HintStage />, name: ENUM_STAGES_NAMES.HINT },
    ]
}