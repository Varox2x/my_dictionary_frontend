export const ENUM_WORD_RESOURCE = {
  DEFINITIONS: 'definitions',
  NAMES: 'names',
  EXAMPLE_SENTENCE: 'exampleSentence',
} as const;

export const ENUM_EDIT_VIEW_POPUP = {
  CREATE_WORD: 'CREATE_WORD',
  SET_SETTINGS: 'SET_SETTINGS',
  NONE: 'NONE',
} as const;

type WordResoureKeyType = keyof typeof ENUM_WORD_RESOURCE;
export type EditWordPopupType = keyof typeof ENUM_EDIT_VIEW_POPUP;

export type UpdateWordResourceType = {
  id: number;
  wordResourceType: WordResoureType;
  index: number;
  newValue: string;
};

export type DeleteWordResourceType = {
  id: number;
  wordResourceType: WordResoureType;
  index: number;
};

export type CreateWordResourceType = {
  id: number;
  wordResourceType: WordResoureType;
};

export type WordResoureType = (typeof ENUM_WORD_RESOURCE)[WordResoureKeyType];
