import getCurrentUserTokens from './getCurrentUserTokens';
import { Tokens } from '../types';

export default function authHeader(
  tokenType: Tokens[keyof Tokens],
): string | false {
  const currentUser: Tokens | false = getCurrentUserTokens();
  if (currentUser) {
    if (tokenType === 'access_token') {
      return `Bearer ${currentUser.access_token}`;
    }
    if (tokenType === 'refresh_token') {
      return `Bearer ${currentUser.refresh_token}`;
    }
  }
  return false;
}
