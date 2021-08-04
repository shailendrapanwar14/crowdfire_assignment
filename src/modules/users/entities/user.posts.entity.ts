import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  BelongsTo,
} from 'sequelize-typescript';
import { Users } from './user.entity.';

@Table({
  tableName: 'UserPosts',
})
export class UserPosts extends Model<UserPosts> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  })
  postId: number;

  @Column({
    type: DataType.STRING(140),
    allowNull: false,
  })
  post: string;

  @BelongsTo(() => Users, 'userId')
  UserId: Users;
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @Column({
    type: DataType.DATE,
    allowNull: true,
    defaultValue: Date.now
  })
  postedAt: Date;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  active: Boolean;
}
