import {
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column('uuid')
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor(user?: Partial<User>) {
    Object.assign(this, user);
  }
}
