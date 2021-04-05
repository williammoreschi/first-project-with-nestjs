import {
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('connectors')
export class Connector {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  privacy: string;

  @Column()
  baseUrl: string;

  @Column()
  logoUrl: string;

  @Column()
  category: string;

  @Column()
  description: string;

  @Column()
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor(connector?: Partial<Connector>) {
    Object.assign(this, connector);
  }
}
