export const getWordLastInputElementId = (wordId: number, array: string[]) => {
  return `input-${array.length - 1}${wordId}`;
};
