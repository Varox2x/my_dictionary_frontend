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

export type DirectionType = keyof typeof DIRECTION_ENUM;

export type CardSideType = keyof typeof ENUM_CARD_SIDE;
