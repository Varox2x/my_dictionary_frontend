export const MODE_ENUM = {
  LEARN: 'LEARN',
  EDIT: 'EDIT',
} as const;

export type LoginBodyType = {
  email: string;
  password: string;
};

export type ModeType = keyof typeof MODE_ENUM;
