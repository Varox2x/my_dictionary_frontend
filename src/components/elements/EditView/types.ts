export const ENUM_WORD_RESOURCE = {
  DEFINITIONS: 'definitions',
  NAMES: 'names',
  EXAMPLE_SENTENCE: 'exampleSentence',
} as const;

type WordResoureKeyType = keyof typeof ENUM_WORD_RESOURCE;

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
