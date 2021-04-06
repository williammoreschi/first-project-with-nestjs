import { define } from 'typeorm-seeding';

import { generateHash } from '../../utils';
import { User } from '../entities/user.entity';

define<Promise<User>, any>(User, async (_, email: string) => {
  const user = new User();
  const password = '123456';

  user.email = email;
  user.password = await generateHash(password);

  return user;
});
