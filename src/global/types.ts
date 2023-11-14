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
  definitions: string[];
  names: string[];
  // userWordLvl: number | null;
  exampleSentence: ExampleSentenceType;
};

export type ExampleSentenceType = (string | null)[];

export type UpdateWordType = {
  id: number;
} & Partial<WordType>;

export type CreateWordType = Partial<WordType>;

export type Set = {
  id: number;
  name: string;
  access: {
    role: number;
  };
};

export type ResponseDataType<T> = {
  limit: number;
  page_count: number;
  current_page: number;
  data: T;
};

export type QueryData = {
  pageParams: undefined | number | string | unknown;
  pages: ResponseDataType<Set[]>[];
};

export type ListElementProps = WordType & {
  setChanges: (changes: Partial<WordType>) => void;
};

export type CreateWordApiArgsType = {
  data: CreateWordType;
  setId: number;
};

export type AuthType = keyof typeof AUTH_ENUM;
export type ModeType = keyof typeof MODE_ENUM;
