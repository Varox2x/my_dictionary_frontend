import { Tokens } from '../types';

const getCurrentUserTokens = (): Tokens | false => {
  const tokensJson = localStorage.getItem('tokens');
  if (tokensJson) {
    return JSON.parse(tokensJson);
  }
  return false;
};

export default getCurrentUserTokens;
