export const MODE_ENUM = {
  LEARN: 'LEARN',
  EDIT: 'EDIT',
} as const;

export const ROLE_ENUM = {
  OWNER: 1,
  READ_ONLY: 2,
  EDITABLE: 3,
} as const;

type RoleKeyType = keyof typeof ROLE_ENUM;
export type RoleType = (typeof ROLE_ENUM)[RoleKeyType];

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

export type AccessType = {
  role: RoleKeyType;
  user: {
    id: number;
    email: string;
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

export type UpdateBulkWordApiArgsType = {
  data: UpdateWordType[];
  setId: number;
};

export type DeleteSetAccessesApiArgsType = {
  setId: number;
  userId: number;
};

export type CrreateSetAccessesApiArgsType = {
  setId: number;
  email: string;
  role: RoleType;
};

export type AuthType = keyof typeof AUTH_ENUM;
export type ModeType = keyof typeof MODE_ENUM;
