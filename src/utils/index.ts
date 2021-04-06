import { hash } from 'bcryptjs';

export const generateHash = async (s: string): Promise<string> => {
  return await hash(s, 8);
};
