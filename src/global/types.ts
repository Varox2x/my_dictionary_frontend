export const MODE_ENUM = {
  LEARN: 'LEARN',
  EDIT: 'EDIT',
} as const;

export type LoginBodyType = {
  email: string;
  password: string;
};

export const AUTH_ENUM = {
  OK: 'OK',
  LOADING: 'LOADING',
  NO: 'NO',
} as const;

export type WordType = {
  id: number;
  definition: string[];
  name: string[];
  userWordLvl: number | null;
};

export type Set = {
  id: number;
  name: string;
  access: {
    role: number;
  };
};

export type AuthType = keyof typeof AUTH_ENUM;
export type ModeType = keyof typeof MODE_ENUM;
