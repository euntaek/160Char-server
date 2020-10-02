import {
  Entity,
  ObjectIdColumn,
  Column,
  ObjectID,
  CreateDateColumn,
  DeleteDateColumn,
  BaseEntity,
  DeepPartial,
} from 'typeorm';
import { InternalServerError } from '../errors/errRequest';

@Entity()
export default class User extends BaseEntity {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  displayName: string;

  @Column()
  hashedPassword: string;

  @Column()
  isCertified: boolean;

  @CreateDateColumn()
  publishedDate: Date;

  @DeleteDateColumn()
  deletedDate!: Date;

  static async createOne(user: DeepPartial<User>): Promise<UserInfo> {
    try {
      const createdUser = await this.create({ ...user, isCertified: false }).save();
      return { email: createdUser.email, displayName: createdUser.displayName };
    } catch (error) {
      throw new InternalServerError({ location: 'UserModel.createOne', log: error });
    }
  }
  static async getOneByEmail(email: string): Promise<User | undefined> {
    try {
      return await this.findOne({ where: { email } });
    } catch (error) {
      throw new InternalServerError({ location: 'UserModel.getOnByEmail', log: error });
    }
  }
}
