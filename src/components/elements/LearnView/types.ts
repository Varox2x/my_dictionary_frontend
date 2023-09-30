export const ENUM_CARD_SIDE = {
  FRONT: 'FRONT',
  BACK: 'BACK',
} as const;

export const DIRECTION_ENUM = {
  CENTER: 'CENTER',
  TOP: 'TOP',
  BOTTOM: 'BOTTOM',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
} as const;

export const ENUM_STAGES_NAMES = {
  INPUT: 'INPUT',
  EXAMPLE: 'EXAMPLE',
  HINT: 'HINT',
  DEFAULT: 'DEFAULT',
  STAGE_DISABLE: 'STAGE_DISABLE',
} as const;

export type DirectionType = keyof typeof DIRECTION_ENUM;

export type CardSideType = keyof typeof ENUM_CARD_SIDE;

export type StagesNamesType = keyof typeof ENUM_STAGES_NAMES;
