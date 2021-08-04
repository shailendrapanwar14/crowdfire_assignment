import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { Users } from './user.entity.';

@Table({
  tableName: 'UserFollowers',
})
export class UserFollowers extends Model<UserFollowers> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  })
  Id: number;

  @BelongsTo(() => Users, 'userId')
  UserId: Users;
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @BelongsTo(() => Users, 'userId')
  FollowerId: Users;
  @Column({
    type: DataType.INTEGER,
  })
  followerId: number;
 
  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue:Date.now
  })
  followedAt: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  unfollowedAt: Date;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  active: Boolean;
}
